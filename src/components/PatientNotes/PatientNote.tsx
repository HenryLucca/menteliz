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
  good: "bg-green-500",
  neutral: "bg-gray-500",
  bad: "bg-red-500",
};

const moodEmojis = {
  good: "😄",
  neutral: "😐",
  bad: "😔",
};

export default function PatientNote(props: PatientNoteProps) {
  const { note } = props;
  const date = dateToLocaleString(note.createdAt);

  const mood = moods[note.mood];

  const moodColor = moodBgColors[note.mood];
  const moodEmoji = moodEmojis[note.mood];

  return (
    <li>
      <Card>
        <CardHeader className="p-1">
          <div className="w-8 h-1 flex items-center translate-y-2">
            <div className={`w-1/2 h-full ${moodColor}`}></div>
            <span>{moodEmoji}</span>
          </div>
          <CardDescription className="text-end">{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-800">{note.content}</p>
        </CardContent>
      </Card>
    </li>
  );
}
