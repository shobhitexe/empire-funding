"use client";

import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
// import { PlayCircle } from "lucide-react";

const testimonials = [
  {
    videoSrc: "https://www.youtube.com/embed/lnq29XE2RIE",
  },
  {
    title: "Janet McLean",
    desc: "The 24/7 Discord support makes me feel like I have a full-time team behind me. And the other traders are great people. The Empire is just such a positive environment where you want to thrive.",
    name: "Robert Lacok",
    position: "Crypto Swing Trader",
  },
  {
    title: "Always There for You",
    desc: "I traded stocks successfully thanks to the support of Empire Funded's Discord community. They literally never leave you hanging—like one time I forgot my dashboard password and within seconds they helped me fix the issue.",
    name: "Vanya Rege",
    position: "Technical Analyst",
  },
  {
    videoSrc: "https://www.youtube.com/embed/Mg2wW9TIQuk",
  },
  {
    videoSrc: "https://www.youtube.com/embed/Nbw-terhXwg",
  },
  {
    title: "Fast & Trustworthy Payouts",
    desc: "I chose Empire Funded because: #1 Best support team in the industry, #2 48-hour payouts or they give you $2500, #3 They haven’t denied a single payout, according to multiple Reddit users. I haven’t requested mine yet but will soon.",
    name: "Dr Russell Andrews",
    position: "Forex Scalper",
  },
  {
    title: "Smarter Trading with AI",
    desc: "The AI trader dashboard alerts help me spot mistakes early in the challenge so I can become a better trader faster. Yes, it helps you pass the challenge, but it also makes you a better trader so Empire will want to work with you and make you a Spartan trader.",
    name: "Lavanya Sabharwal",
    position: "Full-time Trader",
  },
  {
    videoSrc: "https://www.youtube.com/embed/_FSUTRY81zU",
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
                {/* <video
                  className="w-full h-full object-cover"
                  src={item.videoSrc}
                  muted
                  loop
                  playsInline
                /> */}
                <iframe
                  src={item.videoSrc}
                  // title="JohnTestimonial"
                  width={"200px"}
                  height={"400px"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="w-full h-full object-cover"
                ></iframe>
                {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <PlayCircle className="w-14 h-14 text-white" />
                </div> */}
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
