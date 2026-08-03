"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { categories, prompts, type PromptCategory } from "@/lib/data";
import { PromptCard } from "@/components/PromptCard";
import { Pagination } from "@/components/Pagination";
import { cn } from "@/lib/utils";

const PER_PAGE = 8;

export function PromptGrid() {
  const [activeCategory, setActiveCategory] = useState<PromptCategory | "All">("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return prompts;
    return prompts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleCategoryChange(next: PromptCategory | "All") {
    setActiveCategory(next);
    setPage(1);
  }

  return (
    <section id="prompts" className="section-y">
      <div className="container-a4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Prompt library</span>
            <h2 className="mt-3 text-display-md font-semibold tracking-tight text-ink">
              Browse curated prompts
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors duration-300",
                  activeCategory === cat
                    ? "border-[rgb(var(--signature-rgb))/0.65] bg-[rgb(var(--signature-rgb))/0.2] text-[rgb(var(--ink-rgb))]"
                    : "border-[rgb(var(--line-rgb))] bg-[rgb(var(--mist-rgb))/0.24] text-[rgb(var(--muted-rgb))] hover:border-[rgb(var(--signature-rgb))/0.6] hover:text-[rgb(var(--ink-rgb))]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {paged.map((prompt, i) => (
            <PromptCard key={prompt.id} prompt={prompt} index={i} />
          ))}
        </motion.div>

        {paged.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted">
            No prompts in this category yet.
          </p>
        )}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </section>
  );
}
