"use client";

import { useUserDataContext } from "@/contexts/UserDataContext";
import { Button } from "../ui/button";

export default function Posts() {
  const { userData } = useUserDataContext();

  return (
    <div className="flex items-center">
      <div>
        <h1>Posts</h1>
      </div>

      {userData?.type === "doctors" && (
        <a href="/blog/new">
          <Button variant={"link"}>Novo Post</Button>
        </a>
      )}
    </div>
  );
}
