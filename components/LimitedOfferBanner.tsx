"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function LimitedOfferBanner() {
  const [secondsLeft, setSecondsLeft] = useState(900); // 15 minutos

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="w-full bg-red-600 py-3 px-4 text-white text-center flex items-center justify-center gap-3 animate-pulse shadow-md z-50">
      <Clock className="w-6 h-6 md:w-7 md:h-7 animate-spin-slow" />
      <span className="text-lg md:text-xl text-white font-semibold uppercase">
        Oferta limitada termina em {formatTime(secondsLeft)}
      </span>
    </div>
  );
}
