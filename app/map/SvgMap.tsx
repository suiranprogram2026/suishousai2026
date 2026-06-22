"use client";

import { useCallback, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import { festivalItems } from "@/utils/festival";
import "./SvgMap.css";

type Props = {
  floor: number;
  selectedRoom: string | null;
  onRoomClick: (roomId: string) => void;
  onLoaded?: () => void;
};

export default function SvgMap({
  floor,
  selectedRoom,
  onRoomClick,
  onLoaded,
}: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const syncSelectedRoom = useCallback((svg: SVGSVGElement | null) => {
    if (!svg) return;

    svg.classList.toggle("svg-map-popup-open", selectedRoom !== null);
    svg.querySelectorAll("rect.room").forEach((el) => {
      el.classList.toggle("selected-room", el.id === selectedRoom);
    });
  }, [selectedRoom]);

  useEffect(() => {
    syncSelectedRoom(svgRef.current);
  }, [syncSelectedRoom]);

  return (
    <ReactSVG
        src={`/maps/map_${floor}.svg`}
        beforeInjection={(svg) => {
          svg.style.width = "100%";
          svg.style.height = "100%";
          svg.style.display = "block";
        }}
        afterInjection={(svg) => {
          svgRef.current = svg;
          svg.querySelectorAll("rect").forEach((el) => {

            const item = festivalItems.find(
              (f) => f.room === el.id
            );

            el.classList.add("room");/*cssで.roomが効くようになる*/

            if (item) {
              el.classList.add(item.category);/*cssでfoodやplayが効くようになる（それぞれのカテゴリーのみを抽出する）*/
            }

            el.style.pointerEvents = "all";

            el.addEventListener("click", () => {
              onRoomClick(el.id);
            });
          });

          syncSelectedRoom(svg);
          onLoaded?.();
        }}      
    />
  );
}
