"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const show = (el: HTMLElement) => el.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach(show);
      return;
    }

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              show(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } catch {
      elements.forEach(show);
      return;
    }
  }, []);

  return null;
}
