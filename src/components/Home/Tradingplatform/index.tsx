import { Button } from "@/components/ui/button";
import GreenText from "@/components/ui/green-text";
import Image from "next/image";

const Phases = [
  {
    title: "Challenge Phase",
    desc: "Choose a Challenge account and showcase your skills.",
    icon: "/images/platform/challenge.svg",
  },
  {
    title: "Get Funded Account",
    desc: "Pass your challenge and get a simulated funded account.",
    icon: "/images/platform/funded.svg",
  },
  {
    title: "Get Rewarded",
    desc: "Earn your share of the profits and receive your payout within 24 hrs.",
    icon: "/images/platform/rewarded.svg",
  },
];

export default function TradingPlatform() {
  return (
    <div className="my-10 container mx-auto bg-[#01110B96] rounded-2xl border border-white/5">
      <div className="flex items-center justify-around p-5">
        <div className="flex flex-col gap-4">
          <div className="text-[#40FF95] font-semibold">HOW IT WORKS</div>
          <div className="md:text-6xl xs:text-5xl text-4xl font-medium">
            Maximum Profit &<br />
            Secure <GreenText>Trading Platform</GreenText>
          </div>
          <div className="text-light font-light">
            Choose the evaluation based on your preference to become an Empire
            Trader.
          </div>

          <Button variant={"green"} size={"xl"} className="w-fit">
            Get Funded
          </Button>
        </div>

        <Image
          src={"/images/platform.png"}
          alt={"platform"}
          width={594}
          height={416}
        />
      </div>

      <div className="flex items-stretch justify-center pb-10 gap-5">
        {Phases.map((item) => (
          <div
            key={item.title}
            className="flex w-full max-w-md flex-col gap-5 bg-[#00150D] p-7 rounded-2xl relative border border-white/5"
          >
            <div className="absolute inset-x-0 w-full h-px -top-px bg-gradient-to-r from-[#000000] via-[#FFFFFF]/20 to-[#000000]" />

            <div className="relative">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="z-10 relative"
              />

              <div className="absolute bg-[#59D28F] h-10 w-10 rounded-full top-5 left-3 blur-md" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-semibold text-2xl">{item.title}</div>
              <div className="text-light font-light max-w-xs">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
