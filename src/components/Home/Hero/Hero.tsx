import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";

const paymentMethods = [
  { src: "/images/hero/visa.png", alt: "visa" },
  { src: "/images/hero/mastercard.png", alt: "mastercard" },
  { src: "/images/hero/bitcoin.png", alt: "bitcoin" },
  { src: "/images/hero/eth.png", alt: "eth" },
  { src: "/images/hero/usdt.png", alt: "usdt" },
  { src: "/images/hero/upi.png", alt: "upi" },
];

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/hero/bg.avif')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="sm:bg-center bg-left"
    >
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 sm:py-28 py-16 px-5">
        <div className="flex flex-col sm:gap-5 gap-4">
          <div className="flex sm:flex-row flex-col-reverse items-center gap-2">
            <div
              className="bg-black rounded-full w-fit max-sm:mx-auto px-5 py-2 relative sm:text-base text-sm"
              style={{
                background:
                  "radial-gradient(at center top, #007937AD -40%, #0E0E0E 60%)",
              }}
            >
              <div className="absolute inset-x-0 w-full h-px -top-px bg-gradient-to-r from-[#66666600] via-[#00FF99] to-[#66666600]" />
              <span className="font-semibold">#1 Fastest</span> Growing Prop
              Firm
            </div>

            <div
              className="bg-black rounded-full w-fit max-sm:mx-auto px-5 py-2 relative sm:text-base text-sm flex items-center gap-2"
              style={{
                background:
                  "radial-gradient(at center top, #007937AD -40%, #0E0E0E 60%)",
              }}
            >
              <div className="absolute inset-x-0 w-full h-px -top-px bg-gradient-to-r from-[#66666600] via-[#00FF99] to-[#66666600]" />
              <Image
                src={"/images/mt5.png"}
                alt={"mt5"}
                width={20}
                height={20}
              />{" "}
              MT5 Available
            </div>

            <div
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="5419b732fbfb950b10de65e5"
              data-businessunit-id="6861f3966deaf67934e504cd"
              data-style-height="24px"
              data-style-width="100%"
              data-theme="dark"
            >
              <a
                href="https://www.trustpilot.com/review/empirefunded.com"
                target="_blank"
                rel="noopener"
              >
                Trustpilot
              </a>
            </div>
          </div>

          <div className="md:text-7xl sm:text-6xl xs:text-5xl text-4xl font-bold flex flex-col sm:items-start items-center max-sm:text-center">
            <h1>We Don&apos;t Just Fund Traders.</h1>
            <h1
              className="w-fit text-transparent bg-clip-text pb-1"
              style={{
                backgroundImage:
                  "linear-gradient(164.43deg, #50FFCA 53.05%, #006C43 96.81%)",
              }}
            >
              We Build Empires.
            </h1>
          </div>

          <p className="sm:text-xl xs:text-base text-sm max-w-xl font-light sm:text-left text-center">
            Join the firm that&apos;s flipping the script - with next-day
            payouts, no nonsense rules, and real trader support.
          </p>

          <Link
            href={`/#challenges`}
            className="bg-gradient-to-bl p-px from-[#00FF99]/50 via-[#000000] via-80% to-[#000000] w-fit max-sm:mx-auto rounded-2xl"
          >
            <Button className="w-fit text-lg bg-[#001B0C] text-[#59D28F] hover:bg-[#001B0C]/80 sm:h-14 h-12 has-[>svg]:sm:px-36 has-[>svg]:px-10 cursor-pointer rounded-2xl">
              Get Funded Now <ArrowRight className="sm:w-12 w-7 h-12" />
            </Button>
          </Link>

          <div className="flex items-center sm:justify-start justify-center gap-2 max-sm:mt-2">
            {paymentMethods.map((item) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={60}
                height={60}
                className="sm:w-[70px] w-[60px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
