import { User } from "@/models/User";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface UserCardProps {
  user: User;
  onClick: (user: User) => void;
}

const typeTranslation = {
  doctors: "Médico",
  patients: "Paciente",
  family_members: "Familiar",
};

const userIcon = {
  doctors: "👨‍⚕️",
  patients: "👨‍🔬",
  family_members: "👨‍👩‍👧‍👦",
};

export default function UserCard(props: UserCardProps) {
  const { user, onClick } = props;
  return (
    <>
      <Card className="bg-zinc-50 w-60">
        <CardHeader>
          <CardTitle>{user.username}</CardTitle>
          <div className="flex gap-2">
            {user.type && userIcon[user.type]}
            <CardDescription>
              {user.type && typeTranslation[user.type]}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          {user.type === "doctors" && (
            <div>
              <p>{user.specialization}</p>
              <p>{user.licenseInfo}</p>
              <p>{user.contact}</p>
            </div>
          )}
          {user.type === "patients" && (
            <div>
              <p>{user.age}</p>
            </div>
          )}
          {user.type === "family_members" && (
            <div>
              <p>{user.contact}</p>
            </div>
          )}
        </CardContent>

        <div className="grid place-items-center m-4">
          <Button className="bg-mBlue-400" onClick={() => onClick(user)}>
            Conectar
          </Button>
        </div>
      </Card>
    </>
  );
}
