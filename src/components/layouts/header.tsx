"use client";

import { useState, RefObject, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  Variants,
  easeIn,
  easeOut,
} from "framer-motion";

import { AnimatedHamburgerIcon } from "../partials/animated-hamburger-icon";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo-transparent.png";

const mobileMenuVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    y: -10,
    filter: "blur(6px)",
  },
  visible: {
    height: "auto",
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: easeOut,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    y: -10,
    filter: "blur(6px)",
    transition: {
      duration: 0.25,
      ease: easeIn,
    },
  },
};

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(event.target as Node)) return;
      handler();
    };

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useClickOutside(menuWrapperRef, closeMenu);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full fixed top-4 left-0 right-0 z-[9999]">
      <div ref={menuWrapperRef} className="relative">
        <div className="flex h-[60px] justify-between items-center border border-border px-4 md:px-8 rounded-full md:w-[700px] mx-auto max-md:layout-standard backdrop-blur bg-background/60">
          <Link href="/">
            <Image
              src={Logo}
              alt="Neural Rank – AI-Powered SEO Platform for Real Rankings"
              className="w-[50px] h-auto cursor-pointer hover:scale-110 transition"
            />
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: "About", href: "/about" },
              { label: "Pricings", href: "/pricings" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  pathname === item.href
                    ? "text-heading"
                    : "text-sub-heading hover:text-heading",
                  "transition uppercase font-heading"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 items-center">
            <Button className="py-2 px-3 rounded-lg font-normal text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] relative">
              <span className="relative z-10">Get Started</span>
            </Button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-1"
              aria-label="Toggle menu"
            >
              <AnimatedHamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden mx-auto mt-3 max-md:layout-standard backdrop-blur bg-background/60"
            >
              <div className="rounded-2xl border border-border px-6 py-6 flex flex-col gap-4">
                {[
                  { label: "Home", href: "/" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "About", href: "/about" },
                  { label: "Pricings", href: "/pricings" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? "text-heading"
                        : "text-sub-heading hover:text-heading",
                      "uppercase font-heading text-sm font-medium transition"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
