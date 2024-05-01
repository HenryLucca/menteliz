"use client";

import Editor from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import { useBlogContext } from "@/contexts/BlogContext";
import { useUserDataContext } from "@/contexts/UserDataContext";
import useEditor from "@/hooks/useEditor";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePostPage() {
  const { userData } = useUserDataContext();
  const { createBlogPost } = useBlogContext();

  const router = useRouter();
  const { editor } = useEditor();
  const [title, setTitle] = useState("");

  async function handleSave() {
    // save post
    const editorContent = editor?.getHTML();

    if (editorContent && createBlogPost) {
      console.log(editorContent, userData?.id);
      const post = await createBlogPost(
        title,
        editorContent,
        userData?.username,
        userData?.id
      );

      console.log(post);
      editor?.destroy();
    }
  }

  return (
    <main className="px-[10%] py-8 lg:min-h-dvh bg-zinc-100">
      <h1 className="text-3xl font-bold mb-4">Criar Post</h1>
      <div className="space-y-4 flex flex-col justify-center items-center">
        <div className="flex gap-8">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Título
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Editor />
        </div>
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
