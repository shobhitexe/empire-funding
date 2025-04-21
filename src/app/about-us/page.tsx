import { Button } from "@/components/ui/button";
import GreenText from "@/components/ui/green-text";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Data = [
  { title: "#1", sub: "Rated for Fastest Payouts" },
  { title: "3+", sub: "Global Office Locations" },
  { title: "5K+", sub: "Traders" },
];

export default function page() {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10">
        <div className="text-center flex items-center justify-center flex-col gap-2 pt-20">
          <div className="flex items-center gap-1 text-6xl font-semibold">
            <GreenText>About</GreenText> <div>Us</div>
          </div>
          <div className="font-light text-light max-w-3xl text-xl">
            I know... just like you many traders have these questions, so here
            are the answers!
          </div>
        </div>

        <Image
          src={"/images/about.avif"}
          alt="about"
          width={3000}
          height={2000}
          className="w-[60%] mx-auto relative -top-10 container"
        />

        <div className="text-center flex flex-col gap-4">
          <div className="text-5xl font-semibold">
            <GreenText>
              Empire Trading: Forging a New Era in Prop Trading
            </GreenText>
          </div>
          <div className="font-light text-light max-w-6xl text-center mx-auto">
            At Empire Trading, we believe that trading success should be
            nurtured in a stress-free environment. Our innovative approach
            offers free, unlimited retries on every challenge, empowering you to
            learn and grow at your own pace. This flexibility means you can
            perfect your strategies without the pressure of rigid deadlines,
            paving the way to becoming a fully funded EmpireTrader.
          </div>
        </div>

        <div className="py-10 px-20 bg-[#020B06]">
          <div className="grid grid-cols-3 container mx-auto items-center gap-10">
            <div className="flex flex-col font-semibold text-6xl justify-center">
              <div>Our Global</div>
              <GreenText>
                Outreach <span className="text-white">and</span>
              </GreenText>
              <GreenText>Impact</GreenText>
            </div>

            <div
              className="flex flex-col justify-end gap-4 p-10 rounded-2xl h-[400px]"
              style={{
                backgroundImage: "url('/images/lastsection.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Image
                src={"/images/empire.svg"}
                alt={"empire"}
                width={70}
                height={70}
              />

              <div>
                Build Your Legacy.
                <br /> Trade Like an Emperor.
              </div>
            </div>

            <div>
              {Data.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-2 text-3xl font-semibold border-y border-[#333333] py-7"
                >
                  <div className="text-[#69FFB2]">{item.title}</div>
                  <div>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center my-10">
          <div className="text-[#40FF95]">ABOUT</div>

          <div className="flex items-center text-5xl gap-1 justify-center font-semibold">
            <GreenText>Who</GreenText>
            <div>we are?</div>
          </div>

          <div className="bg-[#0C1511] w-full max-w-5xl mx-auto h-[500px] flex items-center justify-center p-5 rounded-2xl mt-7">
            <div className="bg-[#040303] w-full h-full flex items-center justify-center relative rounded-2xl">
              <Image
                src={"/images/play.svg"}
                alt={"play"}
                width={110}
                height={110}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#020B06]">
          <div className="container mx-auto my-10 flex flex-col gap-5">
            <div className="text-[#40FF95]">PRESENCE</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-5xl gap-1 justify-center font-semibold">
                <div>Global</div>
                <GreenText>Presence</GreenText>
              </div>

              <Button variant={"green"} size={"xl"}>
                Get Funded <ArrowRight />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-10">
              <div className="bg-black p-10 rounded-2xl flex flex-col gap-5">
                <div className="text-3xl font-semibold">Global Presence</div>

                <Image
                  src={"/images/map.png"}
                  alt={"map"}
                  width={694}
                  height={247}
                />
              </div>

              <div className="bg-black p-10 rounded-2xl flex flex-col gap-5">
                <div className="text-3xl font-semibold">
                  In house trading
                  <br />
                  infrastructure
                </div>

                <div className="text-light font-light text-xl">
                  Being part of the Empire means that we take out the various
                  middlemen common in the prop industry and run our own trading
                  infrastructure with access to a comprehensive range of
                  liquidity providers for our high-performing Spartan program
                  members.
                </div>
              </div>
            </div>
          </div>
        </div>

        <LastCTASection />
      </div>
    </div>
  );
}

function LastCTASection() {
  return (
    <div
      className="container mx-auto text-center h-[500px] flex flex-col items-center justify-center gap-10 my-10 rounded-3xl"
      style={{
        backgroundImage: "url('/images/lastsection.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between w-full px-20">
        <div className="flex flex-col items-start text-6xl font-semibold gap-1">
          <span>Our Partnered</span>
          <span className="text-[#39FF9C]">Broker</span>

          <Button variant={"green"} size={"xl"} className="mt-10">
            Get Funded <ArrowRight />
          </Button>
        </div>

        <div className="text-xl max-w-2xl text-left">
          Empire Trading works in direct collaboration with our broker partner
          Blueberry Markets.
          <br />
          <br />
          Empire Markets was founded in 2016 and has grown into an award winning
          global Retail Forex brand known for its low spreads and high level of
          client service. Today they are home to over 50,000 traders worldwide
          and we are proud to work with them to bring simulated prop trading to
          the world!
        </div>
      </div>
    </div>
  );
}
