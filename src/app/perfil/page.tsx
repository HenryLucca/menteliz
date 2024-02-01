import { UserIcon } from "@/assets/icons";
import Header from "@/components/Header/Header";
import EditProfile from "./EditProfile";

export default function Perfil() {
  return (
    <>
      <Header />
      <main>
        <section className="grid place-items-center">
          <div>
            <UserIcon size={24} />
          </div>
        </section>

        <section className="grid place-items-center">
          <EditProfile />
        </section>
      </main>
    </>
  );
}
