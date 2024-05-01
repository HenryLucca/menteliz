"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import { useBlogContext } from "@/contexts/BlogContext";
import { Button } from "../ui/button";
import { useEffect } from "react";

export default function Posts() {
  const { userData } = useUserDataContext();
  const { posts, listPosts } = useBlogContext();

  useEffect(() => {
    listPosts && listPosts();
  });

  return (
    <div className="">
      {userData?.type === "doctors" && (
        <a href="/blog/new">
          <Button variant={"link"}>Novo Post</Button>
        </a>
      )}
      <div>
        {posts?.map((post) => (
          <div key={post.id} className="border p-4 my-4">
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
