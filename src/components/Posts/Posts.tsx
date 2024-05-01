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
          <a key={post.id} href={`/blog/${post.post_id}`}>
            <div
              className={`border p-4 my-4 
            hover:shadow-md transition-shadow duration-300
            `}
            >
              <h2>{post.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
