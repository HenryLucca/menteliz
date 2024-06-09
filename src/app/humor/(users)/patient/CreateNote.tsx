import CreateNoteForm from "./CreateNoteForm";

export default function CreateNotes() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Diário de Humor</h1>
        <p className="text-gray-500">
          Adicione novas anotações de como você está se sentindo.
        </p>
      </div>

      <div className="px-4">
        <CreateNoteForm />
      </div>
    </section>
  );
}
