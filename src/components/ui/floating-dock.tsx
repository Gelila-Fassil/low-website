"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; href: string; icon?: React.ReactNode }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; href: string; icon?: React.ReactNode }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden z-50", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full mt-3 right-0 flex flex-col gap-2 bg-neutral-950/90 border border-white/20 backdrop-blur-xl p-3 rounded-2xl shadow-2xl min-w-[180px]"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white/10 text-neutral-200 hover:text-amber-400 transition-colors text-xs font-medium"
                >
                  {item.icon && <div className="h-4 w-4 flex items-center justify-center text-amber-400">{item.icon}</div>}
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 px-4 rounded-full bg-neutral-950/80 border border-white/20 backdrop-blur-xl flex items-center gap-2 text-neutral-200 hover:bg-neutral-800 transition-colors shadow-xl text-xs font-semibold"
        aria-label="Toggle navigation menu"
      >
        <span>Menu</span>
        <IconLayoutNavbarCollapse className="h-4 w-4 text-amber-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; href: string; icon?: React.ReactNode }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-14 gap-2 items-center rounded-full bg-neutral-950/80 border border-white/20 backdrop-blur-xl px-3 shadow-2xl z-50",
        className
      )}
    >
      {items.map((item) => (
        <TextContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function TextContainer({
  mouseX,
  title,
  href,
  icon,
}: {
  mouseX: MotionValue;
  title: string;
  href: string;
  icon?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleTransform = useTransform(distance, [-120, 0, 120], [1, 1.18, 1]);
  const yTransform = useTransform(distance, [-120, 0, 120], [0, -3, 0]);

  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const y = useSpring(yTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className="px-4 py-2 rounded-full bg-neutral-900/80 border border-white/10 hover:border-amber-400/50 hover:bg-neutral-800/90 transition-colors flex items-center gap-2 cursor-pointer shadow-md group"
      >
        {icon && (
          <span className="h-4 w-4 flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition-colors">
            {icon}
          </span>
        )}
        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors tracking-wide whitespace-nowrap">
          {title}
        </span>
      </motion.div>
    </Link>
  );
}
