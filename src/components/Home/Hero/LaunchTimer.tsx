"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";

function SemiColon() {
  return <div className="text-white sm:text-xl xs:text-lg text-base">:</div>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <div />;
  } else {
    return (
      <div className="flex items-center flex-col sm:gap-5 gap-3">
        <div className="flex items-center sm:gap-3 xs:gap-2 gap-1 flex-wraps px-3">
          <CountDownCard value={days} type={"DAYS"} /> <SemiColon />
          <CountDownCard value={hours} type={"HOURS"} /> <SemiColon />
          <CountDownCard value={minutes} type={"MINUTES"} /> <SemiColon />
          <CountDownCard value={seconds} type={"SECONDS"} />
        </div>
      </div>
    );
  }
};

export default function CountDown() {
  const [isClient, SetIsClient] = useState(false);

  useEffect(() => {
    SetIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="flex sm:justify-start">
        <div className="flex flex-col gap-2 text-xl font-semibold mt-3">
          <div className="text-center">We launch in</div>

          <Countdown date={new Date(1747593000000)} renderer={renderer} />
        </div>
      </div>
    )
  );
}

function CountDownCard({ value, type }: { value: string; type: string }) {
  return (
    <div className="flex flex-col items-center bg-timerCardGrey sm:gap-1 p-3 min-w-16 rounded-2xl border-b border-white/20 bg-white/10 backdrop-blur">
      <div className="text-white font-circularBold sm:text-3xl xs:text-2xl text-xl">
        {value}
      </div>
      <div className="text-[#696969] sm:text-sm text-[60%]">{type}</div>
    </div>
  );
}
