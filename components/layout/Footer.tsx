import Link from "next/link";
import { Clapperboard  } from "lucide-react";

const columns: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Explore", "Categories", "Trending", "Pricing"] },
  { title: "Resources", links: ["Guides", "Prompt tips", "Changelog", "API"] },
  { title: "Community", links: ["Discord", "Showcase", "Creators", "Feedback"] },
  { title: "Legal", links: ["Terms", "Privacy", "Licensing", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="hairline">
      <div className="container-a4 section-y !py-16 sm:!py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {/* Brand + newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-mist">
                <Clapperboard className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">A4Reel</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              Curated AI prompts for image generation, editing, and cinematic
              visual storytelling.
            </p>

            <form
              className="mt-6 flex max-w-xs items-center gap-2"
              // onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@studio.com"
                className="w-full rounded-full border border-line bg-transparent px-4 py-2 text-sm outline-none transition-colors focus:border-signature"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform duration-300 ease-premium hover:scale-[1.03]"
              >
                Join
              </button>
            </form>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/80 transition-colors hover:text-ink"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-white/80">
            © {new Date().getFullYear()} A4Reel. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-white/80 transition-colors hover:border-signature hover:text-ink"
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
