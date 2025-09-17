import Image from "next/image";
import { HorizontalTicker } from "../PayoutTicker/Ticker";

const payouts = [
  "/images/payouts/payout.webp",
  "/images/payouts/payout.webp",
  "/images/payouts/payout.webp",
  "/images/payouts/payout.webp",
  "/images/payouts/payout.webp",
];

export default function PayoutsCarousel() {
  return (
    <div className="flex items-center">
      <HorizontalTicker duration={3000}>
        {payouts.map((item) => (
          <Image
            key={item}
            src={item}
            alt={item}
            width={3106}
            height={2194}
            className="pr-5 rounded-lg"
          />
        ))}
      </HorizontalTicker>
    </div>
  );
}
