import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";

const paymentMethods = [
  { src: "/images/hero/visa.png", alt: "visa" },
  { src: "/images/hero/mastercard.png", alt: "mastercard" },
  { src: "/images/hero/bitcoin.png", alt: "bitcoin" },
  { src: "/images/hero/eth.png", alt: "eth" },
  { src: "/images/hero/usdt.png", alt: "usdt" },
];

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/hero/bg.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto grid grid-cols-2 py-28">
        <div className="flex flex-col gap-5">
          <div
            className="bg-black rounded-full w-fit px-5 py-2 relative"
            style={{
              background:
                "radial-gradient(at center top, #007937AD -40%, #0E0E0E 60%)",
            }}
          >
            <div className="absolute inset-x-0 w-full h-px -top-px bg-gradient-to-r from-[#66666600] via-[#00FF99] to-[#66666600]" />
            <span className="font-semibold">#1 Top</span> Rated PropFirm
          </div>

          <div className="md:text-7xl xs:text-6xl text-5xl font-semibold">
            <h1>Rule the Markets,</h1>
            <h1
              className="w-fit text-transparent bg-clip-text pb-1"
              style={{
                backgroundImage:
                  "linear-gradient(164.43deg, #50FFCA 53.05%, #006C43 96.81%)",
              }}
            >
              Fund your Empire.
            </h1>
          </div>

          <p className="text-xl max-w-xl font-light">
            Step into seamless funding, innovative tools, and fast
            payouts—backed by a thriving community to spark your empire&apos;s
            rise.
          </p>

          <div className="bg-gradient-to-bl p-px from-[#00FF99]/50 via-[#000000] via-80% to-[#000000] w-fit rounded-2xl">
            <Button className="w-fit text-lg bg-[#001B0C] text-[#59D28F] hover:bg-[#001B0C]/80 h-14 has-[>svg]:px-36 cursor-pointer rounded-2xl">
              Start Trading <ArrowRight className="w-12 h-12" />
            </Button>
          </div>

          <div className="flex items-center max-sm:justify-center gap-2 max-sm:mt-2">
            {paymentMethods.map((item) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={60}
                height={60}
                className="xs:w-[70px] w-[60px]"
              />
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
