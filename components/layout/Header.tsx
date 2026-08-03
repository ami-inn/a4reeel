"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clapperboard, Menu, Search } from "lucide-react";

import { navLinks } from "@/lib/data";
// import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 animate-fade-in transition-all duration-500 ease-premium",
          scrolled
            ? "glass border-b border-line shadow-soft"
            : "border-b border-transparent"
        )}
      >
        <div className="container-a4 flex h-(--header-height) items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex cursor-pointer items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--line-rgb))] bg-[rgb(var(--mist-rgb))] text-[rgb(var(--ink-rgb))] transition-all duration-300 group-hover:border-[rgb(var(--signature-rgb))] group-hover:ring-2 group-hover:ring-[rgb(var(--signature-rgb))] group-hover:ring-offset-2 group-hover:ring-offset-[rgb(var(--paper-rgb))]">
              <Clapperboard className="h-4 w-4" strokeWidth={1.75} />
            </span>

            <span className="text-[15px] font-semibold tracking-tight text-[rgb(var(--ink-rgb))] transition-colors duration-300 group-hover:text-[rgb(var(--signature-rgb))]">
              A4Reel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative cursor-pointer text-sm text-[rgb(var(--muted-rgb))] transition-colors duration-300 hover:text-[rgb(var(--ink-rgb))] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:content-[''] after:bg-[rgb(var(--signature-rgb))] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative hidden items-center sm:flex">
              <AnimatePresence initial={false}>
                {searchOpen && (
                  <motion.input
                    key="search-input"
                    type="search"
                    autoFocus
                    placeholder="Search prompts…"
                    aria-label="Search prompts"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mr-2 rounded-full border border-[rgb(var(--line-rgb))] bg-[rgb(var(--paper-rgb))/0.6] px-4 py-1.5 text-sm text-[rgb(var(--ink-rgb))] outline-none placeholder:text-[rgb(var(--muted-rgb))]"
                  />
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                aria-label="Toggle search"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[rgb(var(--line-rgb))] bg-[rgb(var(--paper-rgb))] text-[rgb(var(--ink-rgb))] transition-colors duration-300 hover:bg-[rgb(var(--mist-rgb))]"
              >
                <Search className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            {/* Theme Toggle */}
            {/* <ThemeToggle className="hidden sm:flex" /> */}

            {/* Sign In */}
            <button
              type="button"
              className="ml-1 hidden cursor-pointer rounded-full bg-[rgb(var(--ink-rgb))] px-5 py-2 text-sm font-medium text-[rgb(var(--paper-rgb))] transition-all duration-300 ease-premium hover:scale-[1.03] hover:bg-[rgb(var(--signature-rgb))] hover:text-[rgb(var(--ink-rgb))] md:inline-flex"
            >
              Sign in
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[rgb(var(--line-rgb))] bg-[rgb(var(--paper-rgb))] text-[rgb(var(--ink-rgb))] transition-colors duration-300 hover:bg-[rgb(var(--mist-rgb))] md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}