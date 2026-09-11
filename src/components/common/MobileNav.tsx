import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger Button */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white/80 p-2 backdrop-blur-sm hover:bg-white"
      >
        <span
          className={`h-0.5 w-5 bg-black transition-all duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-black transition-all duration-300 ${
            isOpen ? "-translate-y-0 -rotate-45" : ""
          }`}
        />
      </Button>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-noura-beige p-8 pt-28 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col gap-6 text-3xl font-medium tracking-tight">
          <a
            href="/"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            About
          </a>
          <a
            href="/works"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            Works
          </a>
          <a
            href="/blog"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            Blog
          </a>
          <a
            href="/contact"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            Contact
          </a>
        </nav>

        <div className="pt-8">
          <Separator className="mb-8" />
          <Button href="/contact" variant="dark" className="w-full justify-center">
            Start a project
          </Button>
        </div>
      </div>
    </div>
  );
}
