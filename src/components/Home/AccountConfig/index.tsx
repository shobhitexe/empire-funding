"use client";

import { Button } from "@/components/ui/button";
import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import { Calendar, Scale, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { checkOutLinks } from "./checkout-links";
import Image from "next/image";

const TradingPath = ["Instant", "1-Step", "2-Step"];

const AccountSize = [
  ["$5K", "$10K", "$15K", "$25K", "$50K", "$100K"],
  ["$5K", "$10k", "$25K", "$50K", "$100K", "$200K"],
  ["$5K", "$10k", "$25K", "$50K", "$100K", "$200K"],
];

const Pricing = [
  ["$119", "$178", "$204", "$319", "$497", "$897"],
  ["$67", "$119", "$219", "$340", "$619", "$847"],
  ["$54", "$99", "$197", "$319", "$599", "$793"],
];

// const Pricing = [
//   ["$87", "$107", "$167", "$267", "$397", "$897"],
//   ["$67", "$107", "$157", "$287", "$407", "$647"],
//   ["$49", "$67", "$107", "$227", "$317", "$597"],
// ];

// const PricingINR = [
//   ["₹7,459", "₹9,179", "₹14,319", "₹22,889", "₹34,039", "₹76,949"],
//   ["₹5,749", "₹9,179", "₹13,469", "₹24,619", "₹34,919", "₹55,499"],
//   ["₹4,199", "₹5,749", "₹9,179", "₹19,479", "₹27,199", "₹51,199"],
// ];

// const PricingINRDiscounted = [
//   ["₹3,730", "₹4,590", "₹7,160", "₹11,445", "₹17,020", "₹38,475"],
//   ["₹5,749", "₹9,179", "₹13,469", "₹24,619", "₹34,919", "₹55,499"],
//   ["₹1,260", "₹1,725", "₹2,754", "₹5,844", "₹8,160", "₹15,360"],
// ];

const hotTags = [
  [false, false, false, true, false, false], // for "Instant"
  [false, false, false, true, false, false], // for "1-Step"
  [false, false, false, false, false, true], // for "2-Step"
];

const TagNames = ["Most Popular", "Most Passed", "Best Value"];

export default function AccountConfig() {
  const [step, setStep] = useState(0);
  const [accSize, setAccSize] = useState(0);

  // const [country, setCountry] = useState("");

  // useEffect(() => {
  //   async function detectCountry() {
  //     const { default: getUserCountry } = await import("js-user-country");
  //     setCountry(getUserCountry().name);
  //   }

  //   detectCountry();
  // }, []);

  return (
    <div id="challenges" className="sm:my-24 my-14 container mx-auto px-5">
      <div className="flex flex-col gap-2 text-center">
        <Heading>
          Become an <GreenText>Empire Trader</GreenText>
        </Heading>
        <SubHeading>
          Choose the evaluation based on your preference to become an Empire
          Trader.
        </SubHeading>
      </div>

      <div className="max-w-7xl mx-auto mt-5 flex flex-col gap-5">
        <div className="grid sm:grid-cols-[4fr_2fr] grid-cols-1 items-end sm:gap-5 gap-4">
          <div className="flex flex-col sm:gap-4 gap-2">
            <div className="flex flex-col gap-2">
              <div className="sm:text-xl text-lg font-semibold">
                Choose your Trading Path
              </div>
              <div className="bg-[#00150D] p-2 rounded-2xl grid grid-cols-3 items-center gap-3">
                {TradingPath.map((item, idx) => (
                  <Button
                    key={item}
                    variant={step === idx ? "green" : "outline"}
                    onClick={() => setStep(idx)}
                    className="sm:h-14 h-10 font-semibold"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="sm:text-xl text-lg font-semibold">
                Select Account Size
              </div>
              <div
                className={`bg-[#00150D] p-2 rounded-2xl sm:grid grid-cols-6 flex items-center sm:gap-3 gap-1 overflow-auto`}
              >
                {AccountSize[step].map((item, idx) => (
                  <Button
                    key={item}
                    variant={accSize === idx ? "green" : "outline"}
                    onClick={() => setAccSize(idx)}
                    className="sm:h-14 h-10 px-4 font-semibold sm:text-base text-sm gap-1"
                  >
                    {hotTags[step][idx] && (
                      <>
                        {accSize === idx ? (
                          <Image
                            src={"/images/fire.svg"}
                            alt={"fire"}
                            width={50}
                            height={50}
                            className="sm:size-5 size-4"
                          />
                        ) : (
                          <Image
                            src={"/images/fire-1.svg"}
                            alt={"fire"}
                            width={50}
                            height={50}
                            className="sm:size-5 size-4"
                          />
                        )}
                      </>
                    )}
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#00150D] max-sm:mt-2 sm:h-[85%] w-full relative rounded-3xl flex flex-col gap-3 items-center text-center justify-center p-5">
            {hotTags[step][accSize] && (
              <div
                style={{
                  background:
                    "linear-gradient(175.3deg, #06130C -40.48%, #2FD476 209.25%)",
                }}
                className="absolute flex items-center -top-3 rounded-3xl gap-1 px-4 py-1"
              >
                <Image
                  src={"/images/fire-1.svg"}
                  alt={"fire-1"}
                  width={22}
                  height={27}
                  className="size-4"
                />
                <div className="text-sm">{TagNames[step]}</div>
              </div>
            )}

            <div className="font-semibold">START NOW AT ONLY</div>
            <div className="text-6xl font-bold">
              {/* {country === "India" ? (
                <>
                  {step !== 1 ? (
                    <div className="flex gap-2 items-center relative -lesft-2">
                      <span className="relative text-3xl">
                  
                      </span>
                      <span className="text-5xl">
                        {PricingINRDiscounted[step][accSize]}
                      </span>
                    </div>
                  ) : (
                    <div>{PricingINR[step][accSize]}</div>
                  )}
                </>
              ) : (
                Pricing[step][accSize]
              )} */}
              {Pricing[step][accSize]}
            </div>
            <Button
              variant={"green"}
              className="h-11 px-10 font-semibold"
              asChild
            >
              <a
                href={checkOutLinks[step][accSize]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Challenge
              </a>
            </Button>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-stretch gap-5">
          <div className="bg-[#00150D] p-5 rounded-2xl flex flex-col gap-3">
            <div className="text-xl font-semibold border-b border-[#385546] pb-2">
              1. {step === 0 ? "FUNDED ACCOUNT" : "PHASE 1"}
            </div>
            <div className="text-[#8F8F8F] text-sm">
              Choose a simulated account size and try to reach the minimum
              simulated gains target. Trade all available instruments. Subject
              to certain rules and objectives, your trading style is completely
              up to you!
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-[#59D28F]" /> Profit Target
                </div>
                <div>{step === 0 ? "N/A" : step === 1 ? "6%" : "6%"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-[#59D28F]" /> Daily Drawdown
                </div>
                <div>{step === 2 ? "5%" : "3%"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-[#59D28F]" /> Maximum Drawdown
                </div>
                <div>{step === 0 ? "6%" : "12%"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="text-[#59D28F] size-5" /> Minimum Trading
                  Days
                </div>
                <div>{step === 0 ? "4" : "3"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="text-[#59D28F] size-5" /> Profit Split
                </div>
                <div>90%</div>
              </div>
            </div>
          </div>
          <div
            className={`bg-[#00150D] p-5 rounded-2xl flex flex-col items-start gap-3 ${
              step !== 2 ? "blur max-sm:hidden" : ""
            }`}
          >
            <div className="text-xl font-semibold border-b border-[#385546] pb-2 w-full">
              2. PHASE 2
            </div>
            <div className="text-[#8F8F8F] text-sm">
              You can now start trading on a simulated basis in the
              EmpireTrading program without simulated gain targets as long as
              you won&apos;t reach max simulated loss or daily simulated loss
              limits.
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-[#59D28F]" /> Profit Target
                </div>
                <div>{step === 0 ? "N/A" : step === 1 ? "8%" : "5%"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-[#59D28F]" /> Daily Drawdown
                </div>
                <div>{step === 2 ? "5%" : "3%"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-[#59D28F]" /> Maximum Drawdown
                </div>
                <div>{step === 0 ? "6%" : "12%"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="text-[#59D28F] size-5" /> Minimum Trading
                  Days
                </div>
                <div>{step === 0 ? "4" : "3"}</div>
              </div>

              <div className="flex items-center bg-[#000000] rounded-xl p-2 text-[#8F8F8F] justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="text-[#59D28F] size-5" /> Profit Split
                </div>
                <div>90%</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center sm:mt-3 mt-1 sm:text-base text-sm">
          100% Profit Split • 24-Hour Payout • 150% Refund • No Minimum Trading
          Days • 5% Profit Target
        </div> */}
        {/* <div
          style={{
            backgroundImage: "url('/images/paid-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="text-[#4BFFC6] font-bold text-center py-4 rounded-xl sm:text-2xl text-base"
        >
          Get Paid in 48 Hours or Get $2000!
        </div> */}
      </div>
    </div>
  );
}
