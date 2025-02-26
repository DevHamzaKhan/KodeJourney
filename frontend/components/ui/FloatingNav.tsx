"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Keep it at the top
        }}
        animate={{
          y: 0, // Keeps it at the top even when page scrolls
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit backdrop-blur fixed top-10 inset-x-0 mx-auto border rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 border-white/[0.2] items-center justify-center space-x-3 bg-[#89CFF0]", // Changed background to #89CFF0
          className
        )}
      >
        {/* Text for Kode Journey */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-base font-semibold text-[#011627]"> {/* Night Owl blue color */}
            KODE JOURNEY
          </span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};