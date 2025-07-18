import Image from "next/image";
import { AnimatedList } from "./AnimatedList";

const Stats = [
  { title: "$120k+", sub: "Total Payouts" },
  { title: "800+", sub: "Total Traders" },
  { title: "2hrs", sub: "Avg.Payout time" },
];

let PayoutsArr = [
  {
    icon: "/images/payouts/usdt.svg",
    name: "Alice Thompson",
    country: "Canada",
    amount: "$125.75",
    duration: "2.5 hours",
  },
  {
    icon: "/images/payouts/eth.svg",
    name: "Raj Patel",
    country: "India",
    amount: "$98.00",
    duration: "4.2 hours",
  },
  {
    icon: "/images/payouts/eth.svg",
    name: "Sofia Garcia",
    country: "Spain",
    amount: "$230.50",
    duration: "3.8 hours",
  },
  {
    icon: "/images/payouts/usdt.svg",
    name: "Liam O'Connor",
    country: "Ireland",
    amount: "$76.20",
    duration: "1.1 hours",
  },
  {
    icon: "/images/payouts/eth.svg",
    name: "Chloe Kim",
    country: "South Korea",
    amount: "$189.00",
    duration: "0.75 hours",
  },
  {
    icon: "/images/payouts/usdt.svg",
    name: "Mateo Rossi",
    country: "Italy",
    amount: "$142.30",
    duration: "2.9 hours",
  },
  {
    icon: "/images/payouts/usdt.svg",
    name: "Emily Nguyen",
    country: "Vietnam",
    amount: "$115.60",
    duration: "1.8 hours",
  },
  {
    icon: "/images/payouts/usdt.svg",
    name: "Noah Smith",
    country: "USA",
    amount: "$210.40",
    duration: "4.9 hours",
  },
  {
    icon: "/images/payouts/eth.svg",
    name: "Aya Tanaka",
    country: "Japan",
    amount: "$135.90",
    duration: "3.2 hours",
  },
  {
    icon: "/images/payouts/usdt.svg",
    name: "Mohammed Al-Farsi",
    country: "UAE",
    amount: "$99.99",
    duration: "0.5 hours",
  },
];

PayoutsArr = Array.from({ length: 10 }, () => PayoutsArr).flat();

export default function BestTraders() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 items-center w-full my-10 px-5">
      <div className="flex flex-col gap-5 md:text-left text-center">
        <div className="md:text-6xl xs:text-5xl text-4xl">
          Live Payouts
          <br />
          <span className="font-semibold pt-2">
            Trusted by
            <br /> Traders Worldwide.
          </span>
        </div>

        {/* <div className="text-light">
          Choose the evaluation based on your preference to become an Empire
          Trader.
        </div> */}

        <div className="flex flex-wrap items-center md:justify-start justify-center gap-5">
          {Stats.map((item) => (
            <div key={item.sub} className="font-semibold">
              <div className="text-[#69FFB2] sm:text-3xl text-2xl">
                {item.title}
              </div>
              <div className="sm:text-xl text-lg">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex h-[400px] flex-col overflow-hidden p-2 w-f">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-background"></div>

        <AnimatedList>
          {PayoutsArr.map((item, idx) => (
            <div
              key={item.name + idx}
              className="flex items-center gap-10 w-full justify-between bg-[#05120B] border border-[#244D37] p-3 rounded-2xl"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="sm:w-[60px] xs:w-[50px] w-[40px]"
                />

                <div className="flex flex-col">
                  <div className="sm:text-xl xs:text-lg text-base font-bold">
                    {item.name}
                  </div>
                  <div className="sm:text-base text-sm">{item.country}</div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-[#A2FFCC] sm:text-2xl xs:text-xl text-lg font-bold">
                  {item.amount}
                </div>
                <div className="bg-[#136036] w-fit text-center rounded-md sm:px-3 px-2 py-px text-sm">
                  {item.duration}
                </div>
              </div>
            </div>
          ))}
        </AnimatedList>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    </div>
  );
}
