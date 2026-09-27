import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      data-reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section relative ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function GradientIcon({
  children,
  size = "md",
}: {
  children: ReactNode;
  size?: "md" | "lg";
}) {
  const box =
    size === "lg" ? "h-14 w-14 rounded-2xl" : "h-12 w-12 rounded-xl";
  return (
    <div
      className={`${box} relative grid shrink-0 place-items-center border border-line bg-gradient-to-br from-brand/25 via-brand-2/10 to-transparent text-brand-2`}
    >
      {children}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group/link inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-brand-2 transition-colors hover:text-white"
    >
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover/link:translate-x-0.5">
        →
      </span>
    </a>
  );
}
