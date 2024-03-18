"use client";

import { useEditor as useTiptap } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const content = `
    <h2>
        Menteliz
    </h2>
    <p>
        A saúde mental é um assunto muito importante e que precisa ser discutido
    </p>
    `;

export default function useEditor() {
  const editor = useTiptap({
    extensions: [StarterKit],
    content: content,
  });

  return { editor };
}
