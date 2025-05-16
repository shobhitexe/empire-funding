import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LastCTASectionContactUs() {
  return (
    <div
      className="container sm:w-full w-[90%] mx-auto text-center sm:h-[500px] flex flex-col items-center justify-center sm:gap-10 gap-5 sm:my-10 my-5 py-10 rounded-3xl"
      style={{
        backgroundImage: "url('/images/lastsection.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center md:text-6xl sm:text-5xl text-4xl font-semibold gap-1">
        <span>Ready to Elevate Your</span>
        <span className="text-[#39FF9C]">Trading?</span>
      </div>

      <div className="md:text-xl sm:text-lg text-base max-w-2xl px-5">
        Level up with our flexible funding programs and supportive community.
        Claim your edge in the markets today.
      </div>

      <Button variant={"green"} size={"xl"} asChild>
        <Link href={`/#challenges`}>
          Get Funded <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
