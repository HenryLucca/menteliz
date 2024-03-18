"use client";

import { EditorContent } from "@tiptap/react";
import useEditor from "@/hooks/useEditor";
import { Button } from "../ui/button";
import FloatingMenu from "./EditorFloatingMenu";

export default function Editor() {
  const { editor } = useEditor();

  return (
    <>
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent
        className="editor max-w-[700px] mx-auto px-8 py-1 p-8 prose prose-zinc bg-white"
        editor={editor}
      />
    </>
  );
}
