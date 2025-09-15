"use client";

import { useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).fbq) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).fbq("track", "Purchase", {
        value: 100.0,
        currency: "USD",
      });
    }
  }, []);

  return (
    <div className="sm:mt-20 mt-10 px-5">
      <div
        className="flex max-w-sm w-full mx-auto p-10 rounded-xl flex-col items-center justify-center gap-4"
        style={{
          background:
            "linear-gradient(47.01deg, rgba(16, 185, 129, 0.16) 0%, rgba(52, 211, 153, 0.08) 50%, rgba(5, 150, 105, 0.16) 100%)",
        }}
      >
        <Image src={"/images/tick.svg"} alt={"tick"} width={150} height={150} />

        <div className="flex flex-col items-start justify-center gap-4">
          <div className="font-bold text-2xl">Thank you</div>
          <div>Your Purchase has been completed</div>
          <div className="text-sm text-muted-foreground">
            You will receive an email shortly. Please check the spam folder in
            case.
          </div>
          <Link href={"/"} className={buttonVariants({})}>
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
