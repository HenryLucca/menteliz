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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useUserDataContext } from "@/contexts/UserDataContext";

const FormSchema = z.object({
  type: z.enum(["patients", "family_members", "doctors"], {
    required_error: "Selecione o seu tipo de usuário.",
  }),
  username: z.string().min(0, {
    message: "Por favor, insira seu nome.",
  }),
});

export default function FirstEditForm() {
  const { createUser } = useUserDataContext();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: undefined,
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (createUser) {
      createUser(data.type, data.username);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Selecione seu tipo de usuário</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="patients" />
                    </FormControl>
                    <FormLabel className="font-normal">Paciente</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="family_members" />
                    </FormControl>
                    <FormLabel className="font-normal">Familiar</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="doctors" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Médico/Terapeuta
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-xl">Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu Nome"
                  {...field}
                  className="md:text-xl"
                />
              </FormControl>
              <FormDescription className="md:text-xl">
                Insira seu nome
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
}
