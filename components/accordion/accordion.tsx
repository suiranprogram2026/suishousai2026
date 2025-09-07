"use client";
import { useState } from "react";

interface Accordion {
  closedLabel: string; // 閉じているときのテキスト
  openLabel: string;   // 開いているときのテキスト
  children: React.ReactNode; // 開いたときに表示する中身
}

export default function Accordion({ closedLabel, openLabel, children }: Accordion) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
      {/* ボタン部分 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "10px",
          background: "#4bc6ff",
          color: "white",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontSize: "16px",
          borderRadius: "6px",
        }}
      >
        {isOpen ? openLabel : closedLabel}
      </button>

      {/* 折りたたみ部分 */}
      {isOpen && (
        <div
          style={{
            padding: "10px",
            marginTop: "5px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            background: "#f9f9f9",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
