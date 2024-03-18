"use client";

import { EditorContent } from "@tiptap/react";
import useEditor from "@/hooks/useEditor";

export default function Editor() {
  const { editor } = useEditor();

  return (
    <EditorContent
      className="max-w-[700px] mx-auto px-8 py-1 prose prose-violet bg-white"
      editor={editor}
    />
  );
}
