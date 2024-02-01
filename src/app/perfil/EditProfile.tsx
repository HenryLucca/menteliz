"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import FirstEditForm from "./FirstEditForm";
import { useAuthContext } from "@/contexts/AuthContext";
import { User } from "@/models/User";
import EditProfileForm from "./EditProfileForm";

export default function Name() {
  const { userData } = useUserDataContext();
  // const { user } = useAuthContext();
  console.log("sads", userData);
  return (
    <>{!(userData as User)?.type ? <FirstEditForm /> : <EditProfileForm />}</>
  );
}
