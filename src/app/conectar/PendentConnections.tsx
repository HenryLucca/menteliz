"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import { User } from "@/models/User";
import { useEffect, useState } from "react";

export default function PendentConnections() {
  const { checkConnectionRequests, searchUserById } = useUserDataContext();
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState<User[]>([]);

  console.log("requests- ", requests);

  useEffect(() => {
    const fetchRequests = async () => {
      if (checkConnectionRequests) {
        const data = await checkConnectionRequests();
        console.log("data- ", data);
        setRequests(data);
      }
    };

    fetchRequests();
  }, [checkConnectionRequests, searchUserById]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (requests.length > 0) {
        const users = await Promise.all(
          requests.map(async (request: any) => {
            if (searchUserById) {
              const user = await searchUserById(request.from_user_id);
              return user;
            }
          })
        );
        setUsers(users);
      }
    };

    fetchUsers();
  }, [requests, searchUserById]);

  return (
    <section>
      {requests?.length > 0 ? (
        <div>
          <h1>{requests.length} Conexões Pendentes</h1>
          <ul>
            {users?.map((user: User, index: number) => {
              return <li key={index}>{user.username}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>
          <h1>Nenhuma conexão pendente</h1>
        </div>
      )}
    </section>
  );
}
