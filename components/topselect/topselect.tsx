"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./topselect.module.css";

type MenuButtonProps = {
  image: string;
  alt: string;
  href?: string;
};

function MenuButton({ image, alt, href }: MenuButtonProps) {
  const content = (
    <Image
      src={image}
      alt={alt}
      width={300}
      height={120}
      className={styles.menuImage}
    />
  );

  return href ? (
    <Link href={href} className={styles.menuButton}>
      {content}
    </Link>
  ) : (
    <div className={styles.menuButton}>
      {content}
    </div>
  );
}

export default function Page() {
  return (
    <div className={styles.menuContainer}>

      <MenuButton
        image="/event.png"
        alt="イベント"
        href="/event"
      />

      <MenuButton
        image="/map.png"
        alt="マップ"
        href="/map"
      />

      <MenuButton
        image="/timetable.png"
        alt="タイムテーブル"
        href="/timetable"
      />

    </div>
    
  );
}