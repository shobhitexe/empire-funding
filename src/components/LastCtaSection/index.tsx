import Link from "next/link";
import { Button } from "../ui/button";

export default function LastCTASection() {
  return (
    <div
      className="container sm:w-full w-[90%] mx-auto text-center sm:h-[500px] xs:h-[400px] h-[350px] flex flex-col items-center justify-center gap-10 sm:my-10 my-7 rounded-3xl"
      style={{
        backgroundImage: "url('/images/section.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center md:text-6xl sm:text-5xl text-4xl font-semibold gap-1 px-5">
        <span>Let&apos;s join with millions of</span>
        <span className="text-[#39FF9C]">Traders in the world</span>
      </div>

      <div className="flex items-center gap-3">
        <Button variant={"green"} size={"xl"} asChild>
          <Link href={`/#challenges`}>Get Funded</Link>
        </Button>
        <Button size={"xl"} asChild>
          <Link
            href={"https://app.empiretrading.co/login"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Demo
          </Link>
        </Button>
      </div>
    </div>
  );
}
