import BlogDataProvider from "@/contexts/BlogContext";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: BlogLayoutProps) {
  return (
    <>
      <BlogDataProvider>{children}</BlogDataProvider>
    </>
  );
}
