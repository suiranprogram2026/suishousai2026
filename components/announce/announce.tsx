"use client";

import "./announce.css"
import { AnnounceItem, announceItems } from "@/utils/announce";

export default function Announce() {
  return (
    <div className="announce">
      {announceItems.map((item) => (
        <div key={item.id} className="announce-item">
          <div className="title">{item.title}</div>
          <div className="detail">{item.detail}</div>
        </div>
      ))}
    </div>
  );
}
