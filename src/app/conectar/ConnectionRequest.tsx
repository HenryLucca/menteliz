"use client";

import { Doctor, Family, Patient, User } from "@/models/User";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { useState } from "react";

interface ConnectionRequestProps {
  user: User;
}

const patientInfo = (user: Patient) => {
  return (
    <>
      <CardDescription>{user.address}</CardDescription>
      <CardDescription>{user.age}</CardDescription>
      <CardDescription>{user.gender}</CardDescription>
    </>
  );
};

const doctorInfo = (user: Doctor) => {
  return (
    <>
      <CardDescription>{user.licenseInfo}</CardDescription>
      <CardDescription>{user.specialization}</CardDescription>
      <CardDescription>{user.contact}</CardDescription>
    </>
  );
};
const familyInfo = (user: Family) => {
  return (
    <>
      <CardDescription>{user.contact}</CardDescription>
    </>
  );
};

export default function ConnectionRequest(props: ConnectionRequestProps) {
  const { acceptConnection, rejectConnection } = useUserDataContext();
  const [showButtons, setShowButtons] = useState(true);
  const [message, setMessage] = useState("Conexão Pendente");
  const { user } = props;

  const handleAccept = async () => {
    if (acceptConnection) {
      await acceptConnection(user);
    }
    setShowButtons(false);
    setMessage("Conexão Aceita");
    // unmount the component, since the user is already accepted
  };

  const handleReject = async () => {
    if (rejectConnection) {
      await rejectConnection(user);
    }
    setShowButtons(false);
    setMessage("Conexão Recusada");
    // unmount the component, since the user is already rejected
  };

  console.log("user- ", user);
  return (
    <li>
      <Card>
        <CardHeader>
          <CardTitle>{user.username}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{user.email}</CardDescription>

          {user.type === "patients" ? patientInfo(user) : null}
          {user.type === "doctors" ? doctorInfo(user) : null}
          {user.type === "family_members" ? familyInfo(user) : null}
        </CardContent>
        {showButtons ? (
          <CardFooter className="">
            <button
              className="bg-green-500 text-white px-3 py-1.5 rounded-md"
              type="button"
              onClick={handleAccept}
            >
              Aceitar
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1.5 rounded-md"
              type="button"
              onClick={handleReject}
            >
              Recusar
            </button>
          </CardFooter>
        ) : (
          <CardFooter className="bg-gray-200">
            <p>{message}</p>
          </CardFooter>
        )}
      </Card>
    </li>
  );
}
