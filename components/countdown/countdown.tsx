"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string; // 例: "2025-12-31T23:59:59"
};

export default function Countdown({ targetDate }: CountdownProps) {
  const targetTime = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null); // ← 初期値は null に

  function getTimeLeft() {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    // 初回レンダー時に初期化
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    // SSR中はここを返すので内容が変動しない
    return (
      <div className="countdown">
        <div className="count-box">
          <p>翠翔祭2026開幕まで残り</p>
          <p className="count">--日 --時間 --分 --秒</p>
        </div>
      </div>
    );
  }

  const isFinished =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="countdown">
      {isFinished ? (
        <p className="finish">翠翔祭2026は終了しました！</p>
      ) : (
        <div className="count-box">
          <p>翠翔祭2026開幕まで残り</p>
          <p className="count">
            {timeLeft.days}日 {timeLeft.hours}時間 {timeLeft.minutes}分 {timeLeft.seconds}秒
          </p>
        </div>
      )}
    </div>
  );
}
