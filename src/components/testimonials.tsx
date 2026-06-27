"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";

interface Testimonial {
  name: string;
  image?: string;
  role: string;
  relation: string;
  org?: string;
  orgLogo?: string;
  date: string;
  body: string;
}

// Deterministic gradient from a string so each org gets a consistent look.
const GRADIENTS = [
  "from-violet-500 to-fuchsia-500",
  "from-sky-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-rose-500",
  "from-pink-500 to-purple-500",
];

function OrgAvatar({ org, logo }: { org: string; logo?: string }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={org}
        className="size-7 rounded-full border bg-white object-cover"
      />
    );
  }
  const idx =
    org.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    GRADIENTS.length;
  const initials = org
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className={cn(
        "flex size-7 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white",
        GRADIENTS[idx]
      )}
    >
      {initials}
    </span>
  );
}

function TestimonialCard({
  testimonial,
  onClick,
}: {
  testimonial: Testimonial;
  onClick: () => void;
}) {
  const { image, name, role, body } = testimonial;
  return (
    <figure
      onClick={onClick}
      className={cn(
        "group relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors",
        // light styles
        "border-gray-950/[.1] bg-card hover:bg-muted",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-card dark:hover:bg-muted"
      )}
    >
      <button
        type="button"
        aria-label="View full testimonial"
        className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:bg-muted hover:text-foreground"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <Maximize2 className="size-3.5" />
      </button>
      <div className="flex flex-row items-center gap-2 pr-8">
        <img
          className="size-8 rounded-full object-cover"
          width="32"
          height="32"
          alt={name}
          src={image}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground dark:text-white/40 line-clamp-1">
            {role}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-muted-foreground line-clamp-4">
        {body}
      </blockquote>
    </figure>
  );
}

function TestimonialDetails({ testimonial }: { testimonial: Testimonial }) {
  return (
    <>
      <div className="flex flex-row items-center gap-3 pr-12">
        <img
          className="size-12 shrink-0 rounded-full border object-cover"
          alt={testimonial.name}
          src={testimonial.image}
        />
        <div className="flex flex-col">
          <span className="text-base font-semibold">{testimonial.name}</span>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>

      {testimonial.org && (
        <div className="mt-4 flex items-center gap-2 text-sm text-foreground">
          <OrgAvatar org={testimonial.org} logo={testimonial.orgLogo} />
          <span>
            Worked together at{" "}
            <span className="font-semibold">{testimonial.org}</span>
          </span>
        </div>
      )}

      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border bg-muted px-2.5 py-1 text-muted-foreground">
          {testimonial.relation}
        </span>
        <span className="rounded-full border bg-muted px-2.5 py-1 text-muted-foreground">
          {testimonial.date}
        </span>
      </div>

      <blockquote className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
        {testimonial.body}
      </blockquote>
    </>
  );
}

function TestimonialModal({
  testimonial,
  open,
  onOpenChange,
}: {
  testimonial: Testimonial | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-lg">
          {testimonial && (
            <>
              <DialogTitle className="sr-only">
                {testimonial.name}&apos;s testimonial
              </DialogTitle>
              <TestimonialDetails testimonial={testimonial} />
            </>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        {testimonial && (
          <div className="relative mx-auto w-full max-w-lg overflow-y-auto px-5 pb-8">
            <DrawerTitle className="sr-only">
              {testimonial.name}&apos;s testimonial
            </DrawerTitle>
            <TestimonialDetails testimonial={testimonial} />
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export function Testimonials({
  testimonials,
}: {
  testimonials: readonly Testimonial[];
}) {
  const [selected, setSelected] = React.useState<Testimonial | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleSelect = (t: Testimonial) => {
    setSelected(t);
    setOpen(true);
  };

  const half = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, half);
  const secondRow = testimonials.slice(half);

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((t) => (
          <TestimonialCard
            key={t.name}
            testimonial={t}
            onClick={() => handleSelect(t)}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((t) => (
          <TestimonialCard
            key={t.name}
            testimonial={t}
            onClick={() => handleSelect(t)}
          />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>

      <TestimonialModal
        testimonial={selected}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
