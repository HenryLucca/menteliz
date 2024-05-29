import Feedback from "./Feedback";

export default function Feedbacks() {
  return (
    <section className="min-h-svh md:min-h-fit md:py-24">
      <div className="grid sm:grid-cols-2 place-items-center gap-4 sm:gap-8 gap-y-24 sm:gap-y-16">
        <Feedback name="João Silva Junior" rating={5} comment="Muito bom!" />
        <Feedback name="João Silva" rating={5} comment="Muito bom!" />
        <Feedback name="Dr. João" rating={5} comment="Muito bom!" />
      </div>
    </section>
  );
}
