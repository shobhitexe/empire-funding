"use client";

import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import { PlayCircle } from "lucide-react";

const testimonials = [
  {
    videoSrc: "/videos/vid1.mp4",
  },
  {
    title: "Outstanding Support",
    desc: "“EmpireFunded is the best affiliate program I've joined. What sets them apart is the direct access to the team and broker owners. The onboarding process was seamless, and my account manager constantly helps optimize my campaigns. I've doubled my ROI since joining!”",
    name: "Robert Lacok",
    position: "Full-time Trader",
  },
  {
    title: "High Earnings Potential",
    desc: "“I've had issues with delayed payments at other programs, but EmpireFunded is always on time, every week. The transparency in tracking commissions and ROI is fantastic, and the payouts are the highest I've seen in the forex industry. This program is a must for affiliates looking for reliable income.”",
    name: "Robert Lacok",
    position: "Full-time Trader",
  },
  {
    videoSrc: "/videos/vid2.mp4",
  },
  {
    videoSrc: "/videos/vid3.mp4",
  },
  {
    title: "Reliable Payments",
    desc: "“I've had issues with delayed payments at other programs, but EmpireFunded is always on time, every week...”",
    name: "Robert Lacok",
    position: "Full-time Trader",
  },
  {
    title: "Unmatched Commission Rates",
    desc: "“EmpireFunded is always on time, every week. The payouts are the highest I've seen in the forex industry.”",
    name: "Robert Lacok",
    position: "Full-time Trader",
  },
  {
    videoSrc: "/videos/vid4.mp4",
  },
];

export default function SuccessStories() {
  return (
    <div className="container mx-auto flex flex-col gap-10 px-5 py-12">
      <div className="text-center space-y-2">
        <Heading>
          Traders <GreenText>Success Stories</GreenText>
        </Heading>
        <SubHeading>
          Discover the potential to earn your desired income through trading
          without risking your own capital:
        </SubHeading>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid rounded-xl bg-[#0A1F19] text-white p-2"
          >
            {item.videoSrc ? (
              <div className="relative rounded-xl overflow-hidden aspect-[9/12] bg-black/40 mb-4">
                <video
                  className="w-full h-full object-cover"
                  src={item.videoSrc}
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <PlayCircle className="w-14 h-14 text-white" />
                </div>
              </div>
            ) : (
              <div className="p-2 h-full min-h-fulls min-h-[250px]">
                <div className="text-lg font-semibold">{item.title}</div>
                <p className="text-sm text-[#BCD5C7] mt-2">{item.desc}</p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="size-10 bg-white rounded-full" />
                  <div>
                    <div className="text-[#A4FFCD] font-semibold">
                      {item.name}
                    </div>
                    <div className="text-[#BCD5C7] text-sm">
                      {item.position}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
