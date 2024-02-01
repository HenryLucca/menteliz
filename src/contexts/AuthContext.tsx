"use client";

import { createContext, useState, useEffect, useContext } from "react";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { CommonUser as User, createCommonUser } from "@/models/User";

interface AuthContextProps {
  user?: any;
  loading?: boolean;
  error?: any;
  login?: (email: string, password: string) => Promise<void>;
  register?: (email: string, password: string) => Promise<void>;
  signOut?: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({});

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const configSession = async () => {
    const session = await supabase.auth.getSession();

    const user = session?.data.session?.user;

    const userData = await createCommonUser(user?.id, user?.email);
    setUser(userData);

    setLoading(false);
  };

  // supabase functions
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);
      configSession();

      if (error) throw error;

      route.push("/");
    } catch (error) {
      setError(error);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(data);
      configSession();

      if (error) throw error;

      route.push("/");
    } catch (error) {
      setError(error);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      setUser(undefined);
      setLoading(false);

      if (error) throw error;

      route.push("/login");
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    configSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, register, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
