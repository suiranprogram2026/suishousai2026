"use client";

import { ReactSVG } from "react-svg";

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
            el.setAttribute("fill", "transparent");
            el.style.pointerEvents = "all";

            el.addEventListener("click", () => {
              console.log("clicked", el.id);
              onRoomClick(el.id);
            });
          });
        }}
        
    />
  );
}