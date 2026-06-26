"use client";

import React from "react";
import { ResumeCard } from "@/components/resume-card";
import BlurFade from "@/components/magicui/blur-fade";
import { motion, AnimatePresence } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_COUNT = 3;

interface WorkItem {
  company: string;
  href: string;
  badges?: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

export function WorkExperience({ work }: { work: readonly any[] }) {
  const [showAll, setShowAll] = React.useState(false);
  const visibleWork = showAll ? work : work.slice(0, INITIAL_COUNT);
  const hasMore = work.length > INITIAL_COUNT;

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className="text-xl font-bold">Work Experience</h2>
      </BlurFade>
      {visibleWork.map((item, id) => (
        <BlurFade
          key={item.company + item.title}
          delay={BLUR_FADE_DELAY * 6 + id * 0.05}
        >
          <ResumeCard
            logoUrl={item.logoUrl}
            altText={item.company}
            title={item.company}
            subtitle={item.title}
            href={item.href}
            badges={item.badges}
            period={`${item.start} - ${item.end ?? "Present"}`}
            description={item.description}
          />
        </BlurFade>
      ))}
      {hasMore && (
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative mx-auto flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:text-foreground hover:border-foreground/20"
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>
        </BlurFade>
      )}
    </div>
  );
}
