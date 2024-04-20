"use client";

import Editor from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import { useBlogContext } from "@/contexts/BlogContext";
import { useUserDataContext } from "@/contexts/UserDataContext";
import useEditor from "@/hooks/useEditor";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const { userData } = useUserDataContext();
  const { createBlogPost } = useBlogContext();

  const router = useRouter();
  const { editor } = useEditor();

  async function handleSave() {
    // save post
    const editorContent = editor?.getHTML();

    if (editorContent && createBlogPost) {
      console.log(editorContent, userData?.id);
      const post = await createBlogPost(editorContent, userData?.id);

      console.log(post);
      const postId = post.post_id;
      editor?.destroy();
    }
  }

  return (
    <main className="px-[10%] py-8 lg:min-h-dvh bg-zinc-100">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold ">Criar Post</h1>
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
