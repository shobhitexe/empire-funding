"use client";

import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
// import { PlayCircle } from "lucide-react";

const testimonials = [
  {
    videoSrc: "https://www.youtube.com/embed/lnq29XE2RIE",
    title: "My Empire Funded Journey",
    name: "Video Testimonial",
    position: "",
  },
  {
    title: "From Odd Jobs to Full-Time Trader",
    desc: "I was doing odd jobs when I found Empire Funded. Passed the challenge in three weeks, got my first payout in five days, and booked a Cape Town trip. Now I trade full-time. Fast payouts helped me turn everything around.",
    name: "John",
    position: "Crypto Swing Trader",
  },
  {
    title: "Funded When I Had Nothing",
    desc: "I was waiting tables to pay rent and felt stuck. A friend introduced me to forex, but I had no capital - until I found Empire Funded's instant account. Made profit fast, got paid in 24 hours, and went full-time trading.",
    name: "Sofia",
    position: "Technical Analyst",
  },
  {
    videoSrc: "https://www.youtube.com/embed/Mg2wW9TIQuk",
    title: "Breaking Barriers with Empire Funded",
    name: "Video Testimonial",
    position: "",
  },
  {
    videoSrc: "https://www.youtube.com/embed/Nbw-terhXwg",
    title: "How Funding Changed My Life",
    name: "Video Testimonial",
    position: "",
  },
  {
    title: "Clean Tools, Fast Payouts, Real Growth",
    desc: "I'm 22 and got funded in three weeks. The dashboard's clean, shows everything clearly, and the journaling plus AI helped me improve fast. I’ve already received two payouts, with a third on the way. Super smooth, reliable experience so far.",
    name: "Omar",
    position: "Forex Scalper",
  },
  {
    title: "From Engineer to Funded Trader",
    desc: "I was stuck in a 9-to-6 engineering job with no real capital. Joined Empire Funded, passed in under a month, and got my first payout two weeks later. Paid off student loans, treated my family, and now trade full-time. Life-changing.",
    name: "Arjun",
    position: "Full-time Trader",
  },
  {
    videoSrc: "https://www.youtube.com/embed/_fFZTfmDkRU",
    title: "Real Stories, Real Results",
    name: "Video Testimonial",
    position: "",
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
