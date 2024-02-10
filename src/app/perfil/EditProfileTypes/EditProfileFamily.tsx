"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useUserDataContext } from "@/contexts/UserDataContext";
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

interface EditProfileFamilyProps {
  user: {
    type: "family_members";
    username: string;
    email: string;
    relationship: string;
    contact: string;
  };
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Nome de usuário deve ter no mínimo 2 caracteres.",
  }),
  relantionship: z.string().min(3, {
    message: "Insira sua relação com o paciente familiar.",
  }),
  contact: z.string().min(5, {
    message: "Insira um contato válido.",
  }),
});

export default function EditProfileFamily(props: EditProfileFamilyProps) {
  const { updateUser } = useUserDataContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: props.user.username ? props.user.username : "",
      relantionship: props.user.relationship ? props.user.relationship : "",
      contact: props.user.contact ? props.user.contact : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user: User = {
      ...props.user,
      type: "family_members",
      username: values.username,
      relationship: values.relantionship,
      contact: values.contact,
    };
    if (updateUser) {
      updateUser(user).then((data) => {
        console.log(data);
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormDescription>Insira seu nome completo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="relantionship"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Relação com o paciente</FormLabel>
                <FormControl>
                  <Input placeholder="Pai, mãe, avó, avô..." {...field} />
                </FormControl>
                <FormDescription>
                  Insira sua relação com o paciente familiar.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contato</FormLabel>
                <FormControl>
                  <Input placeholder="Whatsapp, Email..." {...field} />
                </FormControl>
                <FormDescription>
                  Insira algum meio contato para que os pacientes possam te
                  encontrar.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Salvar</Button>
        </form>
      </Form>
    </>
  );
}
