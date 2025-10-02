import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { User } from "lucide-react";
import MobileNav from "./MobileNav";
import Offerstrip from "./Offerstrip";

export const links = [
  { title: "Programs", href: "/#challenges" },
  { title: "Affiliate", href: "/affiliate" },
  // { title: "About Us", href: "/about-us" },
  { title: "FAQ", href: "/faqs" },
  { title: "Rules", href: "/rules" },
  { title: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20">
      <Offerstrip />
      <div className="mx-auto z-20 flex w-fulls items-center justify-between p-5 bg-[#060907]/40">
        <div className="pointer-events-none absolute inset-0 z-[1] h-[20vh] backdrop-blur-[0.0625px] [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
        <div className="pointer-events-none absolute inset-0 z-[2] h-[20vh] backdrop-blur-[0.125px] [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
        <div className="pointer-events-none absolute inset-0 z-[3] h-[20vh] backdrop-blur-[0.25px] [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
        <div className="pointer-events-none absolute inset-0 z-[4] h-[20vh] backdrop-blur-[0.5px] [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
        <div className="pointer-events-none absolute inset-0 z-[5] h-[20vh] backdrop-blur-[1px] [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
        <div className="pointer-events-none absolute inset-0 z-[6] h-[20vh] backdrop-blur-[2px] [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
        <div className="pointer-events-none absolute inset-0 z-[7] h-[20vh] backdrop-blur-[4px] [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>
        <div className="mx-auto flex w-full items-center justify-between  container">
          <Link className="z-[10]" href="/">
            <Image
              src={"/images/logo.svg"}
              alt={"logo"}
              width={183}
              height={32}
              className="sm:w-[183px] w-[150px]"
            />
          </Link>

          <div className="z-[10] md:flex hidden items-center gap-5">
            {links.map((item) => (
              <Link href={item.href} key={item.title} className="group">
                {item.title}
                <div className="group-hover:w-full w-0 mx-auto h-px duration-500 bg-[#00EDA1]" />
              </Link>
            ))}

            <Link
              href={"https://dashboard.empirefunded.com"}
              className={`${buttonVariants({
                className: "text-white font-bold",
              })}`}
              style={{
                background:
                  "linear-gradient(119.33deg, #00EDA1AD 1.78%, #005238 90.93%)",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Log In <User />
            </Link>
          </div>

          <div className="md:hidden flex">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
