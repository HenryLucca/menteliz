import { Button } from "../ui/button";

import { Editor, FloatingMenu } from "@tiptap/react";

interface EditorFloatingMenuProps {
  editor: Editor;
}

export default function EditorFloatingMenu(props: EditorFloatingMenuProps) {
  const { editor } = props;

  return (
    <FloatingMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="z-10 bg-white shadow-lg border rounded-md border-gray-950"
    >
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={"ghost"}
        className="py-0.5 px-1"
      >
        Título 1
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={"ghost"}
        className="py-0.5 px-1"
      >
        Título 2
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={"ghost"}
        className="py-0.5 px-1"
      >
        Lista
      </Button>
    </FloatingMenu>
  );
}
