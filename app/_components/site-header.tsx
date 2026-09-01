"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import { useScrolled, useScrollSpy } from "./use-scroll-spy";

const SPY_IDS = navLinks.map((link) => link.href.slice(1));
const MENU_ID = "menu-navegacao-mobile";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled();
  const activeId = useScrollSpy(SPY_IDS);
  const navRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Fecha o menu mobile com Esc e ao clicar fora dele.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/5 backdrop-blur-md transition-colors",
        isScrolled ? "bg-navy/95" : "bg-navy/85",
      )}
    >
      <nav
        ref={navRef}
        aria-label="Navegação principal"
        className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-[6%] py-4 md:flex-nowrap md:px-8"
      >
        <a
          href="#topo"
          className="font-title text-lg font-semibold tracking-wide text-paler italic md:text-xl"
        >
          {siteConfig.name} <span className="text-pale not-italic">· Facetas</span>
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={MENU_ID}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="order-3 inline-flex size-9 items-center justify-center rounded-sm text-pale md:hidden"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        <a
          href="#chamada-acao"
          onClick={closeMenu}
          className="order-2 rounded-full bg-gold px-5 py-2 text-[13px] font-semibold tracking-wide text-navy transition-colors hover:bg-champagne md:order-none"
        >
          Agendar
        </a>

        <ul
          id={MENU_ID}
          className={cn(
            "order-4 flex basis-full flex-col gap-1 md:order-none md:flex md:basis-auto md:flex-row md:items-center md:gap-8",
            isMenuOpen ? "flex pt-3" : "hidden",
          )}
        >
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block py-2.5 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors md:py-0",
                    isActive ? "text-white" : "text-pale hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
