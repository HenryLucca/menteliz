"use client";
import Header from "@/components/Header/Header";
import { useUserDataContext } from "@/contexts/UserDataContext";
import PatientPage from "./patient/PatientPage";

export default function Humor() {
  const { userData } = useUserDataContext();

  if (userData?.type == "family_members") {
    return <h1>Usuário não autorizado</h1>;
  }

  return (
    <>
      {userData?.type == "patients" ? (
        <PatientPage />
      ) : (
        <h1>Humor do médico</h1>
      )}
    </>
  );
}
