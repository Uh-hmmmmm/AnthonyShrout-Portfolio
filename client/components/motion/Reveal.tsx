import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

// Fades + slides up when scrolled into view.
export function Reveal({
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div {...(rest as any)}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Fades + slides up on mount (for hero content).
export function HeroReveal({
  delay = 0,
  y = 20,
  duration = 1.5,
  children,
  ...rest
}: Omit<RevealProps, "once">) {
  const reduce = useReducedMotion();
  if (reduce) return <div {...(rest as any)}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
