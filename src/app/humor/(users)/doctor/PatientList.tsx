import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useUserDataContext } from "@/contexts/UserDataContext";
import { useEffect, useState } from "react";
import PatientInfo from "./PatientInfo";
import { Skeleton } from "@/components/ui/skeleton";

export default function DoctorPatients() {
  const { listConnections, userData } = useUserDataContext();
  const [connections, setConnections] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (listConnections && userData && userData?.id) {
      setIsLoading(true);
      listConnections(userData?.id).then((data) => {
        setConnections(data);
        setIsLoading(false);
      });
    }
  }, [listConnections, userData]);

  return (
    <div>
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar Paciente"
      />

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        {isLoading ? (
          <div className="flex items-center justify-between lg:gap-8 lg:border lg:p-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-4 w-[50px]" />
            <button className="text-blue-500">Ver Diário</button>
          </div>
        ) : (
          connections.length &&
          connections
            .filter((connection) =>
              connection.username.toLowerCase().includes(search.toLowerCase())
            )
            .map((connection) => (
              <PatientInfo key={connection.id} connection={connection} />
            ))
        )}
      </div>
    </div>
  );
}
