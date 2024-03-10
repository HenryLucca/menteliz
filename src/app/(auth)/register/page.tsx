"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/contexts/AuthContext";
import Header from "@/components/Header/Header";

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres",
  }),
  confirmPassword: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres",
  }),
});

export default function Register() {
  const { register } = useAuthContext();
  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Handle form submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "As senhas não conferem",
      });
      return;
    }

    try {
      register?.(email, password);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <main className="min-h-[100svh] bg-mBlue-200">
        <div className="flex flex-col justify-center items-center py-12 px-24">
          <div className="flex flex-col self-start">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
              Crie sua conta
            </h1>
            <p className="mt-2 text-lg text-center text-gray-500 dark:text-gray-400">
              Já tem uma conta?{" "}
              <a
                href="/login"
                className="font-medium text-indigo-600 dark:text-indigo-400"
              >
                Faça login
              </a>
            </p>
          </div>
          <div className="flex justify-center items-center max-w-96 p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-xl">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="seu@email.com"
                          {...field}
                          className="md:text-xl"
                        />
                      </FormControl>
                      <FormDescription className="md:text-xl">
                        Insira seu email para criar sua conta
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-xl">Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                          className="md:text-xl"
                        />
                      </FormControl>
                      <FormDescription className="md:text-xl">
                        Insira sua senha para criar sua conta
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-xl">
                        Confirmar senha
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                          className="md:text-xl"
                        />
                      </FormControl>
                      <FormDescription className="md:text-xl">
                        Confirme sua senha
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-indigo-500 font-bold md:text-xl"
                >
                  Criar conta
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}
