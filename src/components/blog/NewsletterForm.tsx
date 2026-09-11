import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setStatus("submitting");

    try {
      // Simulate newsletter dispatch
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-black/10 bg-white/80 p-8 text-center backdrop-blur-sm">
        <h3 className="text-xl font-medium text-black">Thank you!</h3>
        <p className="mt-2 text-sm text-neutral-600">Your newsletter subscription has been received!</p>
      </div>
    );
  }

  return (
    <Card className="p-8 sm:p-12">
      <div className="max-w-md mx-auto text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-4 inline-block">
          Subscribe to newsletter
        </span>
        <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black mb-6">
          Stay ahead with our latest design insights
        </h3>

        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={status === "submitting"}
            className="w-full h-14 rounded-full border border-black/15 bg-white/90 pl-6 pr-16 text-base sm:text-sm text-black placeholder:text-neutral-400 backdrop-blur-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50"
          />

          <Button
            type="submit"
            variant="ghost"
            size="icon"
            disabled={status === "submitting"}
            aria-label="Subscribe"
            className="group absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-800 transition-transform hover:scale-105 disabled:opacity-50"
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </form>

        {status === "error" && (
          <p className="mt-3 text-xs text-red-600">Oops! Something went wrong while submitting.</p>
        )}
      </div>
    </Card>
  );
}
