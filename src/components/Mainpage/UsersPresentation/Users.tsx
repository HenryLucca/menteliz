import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ElementType } from "react";

interface UsersProps {
  title: string;
  description: string;
  href: string;
  icon: ElementType;
}

export default function PresentUser({
  title,
  description,
  href,
  icon: Icon,
}: UsersProps) {
  return (
    <Card className="flex-1">
      <CardHeader>
        {/* <User size={48} /> */}
        <Icon size={48} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="">
        <Link href="/login">
          <Button variant={"outline"} className="">
            Comece agora
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
