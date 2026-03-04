"use client";

import { useEffect, useState } from "react";
import styles from "./countdown.module.css";

type Props = {
  targetDate: string;
};

export default function Countdown({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor(diff / 1000 / 60 / 60) % 24;
      const m = Math.floor(diff / 1000 / 60) % 60;
      const s = Math.floor(diff / 1000) % 60;

      setTimeLeft({
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
      });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>翠翔祭まであと</h1>

      {timeLeft ? (
        <div className={styles.timeContainer}>
          <div className={styles.time}>
            <span className={styles.timeNum}>{timeLeft.days}</span>
            DAYS
          </div>

          <div className={styles.time}>
            <span className={styles.timeNum}>
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            HOURS
          </div>

          <div className={styles.time}>
            <span className={styles.timeNum}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            MIN
          </div>

          <div className={styles.time}>
            <span className={styles.timeNum}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            SEC
          </div>
        </div>
      ) : (
        <div className={styles.finished}>
          🎉 翠翔祭開催中！ 🎉
        </div>
      )}
    </div>
  );
}