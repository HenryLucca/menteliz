import { Note } from "@/models/Note";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import dateToLocaleString from "@/utils/dateToLocaleString";

interface PatientNoteProps {
  note: Note;
}

const moods = {
  good: "Bom",
  neutral: "Neutro",
  bad: "Ruim",
};

const moodBgColors = {
  good: "bg-green-300",
  neutral: "bg-gray-300",
  bad: "bg-red-300",
};

export default function PatientNote(props: PatientNoteProps) {
  const { note } = props;
  const date = dateToLocaleString(note.createdAt);

  const mood = moods[note.mood];

  const moodColor = moodBgColors[note.mood];

  return (
    <li>
      <Card className={`${moodColor}`}>
        <CardHeader className="p-1">
          {/* <CardTitle className="text-xl">{mood}</CardTitle> */}
          <CardDescription className="text-end">{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-800">{note.content}</p>
        </CardContent>
      </Card>
    </li>
    // <li>
    //   <p>{props.note.content}</p>
    //   <p>{props.note.mood}</p>
    //   <p>{props.note.createdAt}</p>
    // </li>
  );
}
