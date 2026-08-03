export type PromptCategory =
  | "Portrait"
  | "Anime"
  | "Fashion"
  | "Cinematic"
  | "Photography";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: PromptCategory;
  image: string;
  prompt: string;
  views: number;
  likes: number;
}

export const categories: PromptCategory[] = [
  "Portrait",
  "Anime",
  "Fashion",
  "Cinematic",
  "Photography",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Categories", href: "/categories" },
  { label: "Trending", href: "/trending" },
];

export const prompts: Prompt[] = [
  {
    id: "p-001",
    title: "Golden Hour Portrait",
    description: "Soft directional light across a studio portrait with warm film grain.",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    prompt:
      "A cinematic portrait of a woman lit by warm golden-hour light through a window, soft film grain, shallow depth of field, shot on 85mm f/1.4",
    views: 18200,
    likes: 2400,
  },
  {
    id: "p-002",
    title: "Neo-Tokyo Anime Skyline",
    description: "Hand-painted anime cityscape with neon reflections after rainfall.",
    category: "Anime",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    prompt:
      "A wide anime cityscape at night, neon signs reflecting on wet streets, painterly cel-shaded style, dramatic clouds, studio Ghibli inspired lighting",
    views: 24500,
    likes: 3800,
  },
  {
    id: "p-003",
    title: "Editorial Fashion Study",
    description: "High-contrast monochrome fashion editorial with sculptural silhouettes.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80",
    prompt:
      "A black and white editorial fashion photograph, sculptural couture silhouette, hard studio lighting, Vogue-style composition, minimal backdrop",
    views: 15300,
    likes: 1980,
  },
  {
    id: "p-004",
    title: "Rain-Soaked Noir Alley",
    description: "A moody cinematic alley scene lit only by a single flickering sign.",
    category: "Cinematic",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
    prompt:
      "A cinematic noir alleyway at night, rain-soaked pavement reflecting neon, anamorphic lens flare, deep shadows, Blade Runner inspired color grade",
    views: 31000,
    likes: 4600,
  },
  {
    id: "p-005",
    title: "Alpine Long Exposure",
    description: "A serene long-exposure landscape of alpine peaks at dawn.",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    prompt:
      "A long exposure landscape photograph of alpine mountains at dawn, silky clouds, cool color palette, medium format detail, ND filter aesthetic",
    views: 12800,
    likes: 1620,
  },
  {
    id: "p-006",
    title: "Ink Wash Samurai",
    description: "A minimal anime character study rendered like traditional ink wash art.",
    category: "Anime",
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&q=80",
    prompt:
      "An anime samurai portrait rendered as traditional sumi-e ink wash painting, negative space composition, single brushstroke details",
    views: 9800,
    likes: 1340,
  },
  {
    id: "p-007",
    title: "Backstage Runway Portrait",
    description: "Candid backstage fashion photography with mixed tungsten lighting.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    prompt:
      "A candid backstage fashion photograph, mixed tungsten and daylight, grainy 35mm film look, documentary framing, editorial mood",
    views: 10400,
    likes: 1490,
  },
  {
    id: "p-008",
    title: "Desert Highway Cinematic",
    description: "A wide cinematic frame of a lone car on an endless desert highway.",
    category: "Cinematic",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
    prompt:
      "A wide cinematic shot of a lone car driving down a desert highway at dusk, anamorphic aspect ratio, warm and teal color grade",
    views: 21700,
    likes: 3100,
  },
  {
    id: "p-009",
    title: "Macro Studio Still Life",
    description: "A tightly composed macro photograph with soft studio gradients.",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    prompt:
      "A macro still life photograph, soft studio gradient backdrop, controlled reflections, minimal composition, product photography lighting",
    views: 7600,
    likes: 980,
  },
  {
    id: "p-010",
    title: "Moonlit Anime Garden",
    description: "A tranquil anime-style garden scene lit by moonlight and lanterns.",
    category: "Anime",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80",
    prompt:
      "A tranquil anime garden at night lit by paper lanterns and moonlight, soft cel-shading, delicate cherry blossom detail, Ghibli-inspired palette",
    views: 19300,
    likes: 2760,
  },
  {
    id: "p-011",
    title: "Minimal Studio Portrait",
    description: "A restrained studio portrait using a single soft key light.",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    prompt:
      "A minimalist studio portrait lit with a single soft key light, neutral grey backdrop, editorial retouching, medium format detail",
    views: 13900,
    likes: 1870,
  },
  {
    id: "p-012",
    title: "Rooftop Fashion at Dusk",
    description: "A fashion editorial shot on a rooftop as the city lights come alive.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    prompt:
      "A fashion editorial photograph on a city rooftop at dusk, skyline bokeh, wind-blown fabric, cinematic color grade, telephoto compression",
    views: 16200,
    likes: 2210,
  },
];

export function paginatePrompts(page: number, perPage = 8) {
  const start = (page - 1) * perPage;
  const items = prompts.slice(start, start + perPage);
  const totalPages = Math.max(1, Math.ceil(prompts.length / perPage));
  return { items, totalPages };
}
