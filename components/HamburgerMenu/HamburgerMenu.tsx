"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import styles from "./HamburgerMenu.module.css"; // CSS Module

export default function HamburgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const menuRef: RefObject<HTMLDivElement> = useRef(null);
  const firstLinkRef: RefObject<HTMLAnchorElement> = useRef(null);
  const toggleRef: RefObject<HTMLButtonElement> = useRef(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }

      // Focus trap when menu open
      if (e.key === "Tab" && open && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<
          HTMLButtonElement | HTMLAnchorElement
        >("a, button, [tabindex]:not([tabindex='-1'])");

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);
      firstLinkRef.current?.focus();
    } else {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      toggleRef.current?.focus();
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav className={styles.siteNav}>
      <div className={styles.navInner}>

        <button
          ref={toggleRef}
          className={styles.navToggle}
          aria-controls="global-menu"
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`${styles.hamburger} ${open ? styles.open : ""}`}>
            <span className={`${styles.bar} ${styles.bar1}`}></span>
            <span className={`${styles.bar} ${styles.bar2}`}></span>
            <span className={`${styles.bar} ${styles.bar3}`}></span>
          </span>
        </button>
      </div>

      <div
        id="global-menu"
        className={`${styles.globalMenu} ${open ? styles.open : ""}`}
        aria-hidden={!open}
        ref={menuRef}
      >
        <div
          className={`${styles.menuInner} ${open ? styles.menuInnerOpen : ""}`}
          role="menu"
          aria-label="グローバルメニュー"
        >
          {/**<button
            className={styles.menuClose}
            aria-label="メニューを閉じる"
            onClick={() => setOpen(false)}
          >
            ×
          </button>*/}

          <ul className={styles.menuList}>
            <li>
              <a ref={firstLinkRef} role="menuitem" href="/">
                TOP
              </a>
            </li>
            <li>
              <a role="menuitem" href="/map">
                MAP
              </a>
            </li>
            <li>
              <a role="menuitem" href="/event">
                EVENT
              </a>
            </li>
            <li>
              <a role="menuitem" href="/timetable">
                TIMETABLE
              </a>
            </li>
            <li>
              <a role="menuitem" href="/attention">
                ATTENTION
              </a>
            </li>
            <li>
              <a role="menuitem" href="/about">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${styles.theme_title} ${
          open ? styles.themeTitleOpen : ""
        }`}
        aria-hidden={!open}
      >
        <h1>LUMINOUS</h1>
      </div>

      <div
        className={`${styles.menuBackdrop} ${open ? styles.menuBackdropOpen : ""}`}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}