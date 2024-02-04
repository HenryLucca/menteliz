"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { User } from "@/models/User";

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

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Nome de usuário deve ter no mínimo 8 caracteres.",
  }),
  gender: z.enum(["Masculino", "Feminino", "Outro"], {
    required_error: "Selecione seu gênero.",
  }),
  age: z.number({
    required_error: "Insira sua idade.",
    invalid_type_error: "Insira um número válido.",
  }),
  address: z.string({
    required_error: "Insira seu endereço.",
  }),
});

interface EditProfilePatientsProps {
  user: User & {
    address: string;
    age: number;
    gender: string;
  };
}

export default function EditProfilePatients(props: EditProfilePatientsProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: props.user.username,
      address: props.user.address,
      age: props.user.age,
      gender: props.user.gender as
        | "Masculino"
        | "Feminino"
        | "Outro"
        | undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="">
              <div className="flex items-baseline gap-4">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </div>
              <FormDescription>
                Seu nome completo, como você gostaria de ser chamado.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* gender */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="">
              <div className="flex items-baseline gap-4">
                <FormLabel>Gênero</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </div>
              <FormDescription>
                Seu nome completo, como você gostaria de ser chamado.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* age */}
        {/* <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Idade</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>Sua idade atual, em anos.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* address */}
        {/* <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Seu endereço completo, incluindo o número.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
