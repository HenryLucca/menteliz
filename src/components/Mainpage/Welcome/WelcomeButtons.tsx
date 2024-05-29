import { Button } from "@/components/ui/button";

export default function WelcomeButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <a href="/login">
        <Button className="bg-mBlue-600 text-lg hover:bg-mBlue-400 font-semibold">
          Venha fazer parte
        </Button>
      </a>
    </div>
  );
}
