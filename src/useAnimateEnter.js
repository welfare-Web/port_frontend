import { useEffect } from "react";

export default function useAnimateEnter() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll(".animate-enter")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target;
          const index = sections.indexOf(section);

          /* Section delay */
          section.style.transitionDelay = `${index * 200}ms`;
          section.classList.add("visible");

          /* 🔥 Stagger children */
          const children = section.querySelectorAll(".animate-child");
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 120}ms`;
            child.classList.add("visible");
          });

          observer.unobserve(section);
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);
}
