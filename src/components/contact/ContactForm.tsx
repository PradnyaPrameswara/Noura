import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-black/10 bg-white/80 p-8 sm:p-12 text-center backdrop-blur-sm">
        <h3 className="text-2xl font-medium text-black">Thank you!</h3>
        <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
          Your message has been received! Our studio will review and reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">Subject / Company</label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Company / Subject"
          required
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          required
          disabled={status === "submitting"}
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-red-600">Oops! Something went wrong while submitting the form.</p>
      )}

      <Button
        type="submit"
        variant="solid"
        disabled={status === "submitting"}
        className="w-full justify-center"
      >
        {status === "submitting" ? "Please wait..." : "Send message"}
      </Button>
    </form>
  );
}
