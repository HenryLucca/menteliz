"use client";

import { useEditor as useTiptap } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import FloatingMenu from "@tiptap/extension-floating-menu";

const initialContent = `
    <h2>
        Menteliz
    </h2>
    <p>
        A saúde mental é um assunto muito importante e que precisa ser discutido
    </p>
    <p></p>
    `;

export default function useEditor() {
  const editor = useTiptap({
    extensions: [StarterKit, FloatingMenu],
    content: initialContent,
    autofocus: true,
    editorProps: {},
  });

  return { editor };
}
