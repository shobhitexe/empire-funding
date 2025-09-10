import { Button } from "@/components/ui/button";
import GreenText from "@/components/ui/green-text";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Data = [
  { title: "#1", sub: "Rated for Fastest Payouts" },
  { title: "200+", sub: "Traders" },
  { title: "80+", sub: "Countries" },
];

export default function page() {
  return (
    <div className="bg-black">
      <div className="flex flex-col sm:gap-10 gap-5">
        <div className="text-center flex items-center justify-center flex-col gap-2 sm:pt-20 pt-10">
          <div className="flex items-center gap-1 md:text-6xl sm:text-5xl text-4xl font-semibold">
            <GreenText>About</GreenText> <div>Us</div>
          </div>
          {/* <div className="font-light text-light max-w-3xl md:text-xl sm:text-lg">
            I know... just like you many traders have these questions, so here
            are the answers!
          </div> */}
        </div>

        <Image
          src={"/images/founders.avif"}
          alt="about"
          width={1280}
          height={720}
          className="sm:w-[60%] mx-auto relative container px-5"
        />

        <div className="text-center flex flex-col gap-4">
          <div className="md:text-5xl sm:text-4xl text-3xl font-semibold">
            <GreenText>Forging a New Era in Prop Trading</GreenText>
          </div>
          <div className="font-light text-light max-w-6xl text-center mx-auto sm:text-base text-sm px-5">
            At Empire Funded, we believe that trading success should be nurtured
            in an stress-free environment. Our innovative approach offers
            realistic profit targets, generous drawdown limits, and tight
            spreads/commissions on every challenge, empowering you to learn and
            grow at your own pace. This flexibility means you can perfect your
            strategies without the pressure of strict conditions, paving the way
            to building your empire.
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

          {/* <div className="bg-[#0C1511] w-full max-w-5xl mx-auto aspect-video flex items-center justify-center sm:p-5  p-2 rounded-2xl sm:mt-7 mt-5">
            <div className="bg-[#040303] w-full aspect-video flex items-center justify-center relative rounded-2xl">
              <Image
                src={"/images/play.svg"}
                alt={"play"}
                width={110}
                height={110}
                className="sm:w-[110px] w-[60px]"
              />
            </div>
          </div> */}

          <div className="text-left sm:mt-10 mt-5 bg-[#0C1511] p-5 rounded-xl">
            At <strong>Empire Funded,</strong> we&apos;re not just a prop
            firm—we&apos;re a launchpad for wealth-builders.
            <br />
            <br />
            Founded by <strong>Marcus Anthony</strong> and{" "}
            <strong>Max Schreuder,</strong> Empire Funded exists to fund the
            traders who are ready to turn strategy into capital and discipline
            into generational wealth. We back those who take this seriously—who
            show up every day with focus, grit, and the mindset of an operator,
            not a gambler.
            <br />
            <br />
            We don&apos;t sell dreams. We fund traders.
            <br />
            And we do it with purpose.
            <br />
            <br />
            Empire Funded was built on the belief that capital should find its
            way to those who&apos;ve earned it—not those with the loudest voices
            or flashiest content. Our evaluations are tough by design, but fair.
            Every funded account is a contract of trust—our capital, your edge.
            <br />
            <br />
            But this is more than funding. This is about building an Empire of
            wealth, trader by trader. We support those who pass not just with
            payouts, but with coaching, resources, and a community of killers
            all chasing the same goal: freedom through mastery.
            <br />
            <br />
            Whether you&apos;re here to build a second income or change your
            life, you won&apos;t do it alone. Because once you&apos;re funded,
            you&apos;re part of the Empire.
            <br />
            <br />
            <strong>
              Build Wealth,
              <br />
              Create a Legacy
            </strong>
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

        {/* <LastCTASection /> */}
      </div>
    </div>
  );
}
