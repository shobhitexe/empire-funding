import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const MultipleAssetsArr = [
  {
    title: "Up to 100% Profit Splits",
    desc: "Keep every dollar you earn—our funding model lets you keep up to 100% of your profits.",
    img: "/images/split.png",
  },
  {
    title: "Instant Funding",
    desc: "Buy a pre-funded account and start payouts immediately. No challenge, no wait. Simply pick your account size, pay a one-time fee, and access real capital with zero hurdles.",
    img: "/images/step.png",
  },
  {
    title: "Lightning Fast Payouts",
    desc: "Trade hard today, spend tomorrow—experience truly lightning-fast payouts.",
    img: "/images/fast.png",
  },
  {
    title: "Trade News Freely",
    desc: "Keep your positions open and trade without any restrictions, even during major news releases.",
    img: "/images/news.png",
  },
  {
    title: "6% Profit Target—Super Low",
    desc: "Hit your mark effortlessly with our ultra-low 6% profit target—less stress, more trading.",
    img: "/images/target.png",
  },
];

export default function MultipleAssets() {
  return (
    <div className="container mx-auto sm:py-24 py-14 flex flex-col gap-14 px-5">
      <div className="flex flex-col gap-2 text-center">
        <Heading>
          Industry-Leading <GreenText>Features</GreenText>
        </Heading>
        {/* <SubHeading>Trade in the following markets:</SubHeading> */}
      </div>

      <div className="flex flex-wrap items-stretch justify-center gap-10">
        {MultipleAssetsArr.map((item) => (
          <div
            key={item.title}
            className="border border-white/5 hover:border-white/20 duration-200 w-full max-w-sm flex flex-col items-center text-center rounded-3xl pb-5"
            style={{ boxShadow: "0px -65px 142.9px 0px #003d1b59 inset" }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={90}
              height={90}
              className="relative sm:-top-7 -top-5"
            />

            <div className="flex flex-col gap-1">
              <div className="font-semibold text-2xl px-2">{item.title}</div>
              <div className="text-light font-light max-w-xs">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
