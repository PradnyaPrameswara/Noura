import * as React from "react";
import { Accordion } from "@/components/ui/accordion";

const faqs = [
  {
    number: "1",
    question: "What types of design projects does Pradnya take on?",
    answer: "We specialize in brand identity design, high-converting bespoke marketing websites, design systems, and digital mobile product user experiences.",
  },
  {
    number: "2",
    question: "How long does a typical branding or website project take?",
    answer: "Most comprehensive brand and website builds take between 4 to 8 weeks from initial strategic discovery through final interactive deployment and handover.",
  },
  {
    number: "3",
    question: "Do you offer post-launch support and ongoing design retainers?",
    answer: "Yes, we partner with selected ongoing clients through monthly creative retainers covering continuous product optimization, campaigns, and feature design.",
  },
];

export function FAQSection() {
  return (
    <div className="pt-20">
      <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-6">
        Frequently asked questions
      </h2>
      <Accordion items={faqs} />
    </div>
  );
}
