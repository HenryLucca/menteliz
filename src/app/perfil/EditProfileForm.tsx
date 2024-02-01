"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { User } from "@/models/User";

export default function EditProfileForm() {
  const { userData } = useUserDataContext();
  return (
    <div>
      <h1>oi</h1>
      <p>{userData?.type}</p>
      <p>{userData?.username}</p>
    </div>
  );
}
