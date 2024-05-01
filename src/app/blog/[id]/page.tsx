"use client";

import { useBlogContext } from "@/contexts/BlogContext";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function PostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null);
  const { getPost } = useBlogContext();

  //   function getPostFromParams(slug: any) {
  //     getPost && getPost(slug).then((post) => setPost(post));
  //   }

  useEffect(() => {
    const getPostFromParams = async (slug: any) => {
      const post = getPost && (await getPost(slug));

      setPost(post);
    };

    getPostFromParams(params.id);
  }, [params, getPost]);

  return (
    <main className=" flex flex-col justify-center items-center p-16">
      <div className="text-xs self-end">
        <a href="/blog" className="flex justify-center gap-2">
          <ArrowLeft size={16} />
          Voltar para a lista de posts
        </a>
      </div>
      <div className="prose">
        {post && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
      </div>
    </main>
  );
}
