import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import AuthContextProvider from "@/contexts/AuthContext";
import UserDataContextProvider from "@/contexts/UserDataContext";

import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Projeto TCC",
  description: "Trabalho de Conclusão de Curso - Henry Lucca - Unicap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased !scroll-smooth",
          fontSans.variable
        )}
      >
        <AuthContextProvider>
          <UserDataContextProvider>
            <Header />
            {children}
            <Footer />
          </UserDataContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
