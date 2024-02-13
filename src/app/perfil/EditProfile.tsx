"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import FirstEditForm from "./FirstEditForm";
import { User } from "@/models/User";
import DynamicProfileForm from "./EditProfileForm";

export default function Name() {
  const { userData } = useUserDataContext();

  return (
    <>
      {!(userData as User)?.type ? <FirstEditForm /> : <DynamicProfileForm />}
    </>
  );
}
