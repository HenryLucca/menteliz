"use client";

import { createContext, useState, useEffect, useContext } from "react";

import { supabase } from "@/lib/supabase";
import { User } from "@/models/User";
import { useAuthContext } from "./AuthContext";
import { PostgrestError } from "@supabase/supabase-js";
import { Note } from "@/models/Note";

interface UserDataContextProps {
  userData?: User;
  createUser?: (
    userType: "patients" | "family_members" | "doctors",
    username: string
  ) => Promise<void>;
  updateUser?: (
    user: User
  ) => Promise<{ sucess: boolean; error: PostgrestError | null }>;
  searchUser?: (search: string) => Promise<any>;
  searchUserById?: (id: string) => Promise<any>;
  requestConnection?: (user: User) => Promise<void>;
  checkConnectionRequests?: () => Promise<any>;
  acceptConnection?: (user: User) => Promise<void>;
  rejectConnection?: (user: User) => Promise<void>;
  createNote?: (note: Note) => Promise<any>;
}

export const UserDataContext = createContext<UserDataContextProps>({});

export function useUserDataContext() {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error(
      "useUserDataContext must be used within an UserDataProvider"
    );
  }

  return context;
}

export default function UserDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const authContext = useAuthContext();
  const { user } = authContext;
  const [userData, setUserData] = useState<User>(user);

  const createUser = async (
    userType: "patients" | "family_members" | "doctors",
    username: string
  ) => {
    const { data, error } = await supabase.from(userType).insert({
      id: user?.id,
      username: username,
      email: user?.email,
    });

    console.log("data- ", data);
    if (error) {
      throw error;
    }

    setUserData({ ...user, type: userType });
  };

  const updateUser = async (user: User) => {
    console.log("user- ", user);

    const { data, error } = await supabase
      .from(user.type)
      .update(user)
      .eq("id", user.id);

    console.log("data- ", data);

    if (error) {
      throw error;
    }

    setUserData(user);

    return { sucess: true, error };
  };

  const searchUser = async (search: string) => {
    const { data: doctors } = await supabase
      .from("doctors")
      .select()
      .ilike("username", `%${search}%`);

    const { data: family } = await supabase
      .from("family_members")
      .select()
      .eq("id", `${search}`);

    const data: any[] = [];

    if (doctors) {
      data.push(doctors);
    }
    if (family) {
      data.push(family);
    }

    return data;
  };

  const searchUserById = async (id: string) => {
    const { data: patients } = await supabase
      .from("patients")
      .select()
      .eq("id", id);

    const { data: doctors } = await supabase
      .from("doctors")
      .select()
      .eq("id", id);

    const { data: family } = await supabase
      .from("family_members")
      .select()
      .eq("id", id);

    let data: User | null = null;

    if (patients && patients.length > 0) {
      data = patients[0];
    }

    if (doctors && doctors.length > 0) {
      data = doctors[0];
    }

    if (family && family.length > 0) {
      data = family[0];
    }

    return data;
  };

  const requestConnection = async (user: User) => {
    // check if the user is already connected
    const { data: connections, error: connectionsError } = await supabase
      .from("connections")
      .select()
      .eq("patient_id", userData?.id)
      .eq("doctor_id", user.id);

    if (connections && connections.length > 0) {
      console.log("user is already connected");
      return;
    }

    // check if the user has already sent a connection request
    const { data: requests, error: requestsError } = await supabase
      .from("connection_requests")
      .select()
      .eq("senderId", userData?.id)
      .eq("receiverId", user.id);

    if (requests && requests.length > 0) {
      console.log("user has already sent a connection request");
      return;
    }

    // make connection request
    const connectionTypes = {
      patients: "patient_patient",
      doctors: "patient_doctor",
      family_members: "patient_family",
    };

    const { data, error } = await supabase.from("connection_requests").insert({
      sender_id: userData?.id,
      receiver_id: user.id,
      connection_type: connectionTypes[user.type],
      status: "pending",
    });
  };

  const checkConnectionRequests = async () => {
    const { data, error } = await supabase
      .from("connection_requests")
      .select()
      .eq("receiverId", userData?.id);

    if (data && data.length > 0) {
      return data;
    }

    return null;
  };

  const acceptConnection = async (user: User) => {
    // accept connection then delete the connection request
    let connectionType;

    if (userData.type === "doctors") {
      connectionType = "patient_doctor";
    } else if (userData.type === "family_members") {
      connectionType = "patient_family";
    } else {
      connectionType = "patient_patient";
    }

    const { data, error } = await supabase.from("user_connections").insert([
      {
        patient_id: userData?.id,
        user_id: user.id,
        connection_type: connectionType,
      },
    ]);

    if (error) {
      throw error;
    }

    const { data: requests, error: requestsError } = await supabase
      .from("connection_requests")
      .delete()
      .eq("senderId", user.id)
      .eq("receiverId", userData?.id);

    if (requestsError) {
      throw requestsError;
    }

    console.log("requests- ", requests);
  };

  const rejectConnection = async (user: User) => {
    // delete the connection request
    const { data, error } = await supabase
      .from("connection_requests")
      .delete()
      .eq("senderId", user.id)
      .eq("receiverId", userData?.id);

    if (error) {
      throw error;
    }
  };

  const createNote = async (note: Note) => {
    const { data, error } = await supabase.from("mood_notes").insert({
      patient_id: userData?.id,
      mood: note.mood,
      content: note.content,
    });

    if (error) {
      throw error;
    }

    console.log("data- ", data);

    return data;
  };

  // config user data
  useEffect(() => {
    const configUser = async () => {
      if (user) {
        const tables = ["patients", "family_members", "doctors"];
        // if any of the tables has the user id, then set the user type
        // if it finds a user, it breaks the loop, adds the user type and the username to the user data
        for (let i = 0; i < tables.length; i++) {
          const { data, error } = await supabase
            .from(tables[i])
            .select("id, username")
            .eq("id", user?.id);

          console.log("data: ", data);
          if (data && data.length > 0) {
            setUserData({
              ...user,
              type: tables[i],
              username: data[0].username,
            });
            break;
          }
        }
      }
    };

    configUser();
  }, [user]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        createUser,
        updateUser,
        searchUser,
        searchUserById,
        requestConnection,
        checkConnectionRequests,
        acceptConnection,
        rejectConnection,
        createNote,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}
