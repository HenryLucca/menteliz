"use client";

import { createContext, useState, useEffect, useContext } from "react";

import { supabase } from "@/lib/supabase";
import { User } from "@/models/User";
import { useAuthContext } from "./AuthContext";

interface UserDataContextProps {
  userData?: User;
  createUser?: (
    userType: "patients" | "family_members" | "doctors",
    username: string
  ) => Promise<void>;
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

  //
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
    <UserDataContext.Provider value={{ userData, createUser }}>
      {children}
    </UserDataContext.Provider>
  );
}
