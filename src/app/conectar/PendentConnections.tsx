"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import { User } from "@/models/User";
import { useEffect, useState } from "react";
import ConnectionRequest from "./ConnectionRequest";

export default function PendentConnections() {
  const { checkConnectionRequests, searchUserById } = useUserDataContext();
  const [requests, setRequests] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      if (checkConnectionRequests) {
        const requestsData = await checkConnectionRequests();
        console.log("requestsData- ", requestsData);
        setRequests(requestsData);

        if (requestsData != null && requestsData.length > 0 && searchUserById) {
          const userRequests = await Promise.all(
            requestsData.map((request: any) => searchUserById(request.senderId))
          );

          setUsers(userRequests);
        }
      }
    };

    fetchRequests();
  }, [checkConnectionRequests, searchUserById]);

  return (
    <section className="space-y-4">
      {requests ? (
        <div className="flex flex-col items-center justify-center">
          <h1>{requests.length} Conexões Pendentes</h1>
          <ul>
            {users.map((user: User, index: number) => {
              return <ConnectionRequest key={index} user={user} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="grid place-items-center">
          <h1>Nenhuma conexão pendente</h1>
        </div>
      )}
    </section>
  );
}
