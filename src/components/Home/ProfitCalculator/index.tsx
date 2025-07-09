"use client";

import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import { useState } from "react";
import Slider from "@mui/material/Slider";

function valuetextAccSize(value: number) {
  return `${value}`;
}

function valuetextPercentage(value: number) {
  return `${value}`;
}

export default function ProfitCalculator() {
  const [accSize, setAccSize] = useState<number>(25000);
  const [percentage, setPercantage] = useState<number>(10);

  const marksAccSize = [
    {
      value: 0,
      label: "$5k",
    },
    {
      value: 1,
      label: "$10k",
    },
    {
      value: 2,
      label: "$15k",
    },
    {
      value: 3,
      label: "$25k",
    },
    {
      value: 4,
      label: "$50k",
    },
    {
      value: 5,
      label: "$100k",
    },
  ];

  const handleChangeAccSize = (
    event: Event,
    value: number | number[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    activeThumb: number
  ) => {
    const sizeArr = [5000, 10000, 15000, 25000, 50000, 100000];

    if (typeof value === "number") {
      if (value < 0) {
        setAccSize(5000);
      } else {
        setAccSize(sizeArr[value]);
      }
    }
  };

  const handlePercentageChange = (
    event: Event,
    value: number | number[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    activeThumb: number
  ) => {
    setPercantage(Number(value));
  };

  return (
    <div className="sm:my-24 my-14 container mx-auto flex flex-col sm:gap-16 gap-4">
      <div className="flex flex-col gap-2 text-center">
        <Heading className="text-center">
          How much can you <GreenText>Earn with Us?</GreenText>
        </Heading>
        <SubHeading>
          Discover the potential to earn your desired income through trading
          without risking your own capital:
        </SubHeading>
      </div>

      <div className="sm:grid flex flex-col grid-cols-2 md:gap-0 sm:gap-10 gap-5 items-center justify-between">
        <div className="flex flex-col w-full mx-auto ss:gap-10 gap-5">
          <div className="flex flex-col items-center ss:gap-5 xs:gap-2">
            {/* <SilverText
              title={"Account Size"}
              className="sm:text-3xl xs:text-2xl text-xl"
            /> */}
            <Slider
              aria-label="accounts"
              className=" ml-1"
              defaultValue={1}
              getAriaValueText={valuetextAccSize}
              onChange={handleChangeAccSize}
              step={1}
              marks={marksAccSize}
              min={-0.1}
              max={5}
              valueLabelDisplay="off"
              sx={{
                color: "#00EDA1",
                width: "70%",
                height: "10px",

                "& .MuiSlider-valueLabel": {
                  background: "#4BFFC6",
                  color: "black",
                  //   transform: "translateY(50%) rotate(180deg)",
                },

                "& .MuiSlider-rail": {
                  color: "#59585B",
                },
                "& .MuiSlider-mark": {
                  paddingY: "5px",
                  paddingX: "2px",
                  color: "#2A4D42",
                },
                "& .MuiSlider-track": {
                  background:
                    "linear-gradient(90deg, #027F49 0%, #4BFFC6 100%)",
                },
                "& .MuiSlider-markLabel": {
                  color: "#FFFFFF",
                  fontSize: "16px",
                  paddingTop: "5px",
                },
                "& .MuiSlider-thumb": {
                  background:
                    "linear-gradient(180deg, #004426 0%, #00E97E 100%)",
                },
              }}
            />
          </div>

          <div className="flex flex-col items-center gap-10">
            {/* <SilverText
              title={"Profit Rate"}
              className="sm:text-3xl xs:text-2xl text-xl"
            /> */}
            <Slider
              aria-label="accounts"
              className="ml-1"
              defaultValue={10}
              max={40}
              getAriaValueText={valuetextPercentage}
              valueLabelDisplay="on"
              onChange={handlePercentageChange}
              valueLabelFormat={(value) => (
                <div className="font-circularMedium ">
                  {valuetextPercentage(value)}%
                </div>
              )}
              sx={{
                color: "#00EDA1",
                width: "70%",
                height: "10px",

                "& .MuiSlider-valueLabel": {
                  background: "#4BFFC6",
                  color: "black",
                  //   transform: "translateY(50%) rotate(180deg)",
                },

                "& .MuiSlider-rail": {
                  color: "#59585B",
                },
                "& .MuiSlider-mark": {
                  paddingY: "5px",
                  paddingX: "2px",
                  color: "#2A4D42",
                },
                "& .MuiSlider-track": {
                  background:
                    "linear-gradient(90deg, #027F49 0%, #4BFFC6 100%)",
                },
                "& .MuiSlider-markLabel": {
                  color: "#FFFFFF",
                  fontSize: "20px",
                  paddingTop: "5px",
                },
                "& .MuiSlider-thumb": {
                  background:
                    "linear-gradient(180deg, #004426 0%, #00E97E 100%)",
                },
              }}
            />
          </div>
        </div>

        <div className="relative sm:max-w-md sm:w-full mx-auto">
          <div className="absolute w-3/4 h-3/4 bg-pink/30 rounded-full blur-3xl z-0 -left-10 bottom-0"></div>
          <div className="absolute w-3/4 h-3/4 bg-blue/30 rounded-full blur-3xl z-0 -right-10 top-0"></div>

          <div className="sm:bg-earnBg bg-white/10 backdrop-filter backdrop-blur-3xl bg-opacity-10 sm:py-10 py-5 px-10 bg-cover bg-no-repeat rounded-3xl flex flex-col md:gap-5 gap-2 relative z-10 text-white">
            <div className="text-center lg:text-3xl md:text-2xl xs:text-xl text-lg font-circularBold z-10">
              Your total profit with <br /> 90% Profit Split.
            </div>
            <div className="border-b border-black/40"></div>
            <div className="text-center lg:text-7xl md:text-6xl xs:text-5xl text-4xl font-circularBold z-10">
              ${Math.floor(0.9 * ((percentage / 100) * accSize))}
              <span className="lg:text-3xl md:text-2xl xs:text-xl text-lg font-circularBold">
                /month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
