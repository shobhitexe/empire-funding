"use client";

import { Button } from "@/components/ui/button";
import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import { Calendar, Scale, TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const TradingPath = ["Instant", "1-Step", "2-Step"];

const AccountSize = [
  ["$5K", "$10K", "$15K", "$25K", "$50K", "$100K"],
  ["$5K", "$10k", "$25K", "$50K", "$100K", "$200K"],
  ["$5K", "$10k", "$25K", "$50K", "$100K", "$200K"],
];

const Pricing = [
  [87, 107, 167, 267, 397, 897],
  [67, 107, 157, 227, 407, 647],
  [49, 67, 107, 227, 317, 597],
];

export default function AccountConfig() {
  const [step, setStep] = useState(0);
  const [accSize, setAccSize] = useState(0);

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
                className={`bg-[#00150D] p-2 rounded-2xl grid grid-cols-6 items-center sm:gap-3 gap-1`}
              >
                {AccountSize[step].map((item, idx) => (
                  <Button
                    key={item}
                    variant={accSize === idx ? "green" : "outline"}
                    onClick={() => setAccSize(idx)}
                    className="sm:h-14 h-10 font-semibold sm:text-base text-sm"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#00150D] sm:h-[85%] w-full rounded-3xl flex flex-col gap-3 items-center text-center justify-center p-5">
            <div className="font-semibold">START NOW AT ONLY</div>
            <div className="text-6xl font-bold">${Pricing[step][accSize]}</div>
            <Button
              variant={"green"}
              className="h-11 px-10 font-semibold"
              asChild
            >
              <Link
                href={"https://app.empiretrading.co/login"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Challenge
              </Link>
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
                <div>{step === 0 ? "N/A" : step === 1 ? "8%" : "6%"}</div>
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
      </div>
    </div>
  );
}
