import PatientList from "./PatientList";

export default function DoctorPage() {
  return (
    <main className="p-4 space-y-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl">Diário dos Pacientes</h2>
        <p className="text-sm text-gray-500">
          Visualize o diário de seus pacientes
        </p>
      </div>

      <div>
        <PatientList />
      </div>
    </main>
  );
}
