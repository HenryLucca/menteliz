import PatientNotes from "@/components/PatientNotes/PatientNotes";
import CreateNotes from "./CreateNote";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { Patient } from "@/models/User";

export default function PatientHumor() {
  const { userData } = useUserDataContext();
  return (
    <main className="p-12 sm:p-16 space-y-12">
      <CreateNotes />
      <PatientNotes patient={userData as Patient} />
    </main>
  );
}
