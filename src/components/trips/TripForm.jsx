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

const budgetSchema = z.object({
  total: z.number(),
  spent: z.number().default(0),
});

const tripSchema = z
  .object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string().optional(),
    startDate: z.date(),
    endDate: z.date(),
    destination: z
      .array(z.string().min(2, { message: "Destination cannot be empty." }))
      .min(1, { message: "At least one destination is required." }),
    budget: budgetSchema,
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "End date must be after start date.",
    path: ["endDate", "startDate"],
  });

export default function TripForm({ tripInfo }) {
  const form = useForm({
    resolver: zodResolver(tripSchema),
    defaultValues: tripInfo || {
    defaultValues: {
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      destination: [""],
      budget: {
        total: 0,
        spent: 0,
      }}
    },
  });

  const onAdd = async (data) => {
  console.log(data);
}

  const onEdit = async (data) => {
  console.log(data);
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(tripInfo ? onEdit : onAdd)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trip Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{tripInfo ? "Edit Trip" : "Add Trip"}</Button>
      </form>
    </Form>
  );
}
