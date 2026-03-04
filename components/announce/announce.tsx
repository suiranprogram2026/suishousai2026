"use client";

import "./announce.css"
import { AnnounceItem, announceItems } from "@/utils/announce";

export default function Announce() {
  return (
    <div className="announce">
      {announceItems.map((item) => (
        <div key={item.id} className="announce-item">
          <h1 className="title">{item.title}</h1>
          <h3 className="date">{item.date}</h3>
          <h2 className="detail">{item.detail}</h2>
        </div>
      ))}
    </div>
  );
}
