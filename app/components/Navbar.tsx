"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE_NAME } from "@/lib/config";

const navigation = [
  { id: "about", label: "./about" },
  { id: "skills", label: "./skills" },
  { id: "projects", label: "./projects" },
  { id: "websites", label: "./websites" },
  { id: "cv", label: "./cv" },
  { id: "contact", label: "./contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0, 0.15, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav
        ref={navigationRef}
        className="nav-shell"
        aria-label="Main navigation"
      >
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            fa
          </span>
          <span>{SITE_NAME}</span>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.id}
              className={`nav-link${activeSection === item.id ? " is-active" : ""}`}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              className={`mobile-nav-link${activeSection === item.id ? " is-active" : ""}`}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
