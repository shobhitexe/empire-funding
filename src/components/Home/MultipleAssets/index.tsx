import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import Image from "next/image";

const MultipleAssetsArr = [
  {
    title: "Crypto Trading",
    desc: "Trade crypto with swift funding and innovative tools.",
  },
  {
    title: "Forex Trading",
    desc: "Master currencies with rapid funding and precision tools.",
  },
  {
    title: "Commodities",
    desc: "Fuel your trades with fast funding for tangible gains.",
  },
  {
    title: "Stocks Index",
    desc: "Earn your share of the profits and receive your payout within 24 hrs.",
  },
  {
    title: "Futures Trading",
    desc: "Earn your share of the profits and receive your payout within 24 hrs.",
  },
];

export default function MultipleAssets() {
  return (
    <div className="container mx-auto sm:py-24 py-14 flex flex-col gap-14 px-5">
      <div className="flex flex-col gap-2 text-center">
        <Heading>
          Multiple Trading <GreenText>Assets</GreenText>
        </Heading>
        <SubHeading>Trade in the following markets:</SubHeading>
      </div>

      <div className="flex flex-wrap items-stretch justify-center gap-10">
        {MultipleAssetsArr.map((item) => (
          <div
            key={item.title}
            className="border border-white/5 hover:border-white/20 duration-200 w-full max-w-sm flex flex-col items-center text-center rounded-3xl pb-5"
            style={{ boxShadow: "0px -65px 142.9px 0px #003d1b59 inset" }}
          >
            <Image
              src={"/images/dollar.svg"}
              alt={item.title}
              width={70}
              height={70}
              className="relative -top-5"
            />

            <div className="flex flex-col gap-1">
              <div className="font-semibold text-2xl">{item.title}</div>
              <div className="text-light font-light max-w-xs">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
