"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import PatientPage from "./patient/PatientPage";
import { useRouter } from "next/navigation";
import DoctorPage from "./doctor/DoctorPage";

export default function Humor() {
  const { userData } = useUserDataContext();
  const router = useRouter();

  if (userData?.type == "family_members") {
    // return not found page
    router.push("/404");
  }

  return <>{userData?.type == "patients" ? <PatientPage /> : <DoctorPage />}</>;
}
