"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.08,
      ease: "easeOut"
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 18,
      duration: 0.8
    },
  },
};

type SectionProps = { children: ReactNode; className?: string };

export function AnimatedSection({ children, className = "" }: SectionProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, className = "" }: SectionProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}