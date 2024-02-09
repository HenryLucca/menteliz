"use client";

import { User } from "@/models/User";
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
import { useUserDataContext } from "@/contexts/UserDataContext";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Nome de usuário deve ter no mínimo 2 caracteres.",
  }),
  licenseInfo: z.string().min(5, {
    message: "Insira um número de licença válido.",
  }),
  specialization: z.string().min(5, {
    message: "Insira uma especialização válida.",
  }),
  contact: z.string().min(5, {
    message: "Insira um contato válido.",
  }),
});

interface EditProfileDoctorsProps {
  user: User & {
    licenseInfo: string;
    specialization: string;
    contact: string;
  };
}

export default function EditProfileDoctors(props: EditProfileDoctorsProps) {
  const { updateUser } = useUserDataContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: props.user.username ? props.user.username : "",
      licenseInfo: props.user.licenseInfo ? props.user.licenseInfo : "",
      specialization: props.user.specialization
        ? props.user.specialization
        : "",
      contact: props.user.contact ? props.user.contact : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user: User = {
      ...props.user,
      type: "doctors",
      username: values.username,
      licenseInfo: values.licenseInfo,
      specialization: values.specialization,
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
            name="specialization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Especialização</FormLabel>
                <FormControl>
                  <Input placeholder="Psiquiatria" {...field} />
                </FormControl>
                <FormDescription>Insira sua especialização.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="licenseInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Licença</FormLabel>
                <FormControl>
                  <Input placeholder="CRM" {...field} />
                </FormControl>
                <FormDescription>
                  Insira seu número de licença médica.
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
