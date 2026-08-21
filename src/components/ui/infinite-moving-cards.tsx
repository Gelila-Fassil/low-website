"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  rating?: number;
  avatar?: string;
  caseType?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "45s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "75s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[380px] max-w-full relative rounded-3xl border border-white/15 shrink-0 px-7 py-6 md:w-[460px] bg-gradient-to-b from-[#1c1627]/90 via-[#14101d]/90 to-[#0e0b14]/90 backdrop-blur-xl shadow-2xl hover:border-[var(--brand-light)]/40 transition-colors duration-300 group"
            key={item.name + idx}
          >
            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--brand-main)]/10 via-transparent to-purple-600/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Header Bar: Rating & Case Type Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                {item.caseType && (
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-[var(--brand-light)] tracking-wider uppercase">
                    {item.caseType}
                  </span>
                )}
              </div>

              {/* Quote Content */}
              <blockquote className="mb-6">
                <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[var(--brand-light)]/40 shadow-md"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--brand-main)] to-[var(--brand-dark)] border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-white font-serif tracking-wide">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400 font-light">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
