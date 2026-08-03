"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
// import { ThemeToggle } from "@/components/ui/theme-toggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-paper/95 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-a4 flex h-full flex-col">
            <div className="flex h-(--header-height) items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[rgb(var(--line-rgb))] text-[rgb(var(--ink-rgb))] transition-colors hover:bg-[rgb(var(--mist-rgb))]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="mt-8 flex flex-1 flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-line py-5 text-display-md font-medium tracking-tight text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center justify-between border-t border-line py-6">
              <span className="text-sm text-muted">Appearance</span>
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
