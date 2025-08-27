import Link from "next/link";
import { Button } from "../ui/button";

export default function LastCTASection() {
  return (
    <div
      className="container sm:w-full w-[90%] mx-auto text-center sm:h-[500px] h-[400px] flex flex-col items-center justify-center gap-10 sm:my-10 my-7 rounded-3xl"
      style={{
        backgroundImage: "url('/images/section.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center md:text-6xl sm:text-5xl text-4xl font-semibold gap-1 px-5">
        <span>Join thousands of Traders</span>
        <span className="text-[#39FF9C]">around the world</span>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3">
        <Button variant={"green"} size={"xl"} asChild>
          <Link href={`/#challenges`}>Get Funded</Link>
        </Button>
        {/* <Button size={"xl"} asChild>
          <Link
            href={"https://app.empiretrading.co/login"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Demo
          </Link>
        </Button> */}

        <Button size={"xl"} variant={"secondary"} asChild>
          <Link
            href={"https://discord.gg/kC8ZktPJ"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </Link>
        </Button>
      </div>
    </div>
  );
}
