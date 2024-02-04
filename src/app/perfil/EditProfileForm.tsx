"use client";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { User } from "@/models/User";
import EditProfilePatients from "./EditProfileTypes/EditProfilePatients";
import EditProfileDoctors from "./EditProfileTypes/EditProfileDoctors";
import EditProfileFamily from "./EditProfileTypes/EditProfileFamily";

export default function EditProfileForm() {
  const { userData } = useUserDataContext();
  const userType = (userData as User)?.type;

  if (userType === "patients") {
    const user = userData as User & {
      address: string;
      age: number;
      gender: string;
    };
    return <EditProfilePatients user={user} />;
  }
  if (userType === "family_members") {
    const user = userData as User & {
      relationship: string;
      contact: string;
      username: string;
    };
    return <EditProfileFamily user={user} />;
  }
  if (userType === "doctors") {
    const user = userData as User & {
      licenseInfo: string;
      specialization: string;
      contact: string;
    };
    return <EditProfileDoctors user={user} />;
  }
  return (
    <div>
      <h1>oi</h1>
      <p>{userData?.type}</p>
      <p>{userData?.username}</p>
    </div>
  );
}
