"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import { Note } from "@/models/Note";
import { Patient } from "@/models/User";
import { useEffect, useState } from "react";
import PatientNote from "./PatientNote";

interface PatientNotesProps {
  patient: Patient;
}

export default function PatientNotes(props: PatientNotesProps) {
  const { patient } = props;
  const { listNotes } = useUserDataContext();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    if (listNotes) {
      listNotes(patient).then((notes) => {
        setNotes(notes);
      });
    }
  }, [listNotes, patient]);

  return (
    <section className="space-y-4">
      <h1 className="text-lg font-medium tracking-tight">Notas</h1>

      <ul className="flex flex-col gap-2">
        {notes.map((note, index) => (
          <PatientNote key={index} note={note} />
        ))}
      </ul>
    </section>
  );
}
