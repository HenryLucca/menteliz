import Header from "@/components/Header/Header";
import SearchConnections from "./SearchConnections";
import PendentConnections from "./PendentConnections";

export default function Conectar() {
  return (
    <>
      <Header />
      <main className="bg-mBlue-200">
        <PendentConnections />
        <SearchConnections />
      </main>
    </>
  );
}
