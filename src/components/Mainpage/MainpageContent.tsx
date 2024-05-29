import Welcome from "@/components/Mainpage/Welcome/Welcome";
import UsersPresentation from "./UsersPresentation/UsersPresentation";
import Feedbacks from "./Feedbacks/Feedbacks";
import About from "./About/About";
import FAQ from "./FAQ/FAQ";

export default function Name() {
  return (
    <main>
      <Welcome />
      <About />
      <UsersPresentation />
      <Feedbacks />
      <FAQ />
    </main>
  );
}
