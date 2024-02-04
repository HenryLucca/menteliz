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

interface EditProfileFamilyProps {
  user: User & {
    relationship: string;
    contact: string;
    username: string;
  };
}

export default function EditProfileFamily(props: EditProfileFamilyProps) {
  return <div></div>;
}
