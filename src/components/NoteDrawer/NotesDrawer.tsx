"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { Patient } from "@/models/User";
import { useEffect, useState } from "react";

interface NotesDrawerProps {
  patient: Patient;
}

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
          notes.map((note) => (
            <div key={note.id} className="p-4 border-b">
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </div>
          ))
        ) : (
          <p>Nenhum diário encontrado</p>
        )}
      </DrawerContent>
    </Drawer>
  );
}
