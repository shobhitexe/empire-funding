import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const Data = [
  {
    title: "Lowest Spreads",
    desc: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.",
  },
  {
    title: "Payouts Guarantee",
    desc: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Empire, you can start with as little or as much as you like.",
  },
  {
    title: "Range of Markets",
    desc: "Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more.",
  },
  {
    title: "Scale up to $2M in Funding",
    desc: "Every win moves you closer to $2 million in funding. Perform well, level up, and get rewarded.",
  },
  {
    title: "24/7 Trader Support",
    desc: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day.",
  },
  {
    title: "AI Trader Journal",
    desc: "AI sees what you miss - and helps you win.",
  },
];

export default function TopRatedFirm() {
  return (
    <div className="sm:my-24 my-14 container mx-auto flex flex-col sm:gap-16 gap-8">
      <Heading className="text-center">
        Why we are a <GreenText>#1 Fastest Growing Prop Firm</GreenText>
      </Heading>

      <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 sm:px-5 px-7">
        {Data.map((item, idx) => (
          <div
            key={item.title}
            className="max-w-md flex flex-col gap-7 sm:p-7 p-5 rounded-2xl max-sm:border"
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
              className="md:w-[70px] w-[60px]"
            />

            <div className="flex flex-col gap-2">
              <div className="font-semibold sm:text-2xl text-xl">
                {item.title}
              </div>
              <div className="text-light font-light max-w-xs sm:text-base text-sm">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
