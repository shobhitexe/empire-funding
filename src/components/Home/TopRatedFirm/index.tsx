import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const Data = [
  {
    title: "Lower Spreads",
    desc: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.",
  },
  {
    title: "$0 Minimum Acc Size",
    desc: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like.",
  },
  {
    title: "Range of Markets",
    desc: "Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more.",
  },
  {
    title: "No Fees to Deposit",
    desc: "We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more.",
  },
  {
    title: "24/7 Support",
    desc: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day.",
  },
  {
    title: "Low Latency",
    desc: "X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 5ms.",
  },
];

export default function TopRatedFirm() {
  return (
    <div className="my-20 container mx-auto flex flex-col gap-10">
      <Heading className="text-center">
        Why We&apos;re <GreenText>Top Rated PropFirm</GreenText>
      </Heading>

      <div className="grid grid-cols-3 gap-5">
        {Data.map((item, idx) => (
          <div
            key={item.title}
            className="max-w-md flex flex-col gap-7 p-7 rounded-2xl"
            style={{
              backgroundImage: "url('/images/top-rated/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              src={`/images/top-rated/${idx + 1}.svg`}
              alt={item.title}
              width={70}
              height={70}
            />

            <div className="flex flex-col gap-2">
              <div className="font-semibold text-2xl">{item.title}</div>
              <div className="text-light font-light max-w-xs">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
