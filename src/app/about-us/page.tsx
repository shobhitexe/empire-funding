import { Button } from "@/components/ui/button";
import GreenText from "@/components/ui/green-text";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Data = [
  { title: "#1", sub: "Rated for Fastest Payouts" },
  { title: "3+", sub: "Global Office Locations" },
  { title: "5K+", sub: "Traders" },
];

export default function page() {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10">
        <div className="text-center flex items-center justify-center flex-col gap-2 sm:pt-20 pt-10">
          <div className="flex items-center gap-1 md:text-6xl sm:text-5xl text-4xl font-semibold">
            <GreenText>About</GreenText> <div>Us</div>
          </div>
          <div className="font-light text-light max-w-3xl md:text-xl sm:text-lg">
            I know... just like you many traders have these questions, so here
            are the answers!
          </div>
        </div>

        <Image
          src={"/images/about.avif"}
          alt="about"
          width={3000}
          height={2000}
          className="sm:w-[60%] mx-auto relative -top-10 container"
        />

        <div className="text-center flex flex-col gap-4">
          <div className="md:text-5xl sm:text-4xl text-3xl font-semibold">
            <GreenText>
              Empire Trading: Forging a New Era in Prop Trading
            </GreenText>
          </div>
          <div className="font-light text-light max-w-6xl text-center mx-auto sm:text-base text-sm px-5">
            At Empire Trading, we believe that trading success should be
            nurtured in a stress-free environment. Our innovative approach
            offers free, unlimited retries on every challenge, empowering you to
            learn and grow at your own pace. This flexibility means you can
            perfect your strategies without the pressure of rigid deadlines,
            paving the way to becoming a fully funded EmpireTrader.
          </div>
        </div>

        <div className="py-10 sm:px-20 px-5 bg-[#020B06]">
          <div className="grid sm:grid-cols-3 grid-cols-1 container mx-auto items-center sm:gap-10 gap-5">
            <div className="flex flex-col font-semibold md:text-6xl sm:text-5xl text-4xl justify-center">
              <div>Our Global</div>
              <GreenText>
                Outreach <span className="text-white">and</span>
              </GreenText>
              <GreenText>Impact</GreenText>
            </div>

            <div
              className="flex flex-col justify-end gap-4 sm:p-10 p-5 rounded-2xl sm:h-[400px]"
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
                  className="flex items-center gap-2 md:text-3xl sm:text-2xl text-xl font-semibold border-y border-[#333333] sm:py-7 py-5"
                >
                  <div className="text-[#69FFB2]">{item.title}</div>
                  <div>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center sm:my-10 my-5 max-sm:px-5">
          <div className="text-[#40FF95]">ABOUT</div>

          <div className="flex items-center sm:text-5xl text-4xl gap-1 justify-center font-semibold">
            <GreenText>Who</GreenText>
            <div>we are?</div>
          </div>

          <div className="bg-[#0C1511] w-full max-w-5xl mx-auto aspect-video flex items-center justify-center sm:p-5  p-2 rounded-2xl sm:mt-7 mt-5">
            <div className="bg-[#040303] w-full aspect-video flex items-center justify-center relative rounded-2xl">
              <Image
                src={"/images/play.svg"}
                alt={"play"}
                width={110}
                height={110}
                className="sm:w-[110px] w-[60px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#020B06]">
          <div className="container mx-auto my-10 flex flex-col sm:gap-5 max-sm:px-5">
            <div className="text-[#40FF95]">PRESENCE</div>
            <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between gap-5">
              <div className="flex items-center sm:text-5xl text-4xl gap-1 justify-center font-semibold">
                <div>Global</div>
                <GreenText>Presence</GreenText>
              </div>

              <Button variant={"green"} size={"xl"} asChild>
                <Link href={`/#challenges`}>
                  Get Funded <ArrowRight />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 sm:mt-10 mt-5">
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
                <div className="sm:text-3xl text-2xl font-semibold">
                  In house trading
                  <br />
                  infrastructure
                </div>

                <div className="text-light font-light md:text-xl sm:text-lg text-base">
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
      className="container mx-auto sm:w-full w-[90%] text-center md:h-[500px] py-10 flex flex-col items-center justify-center gap-10 my-10 rounded-3xl"
      style={{
        backgroundImage: "url('/images/lastsection.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex md:flex-row flex-col gap-5 justify-between w-full sm:px-20 px-5">
        <div className="flex flex-col items-start md:text-6xl sm:text-5xl text-4xl font-semibold gap-1">
          <span className="text-left">Our Partnered</span>
          <span className="text-[#39FF9C]">Broker</span>

          <Button variant={"green"} size={"xl"} className="mt-10" asChild>
            <Link href={`/#challenges`}>
              Get Funded <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="md:text-xl sm:text-lg text-base max-w-2xl text-left">
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
