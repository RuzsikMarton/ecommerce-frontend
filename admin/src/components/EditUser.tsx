"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters!" })
    .max(50),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters!" })
    .max(15),
  role: z.enum(["USER", "ADMIN"], {
    message: "Role must be either USER or ADMIN!",
  }),
});

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "admin1",
      email: "example@mail.com",
      phone: "+1 234 5678",
      role: "ADMIN",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm">Edit User</Button>
      </SheetTrigger>
      <SheetContent className="px-4">
        <SheetHeader className="px-0">
          <SheetTitle className="mb-4">Edit User</SheetTitle>
          <SheetDescription>
            Update user information and permissions.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name={"username"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"phone"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"role"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Roles" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                        <SelectItem value="USER">User</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Only verified users can be admin.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default EditUser;
