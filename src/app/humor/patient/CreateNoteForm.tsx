"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Note } from "@/models/Note";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useUserDataContext } from "@/contexts/UserDataContext";

const FormSchema = z.object({
  note: z
    .string()
    .max(400, {
      message: "A anotação deve ter no máximo 400 caracteres.",
    })
    .optional(),
  mood: z.enum(["good", "bad", "neutral"], {
    required_error: "Por favor, selecione um humor.",
    description: "Selecione um humor.",
  }),
});

export default function CreateNoteForm() {
  const { createNote } = useUserDataContext();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const note: Note = {
      mood: data.mood,
      content: data.note || "",
    };

    const res = createNote?.(note);
    console.log(res);

    // Send note to the server
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="mood"
          render={({ field }) => (
            <FormItem className="flex flex-col items-baseline gap-2">
              <FormLabel className="">Como está o seu humor ?</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col gap-2"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="good" />
                    </FormControl>
                    <FormLabel className="font-normal">😀 Feliz</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="neutral" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      😐 Neutro/Normal
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="bad" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      😔 Triste/Chateado
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
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  {...field}
                  className="w-full p-3 border rounded-md"
                  placeholder="Escreva mais sobre o seu dia."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Adicionar anotação</Button>
      </form>
    </Form>
  );
}
