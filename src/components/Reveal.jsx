import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40, // ✅ EXACT translateY(40px)
      }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        delay,

        // ✅ EXACT CSS MATCH
        opacity: {
          duration: 0.8,
          ease: "easeInOut", // closest to CSS `ease`
        },
        y: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}
