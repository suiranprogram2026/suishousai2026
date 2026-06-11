"use client";

import { ReactSVG } from "react-svg";
import { festivalItems } from "@/utils/festival";

type Props = {
  floor: number;
  onRoomClick: (roomId: string) => void;
};

export default function SvgMap({
  floor,
  onRoomClick,
}: Props) {
  return (
    <ReactSVG
        src={`/maps/map_${floor}.svg`}
        beforeInjection={(svg) => {
            svg.style.width = "100%";
            svg.style.height = "100%";
            svg.style.display = "block";
        }}
        afterInjection={(svg) => {
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
        }}      
    />
  );
}