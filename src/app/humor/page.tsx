"use client";
import Header from "@/components/Header/Header";
import { useUserDataContext } from "@/contexts/UserDataContext";
import PatientHumor from "./patient/PatientPage";

export default function Humor() {
  const { userData } = useUserDataContext();

  if (userData?.type == "family_members") {
    return <h1>Usuário não autorizado</h1>;
  }

  return (
    <>
      <Header />
      <main className="p-12 sm:p-16">
        {userData?.type == "patients" ? (
          <PatientHumor />
        ) : (
          <h1>Humor do médico</h1>
        )}
      </main>
    </>
  );
}
