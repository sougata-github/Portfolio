import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schemas";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";

import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { sendEmail } from "@/lib/sendEmail";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(() => {
      sendEmail(values)
        .then((data) => {
          if (data?.error) {
            toast.error(data?.error);
          }

          if (data?.success) {
            form.reset();
            toast.success(data?.success);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl max-w-[480px]"
      >
        <h3 className="text-2xl text-accent">Let&apos;s work together</h3>
        <p className="text-white/60 text-sm max-w-[480px]">
          Feel free to reach out if you&apos;re looking for a developer, have
          any questions, or just want to connect.
        </p>

        <div className="mt-2 grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage className="text-accent" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage className="text-accent" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    className="scrollbar-hidden h-[120px] max-xl:h-[200px]"
                  />
                </FormControl>
                <FormMessage className="text-accent" />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="mt-2 w-full text-center"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin transition-all text-accent" />
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
