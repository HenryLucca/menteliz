import PatientNotes from "@/components/PatientNotes/PatientNotes";
import CreateNotes from "./CreateNote";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { Patient } from "@/models/User";

export default function PatientHumor() {
  const { userData } = useUserDataContext();
  return (
    <>
      <CreateNotes />
      <PatientNotes patient={userData as Patient} />
    </>
  );
}
