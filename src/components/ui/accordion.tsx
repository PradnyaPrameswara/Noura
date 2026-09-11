import * as React from "react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  number: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cn("divide-y divide-black/10 border-y border-black/10", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = `accordion-item-${index}`;
        const contentId = `accordion-content-${index}`;

        return (
          <div key={item.number} className="py-6">
            <button
              id={itemId}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className="flex w-full items-center justify-between text-left group transition-opacity hover:opacity-80"
            >
              <div className="flex items-center gap-6 pr-4">
                <span className="font-mono text-sm font-medium text-neutral-400">
                  {item.number}
                </span>
                <span className="text-base sm:text-lg font-medium tracking-tight text-black">
                  {item.question}
                </span>
              </div>

              {/* Animated Plus / Minus Indicator */}
              <div className="relative h-6 w-6 shrink-0 flex items-center justify-center">
                <span className="absolute h-[1.5px] w-4 bg-black transition-transform duration-300" />
                <span
                  className={cn(
                    "absolute h-4 w-[1.5px] bg-black transition-all duration-300",
                    isOpen ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100"
                  )}
                />
              </div>
            </button>

            {/* Collapsible Content with CSS Grid Height Animation */}
            <div
              id={contentId}
              role="region"
              aria-labelledby={itemId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="pt-4 pl-10 sm:pl-12 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
