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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Nome de usuário deve ter no mínimo 8 caracteres.",
  }),
  gender: z.enum(["Masculino", "Feminino", "Outro"], {
    required_error: "Selecione seu gênero.",
  }),
  age: z
    .number({
      required_error: "Insira sua idade.",
    })
    .gte(12, {
      message: "Você deve ter no mínimo 12 anos.",
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

const genders = [
  { label: "Masculino", value: "Masculino" },
  { label: "Feminino", value: "Feminino" },
  { label: "Outro", value: "Outro" },
] as const;

export default function EditProfilePatients(props: EditProfilePatientsProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: props.user.username || "",
      address: props.user.address || "",
      age: props.user.age || 0,
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
            <FormItem className="flex flex-col">
              <div className="flex items-center gap-3">
                <FormLabel>Gênero</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? genders.find(
                              (gender) => gender.value === field.value
                            )?.label
                          : "Selecionar gênero..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Escolher gênero..." />
                      <CommandEmpty>No gender found.</CommandEmpty>
                      <CommandGroup>
                        {genders.map((gender) => (
                          <CommandItem
                            value={gender.label}
                            key={gender.value}
                            onSelect={() => {
                              form.setValue("gender", gender.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                gender.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {gender.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <FormDescription>
                Seu gênero, como você se identifica.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* age */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Idade</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormDescription>Sua idade atual, em anos.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="">
              <div className="flex items-baseline gap-4">
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </div>
              <FormDescription>
                Seu endereço completo, incluindo o número.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
