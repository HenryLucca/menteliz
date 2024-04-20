"use client";

import { createContext, useState, useEffect, useContext } from "react";

import { supabase } from "@/lib/supabase";

interface BlogContextProps {
  posts?: any[];
  createBlogPost?: (
    content: string,
    doctorId: string | undefined
  ) => Promise<any>;
  listPosts?: () => Promise<void>;
}

export const BlogContext = createContext<BlogContextProps>({});

export function useBlogContext() {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useBlogContext must be used within an BlogDataProvider");
  }

  return context;
}

export default function BlogDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState<any[]>([]);

  const createBlogPost = async (
    content: string,
    doctorId: string | undefined
  ) => {
    const { data, error } = await supabase.from("blog_posts").insert({
      content: content,
      doctor_id: doctorId,
    });

    if (error) {
      throw error;
    }

    console.log(data);

    return data;
  };

  const listPosts = async () => {
    const { data, error } = await supabase.from("blog_posts").select("*");

    if (error) {
      throw error;
    }

    setPosts(data);
  };

  useEffect(() => {
    listPosts();
  });

  return (
    <BlogContext.Provider value={{ posts, createBlogPost, listPosts }}>
      {children}
    </BlogContext.Provider>
  );
}
