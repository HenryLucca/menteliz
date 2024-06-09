import Header from "@/components/Header/Header";
import SearchConnections from "./SearchConnections";
import PendentConnections from "./PendentConnections";

export default function Conectar() {
  return (
    <>
      <main className="bg-mBlue-200 p-4">
        <PendentConnections />
        <SearchConnections />
      </main>
    </>
  );
}
