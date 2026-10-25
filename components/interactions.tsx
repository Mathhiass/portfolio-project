"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
const links = ["About", "Experience", "Projects", "Skills", "Contact"];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try {
      localStorage.setItem("kali-theme", next ? "light" : "dark");
    } catch {}
  }
  return (
    <header className="navigation">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        Kali.Dev
      </a>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={open ? "nav-links open" : "nav-links"}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            document.getElementById("menu-toggle")?.focus();
          }
        }}
      >
        {links.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            aria-current={
              active === label.toLowerCase() ? "location" : undefined
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-controls">
        <button
          className="icon-button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          <Moon className="moon-icon" size={20} />
          <Sun className="sun-icon" size={20} />
        </button>
        <button
          id="menu-toggle"
          className="icon-button menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function WorkLens() {
  const [lens, setLens] = useState<"build" | "care">("build");
  return (
    <div className="work-lens">
      <div
        className="lens-buttons"
        role="group"
        aria-label="Explore my approach"
      >
        <button
          aria-pressed={lens === "build"}
          onClick={() => setLens("build")}
        >
          Build something new
        </button>
        <button aria-pressed={lens === "care"} onClick={() => setLens("care")}>
          Care for what’s live
        </button>
      </div>
      <p aria-live="polite">
        {lens === "build"
          ? "From an idea to an interface: thoughtful layouts, responsive details, and room to explore."
          : "From launch to the next update: content care, practical troubleshooting, and a client’s point of view."}
      </p>
      <a
        className="text-link"
        href={lens === "build" ? "#projects" : "#experience"}
      >
        {lens === "build" ? "Explore my projects" : "Read about my experience"}
      </a>
    </div>
  );
}
export function RevealMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
