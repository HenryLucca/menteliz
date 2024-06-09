"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { Note } from "@/models/Note";
import { Patient } from "@/models/User";
import dateToLocaleString from "@/utils/dateToLocaleString";
import { useEffect, useState } from "react";

interface NotesDrawerProps {
  patient: Patient;
}

const moodEmojis = {
  good: "😄",
  neutral: "😐",
  bad: "😔",
};

export default function NotesDrawer({ patient }: NotesDrawerProps) {
  const { listNotes } = useUserDataContext();
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    if (listNotes && patient) {
      listNotes(patient).then((data) => {
        setNotes(data);
      });
    }
  });

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} className="text-blue-500">
          Ver Diário
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>Diário de {patient.username}</DrawerHeader>
        {notes.length ? (
          notes.map((note: Note) => (
            <div key={note.createdAt} className="p-4 border-b">
              <span>{moodEmojis[note.mood]}</span>
              {/* <h4>{note.title}</h4> */}
              <div className="flex justify-between">
                <p>{note.content}</p>
                <p className="text-gray-500">
                  {dateToLocaleString(note.createdAt)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma anotação encontrada.</p>
        )}
      </DrawerContent>
    </Drawer>
  );
}
