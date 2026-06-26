"use client";

import Image from "next/image";
import styles from "./HamburgerMenu.module.css";
import { useState,useEffect } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);
  
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);


  return (
  <> 
    <header className={styles.header}>
      <div className={styles.wrapper}>

        <div>
          <a href="/">
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="翠翔祭2026"
              width={1200}
              height={600}
            />
          </a>
        </div>

        <div className={styles.rightMenu}>
          
          <a href="https://www.pen-kanagawa.ed.jp/yokohamasuiran-h/zennichi/seikatsu/suisyousai.html">
            <Image
              className={styles.apply}
              src="/apply.svg"
              alt="お申し込み"
              width={1200}
              height={600}
            />
          </a>

          <button className={`${styles.hamburger} ${open ? styles.open : ""}`}
                  onClick={() => setOpen(!open)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
 
        </div>


      </div>
    </header>
    
    <div className={`${styles.menu} ${open ? styles.show :""}`}>
      <ul>
        <li><a href="/top">TOP</a></li>
        <li><a href="/map">MAP</a></li>
        <li><a href="/event">EVENT</a></li>
        <li><a href="/timetable">TIMETABLE</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/attention">ATTENTION</a></li>
      </ul>
    </div>
  </>
  );

  
}