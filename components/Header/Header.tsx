"use client";

import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">

        <div>
          <a href="/">
            <Image
              className="logo"
              src="/logo.svg"
              alt="翠翔祭2026"
              width={20}
              height={20}
            />
          </a>
        </div>

        <div>
          <a href="/apply">
            <Image
              className="apply"
              src="/apply.svg"
              alt="申し込み"
              width={20}
              height={20}
            />
          </a>
        </div>

        <button className="hamburger">
          ☰
        </button>

      </div>
    </header>
  );
}