"use client";

import Editor from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import useEditor from "@/hooks/useEditor";

export default function CreatePostPage() {
  const { editor } = useEditor();

  function handleSave() {
    // save post
    console.log(editor?.getHTML());
  }

  return (
    <main className="px-[10%] py-8 lg:min-h-dvh bg-zinc-100">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold ">Criar Post</h1>
        <Editor />
        <Button
          onClick={handleSave}
          className="w-1/2 self-end justify-self-end"
          variant="outline"
        >
          Salvar
        </Button>
      </div>
    </main>
  );
}
