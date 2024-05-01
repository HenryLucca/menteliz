"use client";

import { useBlogContext } from "@/contexts/BlogContext";
import { useEffect, useState } from "react";

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
    <div>
      <div className="prose px-24">
        {post && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
      </div>
    </div>
  );
}
