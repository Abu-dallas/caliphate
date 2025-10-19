"use client";
import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const eventDate = new Date("October 30, 2025 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;
      if (diff <= 0) {
        setEnded(true);
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTime({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (ended) {
    return (
      <div className="mt-6 text-2xl font-bold text-maroon-800">
        🎉 The Celebration Has Begun!
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className=" flex justify-center gap-4 flex-wrap">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center rounded-xl shadow border border-slate-100 max-sm:w-18 max-sm:h-18 w-24 h-24 justify-center"
        >
          <span className="text-3xl textmaroon tex font-bold">
            {unit.value}
          </span>
          <span className="text-sm textmaroon font-medium">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
