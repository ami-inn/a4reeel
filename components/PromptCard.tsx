"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Eye, Heart } from "lucide-react";
import type { Prompt } from "@/lib/data";
import { formatCount } from "@/lib/utils";
import TiltedCard from "@/components/TitleCard";

interface PromptCardProps {
  prompt: Prompt;
  index?: number;
}

export function PromptCard({ prompt, index = 0 }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, button state simply won't update.
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[16px] border border-[rgb(var(--line-rgb))] bg-[rgb(var(--paper-rgb))/0.76] shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-[rgb(var(--signature-rgb))/0.55] hover:shadow-elevated"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-[rgb(var(--mist-rgb))]">
        <TiltedCard
          imageSrc={prompt.image}
          altText={prompt.title}
          captionText={prompt.title}
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip={false}
        />

        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-[rgb(var(--line-rgb))/0.75] bg-[rgb(var(--paper-rgb))/0.7] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[rgb(var(--ink-rgb))] backdrop-blur-sm">
          {prompt.category}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy prompt to clipboard"
          className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-[rgb(var(--line-rgb))/0.75] bg-[rgb(var(--paper-rgb))/0.8] text-[rgb(var(--ink-rgb))] opacity-0 shadow-soft transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:opacity-100"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-signature" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-[15px] font-semibold tracking-tight text-ink">
          {prompt.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {prompt.description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
          <div className="flex items-center gap-4 font-mono text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" strokeWidth={1.75} />
              {formatCount(prompt.views)}
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5" strokeWidth={1.75} />
              {formatCount(prompt.likes)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="rounded-full border border-[rgb(var(--line-rgb))] bg-[rgb(var(--mist-rgb))/0.35] px-3 py-1.5 text-xs font-medium text-[rgb(var(--ink-rgb))] transition-colors duration-300 hover:border-[rgb(var(--signature-rgb))] hover:bg-[rgb(var(--signature-rgb))/0.16]"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
