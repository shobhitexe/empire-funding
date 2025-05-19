import { LastCTASection } from "@/components";
import { Button } from "@/components/ui/button";
import GreenText from "@/components/ui/green-text";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AffiliateTiers = [
  {
    tier: "Bronze",
    referral: "0 - 49 Life Time Referrals",
    commission: "15% Commission",
    rewards: "1x Free 5k Challenge",
  },
  {
    tier: "Silver",
    referral: "50 - 99 Life Time Referrals",
    commission: "15% Commission",
    rewards: "1x Free 10k Challenge",
  },
  {
    tier: "Gold",
    referral: "100 - 249 Life Time Referrals",
    commission: "15% Commission",
    rewards: "1x Free 25k Challenge",
  },
  {
    tier: "Platinum",
    referral: "250 - 499 Life Time Referrals",
    commission: "15% Commission",
    rewards: "1x Free 50k Challenge",
  },
  {
    tier: "Diamond",
    referral: "500 - 999 Life Time Referrals",
    commission: "15% Commission",
    rewards: "1x Free 100k Challenge",
  },
  {
    tier: "Emerald",
    referral: "1000+ Life Time Referrals",
    commission: "15% Commission",
    rewards: "1x Free 200k Challenge",
  },
];

const AffiliateBenefits = [
  "365 Days Tracking Cookies",
  "Monthly Recurring Commissions",
  "Earn on repeat purchases",
  "Get access to insights with our affiliate dashboard",
];

const HowItWorks = [
  {
    title: "Enrol & access",
    desc: "Register and access your affiliate dashboard",
  },
  {
    title: "Share your link",
    desc: "Receive your unique tracking link for referring to Blueberry Funded",
  },
  {
    title: "Track your referrals",
    desc: "As your visitors come to our site, we track their progress to purchasing an evaluation",
  },
  {
    title: "Receive commissions",
    desc: "Once a referred trader's order is confirmed, your commissions are added into your affiliate dashboard",
  },
  {
    title: "Withdraw",
    desc: "As your commissions grow, you can withdraw these directly via Riseworks",
  },
];

export default function page() {
  return (
    <div className="flex flex-col sm:gap-10 gap-5">
      <div className="text-center flex items-center justify-center flex-col gap-4 sm:pt-20 pt-7 pb-10 px-5">
        <div className="flex sm:flex-row flex-col items-center gap-1 md:text-6xl sm:text-5xl text-4xl font-semibold">
          <div>Lead your</div>
          <GreenText>Empire</GreenText>
        </div>
        <div className="font-light text-light max-w-3xl md:text-xl sm:text-lg text-base">
          Boost your income with our Affiliate Program! Refer new traders and
          earn up to 20% commission on each successful sign-up.
        </div>

        <div className="flex sm:flex-row flex-col items-center gap-3">
          <Button size={"xl"} variant={"green"}>
            Become an Affiliate <ArrowRight />
          </Button>

          <Button size={"xl"} variant={"outline"}>
            Affiliate Login <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="container px-5 mx-auto xs:grid flex flex-col sm:grid-cols-3 xs:grid-cols-1 grid-cols-1 sm:gap-5 gap-3">
        {AffiliateTiers.map((item) => (
          <div
            key={item.tier}
            className="bg-[#090909] rounded-3xl p-5 border flex flex-col gap-3"
          >
            <div className="text-[#69FFB2] font-semibold text-xl">
              {/* Tier {idx + 1} */}
              {item.tier}
            </div>

            <div className="flex items-center gap-3">
              <Image
                src={"/images/affiliate/referral.svg"}
                alt={"referral"}
                width={50}
                height={50}
              />

              <div>{item.referral}</div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src={"/images/affiliate/commission.svg"}
                alt={"commission"}
                width={50}
                height={50}
              />

              <div>{item.commission}</div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src={"/images/affiliate/rewards.svg"}
                alt={"rewards"}
                width={50}
                height={50}
              />

              <div>{item.rewards}</div>
            </div>
          </div>
        ))}

        <div className="col-span-3 bg-[#020B06] border rounded-3xl flex flex-col items-center py-5">
          <div className="flex flex-col items-center justify-between p-5">
            <Image
              src={"/images/affiliate/star.svg"}
              alt={"star"}
              width={80}
              height={80}
            />

            <div className="text-[#8AFEC1] sm:text-2xl text-xl font-semibold">
              Bespoke
            </div>
          </div>

          <div className="font-semibold max-w-3xl text-center sm:text-xl text-lg px-5 pb-5">
            If you have a proven track record at other prop firms, we can offer
            you a personalised and competitive package.
          </div>
        </div>
      </div>

      <div className="bg-[#020B06] px-5">
        <div className="container mx-auto my-10 flex flex-col sm:gap-5">
          <div className="text-[#40FF95]">FUNDED</div>
          <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between gap-5">
            <div className="flex items-center sm:text-5xl text-4xl gap-1 justify-center font-semibold">
              <div>Affiliate</div>
              <GreenText>Benefits</GreenText>
            </div>

            <Button variant={"green"} size={"xl"}>
              Join Affiliate <ArrowRight />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 mt-10">
            {AffiliateBenefits.map((item) => (
              <div
                key={item}
                style={{
                  backgroundImage: "url('/images/affiliate-bg.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="p-5 rounded-2xl md:text-4xl sm:text-3xl text-2xl sm:h-[250px] xs:h-[200px] max-xs:aspect-video"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-sm:px-5">
        <div className="text-center flex flex-col gap-2">
          <div className="text-[#40FF95] text-lg">PRICING</div>
          <div className="sm:text-5xl text-4xl font-semibold">
            How it <GreenText>Works?</GreenText>{" "}
          </div>
        </div>
        <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 sm:mt-10 mt-5 sm:gap-10 xs:gap-5 gap-3">
          {HowItWorks.map((item, idx) => (
            <div
              key={item.title}
              className="flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3 max-w-sm sm:border-none border rounded-2xl p-5 bg-[#020B06]"
            >
              <Image
                src={`/images/about/${idx + 1}.svg`}
                alt={item.title}
                width={80}
                height={80}
                className="sm:w-[80px] w-[60px]"
              />

              <div className="flex flex-col gap-3">
                <div className="text-xl font-semibold"> {item.title}</div>
                <div className="text-light">{item.desc}</div>
              </div>
            </div>
          ))}

          <Button
            size={"xl"}
            variant={"green"}
            className="sm:w-fit w-full relative xs:top-10 top-5"
          >
            Join Affiliate <ArrowRight />
          </Button>
        </div>
      </div>

      <LastCTASection />
    </div>
  );
}
