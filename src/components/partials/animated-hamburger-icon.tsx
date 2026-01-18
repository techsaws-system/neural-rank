import { motion } from "framer-motion";

export function AnimatedHamburgerIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={open ? "open" : "closed"}
      initial={false}
    >
      <motion.path
        d="M5.5 8H27.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 8 },
        }}
        transition={{ duration: 0.25 }}
      />

      <motion.path
        d="M5.5 16H27.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.path
        d="M5.5 24H27.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 },
        }}
        transition={{ duration: 0.25 }}
      />
    </motion.svg>
  );
}
