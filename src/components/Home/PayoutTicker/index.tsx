import Image from "next/image";
import { HorizontalTicker } from "./Ticker";

export const payouts = [
  {
    img: "/images/C.png",
    name: "Charla Gianiello",
    payout: "$2,341.81",
    info: { title: "180+", subtitle: "Countries" },
  },
  {
    img: "/images/C.png",
    name: "Dene Wickwarth",
    payout: "$3,613.86",
    info: { title: "$3.7M", subtitle: "Payouts" },
  },
  {
    img: "/images/C.png",
    name: "Janice Gaggen",
    payout: "$8,179.15",
    info: { title: "180+", subtitle: "Countries" },
  },
  {
    img: "/images/C.png",
    name: "Lenee Gribbell",
    payout: "$7,055.08",
    info: { title: "$3.7M", subtitle: "Payouts" },
  },
  {
    img: "/images/C.png",
    name: "Karil MacCosty",
    payout: "$1,073.83",
    info: { title: "180+", subtitle: "Countries" },
  },
  {
    img: "/images/C.png",
    name: "Bruis Eade",
    payout: "$3,917.57",
    info: { title: "$3.7M", subtitle: "Payouts" },
  },
  {
    img: "/images/C.png",
    name: "Rodrique Raggles",
    payout: "$4,548.69",
    info: { title: "180+", subtitle: "Countries" },
  },
  {
    img: "/images/C.png",
    name: "Pietrek Drescher",
    payout: "$8,139.46",
    info: { title: "$3.7M", subtitle: "Payouts" },
  },
  {
    img: "/images/C.png",
    name: "Gilbert Curro",
    payout: "$9,617.59",
    info: { title: "180+", subtitle: "Countries" },
  },
  // {
  //   img: "/images/payouts/certi.png",
  //   name: "Etienne Nolleth",
  //   payout: "$8,273.75",
  //   info: { title: "$3.7M", subtitle: "Payouts" },
  // },
];

export default function PayoutTicker() {
  return (
    <section className="bg-[#050D08] flex items-center justify-center w-full sm:py-2 py-1">
      <HorizontalTicker duration={30000}>
        <div className="flex sm:items-center overflow-auto items-start px-3 -rotate-[0.5deg]s bg-[#050D08] bg-payoutTickerBg w-full py-3 md:gap-5 gap-0 justify-around">
          {payouts.map((item, idx) => (
            <div
              key={idx}
              className="flex sm:gap-5 gap-14 items-center divide-x-2 divide-purple-400/20 w-full min-w-xs"
            >
              <div className="flex items-center gap-4">
                <Image src={item.img} alt={item.name} width={50} height={50} />
                <div className="flex flex-col">
                  <div className="md:text-xl sm:text-lg text-base font-semibold">
                    {item.payout}
                  </div>
                  <div className="md:text-base sm:text-sm text-xs">
                    {item.name}
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:text-base sm:text-sm text-xs pl-2 pr-5">
                <div>{item.info.title}</div>
                <div>{item.info.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </HorizontalTicker>
    </section>
  );
}
