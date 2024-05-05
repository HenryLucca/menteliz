import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Patient } from "@/models/User";

interface PatientInfoProps {
  connection: Patient;
}

export default function PatientInfo({ connection }: PatientInfoProps) {
  const name =
    connection.username
      ?.split(" ")
      .map((word) => word[0])
      .join("") || "".toUpperCase();

  return (
    <div className="flex items-center justify-between lg:gap-8 lg:border lg:p-4">
      <Avatar className="hidden lg:block">
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <h3 className="text-lg">{connection.username}</h3>
      <button className="text-blue-500">Ver Diário</button>
    </div>
  );
}
