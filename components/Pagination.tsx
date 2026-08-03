"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function go(next: number) {
    const clamped = Math.min(Math.max(next, 1), totalPages);
    onChange(clamped);
    document.getElementById("prompts")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Prompt pagination"
      className="mt-16 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--line-rgb))] bg-[rgb(var(--mist-rgb))/0.25] px-4 py-2 text-sm text-[rgb(var(--ink-rgb))] transition-all duration-300 ease-premium hover:border-[rgb(var(--signature-rgb))/0.6] hover:bg-[rgb(var(--signature-rgb))/0.14] disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => go(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all duration-300 ease-premium",
              p === page
                ? "bg-[rgb(var(--signature-rgb))/0.22] text-[rgb(var(--ink-rgb))] shadow-soft"
                : "text-[rgb(var(--muted-rgb))] hover:bg-[rgb(var(--mist-rgb))/0.45] hover:text-[rgb(var(--ink-rgb))]"
            )}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--line-rgb))] bg-[rgb(var(--mist-rgb))/0.25] px-4 py-2 text-sm text-[rgb(var(--ink-rgb))] transition-all duration-300 ease-premium hover:border-[rgb(var(--signature-rgb))/0.6] hover:bg-[rgb(var(--signature-rgb))/0.14] disabled:pointer-events-none disabled:opacity-40"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
