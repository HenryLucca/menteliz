"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { useState } from "react";
import UserCard from "@/components/ConnectUserCard/UserCard";
import { User } from "@/models/User";

export default function SearchConnections() {
  const { searchUser, requestConnection } = useUserDataContext();
  const [searchData, setSearchData] = useState([] as any);
  const [search, setSearch] = useState("");

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchUser) {
      const data = await searchUser(search);
      setSearchData(data);
      console.log("searchData- ", data);
    }
  };

  const handleConnect = async (user: User) => {
    if (requestConnection) {
      await requestConnection(user);
    }
  };

  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Procurar Conexões</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Procure por seus familiares e médicos para se conectar
          </p>
        </div>

        <div className="w-full space-y-4">
          <form onSubmit={handleSearch}>
            <div className="w-full max-w-[400px] mx-auto rounded-lg border">
              <div className="flex h-10 items-center p-2">
                <Button type="submit" size="sm" className="bg-mBlue-400">
                  <Search className="h-4 w-4 opacity-50" />
                </Button>

                <Input
                  className="flex-1 appearance-none outline-none border-none bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Search users"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {searchData.length > 0 && (
        <ul className="grid place-items-center m-4">
          {searchData.map((userArray: any[], index: number) => {
            if (userArray) {
              return userArray.map((user: User) => {
                return (
                  <UserCard
                    key={index}
                    user={user}
                    onClick={(user: User) => handleConnect(user)}
                  />
                );
              });
            } else {
              return null;
            }
          })}
        </ul>
      )}
    </section>
  );
}
