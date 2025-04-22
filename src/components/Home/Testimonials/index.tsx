import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import { Marquee } from "./Marquee";

const reviews = [
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
  {
    name: "Karan Gupta",
    time: "16 Hours ago",
    title: "Great and fast answers to my questions",
    body: "Great and fast answers to my questions.Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(1, reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

export default function Testimonials() {
  return (
    <div className="container mx-auto text-center sm:my-24 my-14">
      <div className="text-[#40FF95] text-xl">Testimonials</div>

      <div className="flex flex-col items-center mt-2 gap-3">
        <Heading>
          <GreenText>Trust Us -</GreenText> You&apos;re In Safe Hands
        </Heading>

        <Image
          src={"/images/testimonials/t1.svg"}
          alt={"testinomials"}
          width={281}
          height={33}
          className="mt-2"
        />

        <div className="flex sm:flex-row flex-col gap-2 items-center">
          <span className="pt-1">Rated 4.8 / 5 based on 4,258 reviews on</span>
          <Image
            src={"/images/testimonials/t2.svg"}
            alt={"trustpilot"}
            width={104}
            height={24}
          />
        </div>
      </div>

      <div className="sm:flex hidden mt-14">
        <div className="relative flex gap-5 h-[500px] w-full flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {thirdRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
      </div>

      <div className="sm:hidden flex mt-5">
        <div className="relative flex gap-5 sm:h-[500px] h-full w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
      </div>
    </div>
  );
}

const ReviewCard = ({
  name,
  time,
  title,
  body,
}: {
  name: string;
  time: string;
  title: string;
  body: string;
}) => {
  return (
    <div className="bg-gradient-to-b from-white/20 to-black p-px rounded-xl sm:max-w-md xs:max-w-sm max-w-xs">
      <figure
        className={
          "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl p-5 flex flex-col gap-4 bg-[#030907]"
        }
      >
        <Image
          src={"/images/testimonials/stars.svg"}
          alt={"stars"}
          width={136}
          height={24}
        />

        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center gap-1">
            <figcaption className="text-sm font-medium dark:text-white">
              {name},
            </figcaption>
            <p className="text-xs pt-1 font-medium dark:text-white/40">
              {time}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-xl text-left text-light">
            {title}
          </div>
          <blockquote className="mt-1 text-left sm:text-base text-sm">
            {body}
          </blockquote>
        </div>
      </figure>
    </div>
  );
};
