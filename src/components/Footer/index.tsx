import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLinks = [
  {
    heading: "TRADING",
    sub: [
      {
        title: "Affiliate",
        link: `/affiliate`,
      },
      {
        title: "Login",
        link: "https://app.empiretrading.co/login",
        target: "_blank",
      },
    ],
  },
  {
    heading: "INFORMATION",
    sub: [
      { title: "About Us", link: "/about-us" },
      { title: "FAQ", link: "/faqs" },
      { title: "Rules", link: "/rules" },
      { title: "Contact", link: `/contact-us` },
    ],
  },
  {
    heading: "SOCIALS",
    sub: [
      {
        title: "Instagram",
        link: "https://www.instagram.com/empiretrading_official",
        target: "_blank",
      },
      {
        title: "Discord",
        link: "",
        target: "_blank",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div
      className="bg-[#020B06] md:p-20 sm:p-10 p-5 pb-10 flex flex-col gap-10 mt-20 relative"
      style={{
        background:
          "radial-gradient(at bottom left, #007937AD -40%, #0E0E0E 60%)",
      }}
    >
      <div className="flex md:flex-row flex-col md:gap-5 gap-10 items-start justify-between">
        <div className="flex flex-col gap-5">
          <Image
            src={"/images/logo.svg"}
            alt={"logo"}
            width={200}
            height={120}
          />

          <div className="flex flex-col gap-3">
            <div className="text-white/90 text-sm">
              {`Trade boldly. Build your empire.`}
            </div>

            <Link
              href={""}
              className="text-sm flex items-center gap-2 bg-[#151515] hover:bg-red duration-500 py-2 px-5 rounded-xl w-fit mt-10"
            >
              support@empire.com
            </Link>
          </div>
        </div>

        <div className="flex sm:gap-20 gap-10 flex-wrap">
          {FooterLinks.map((footer) => (
            <div key={footer.heading} className="flex flex-col gap-2">
              <div>{footer.heading}</div>
              <div className="flex flex-col gap-2">
                {footer.sub.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="text-white/50 hover:text-white/90 duration-200"
                    target={item.target}
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-white/20" />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between text-sm">
          <div>© 2025 Empire Funding Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-2">
            <Link
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-white/50 sm:text-sm text-xs">
          {`Empire Funding is an education and evaluation company that does not collect customer deposits or offer financial services to customers. All accounts provided to customers are in a virtual environment with virtual money.`}
          <br />
          <br />
          {`All information provided on this website is for educational purposes only in the area of financial market trading and does not serve in anyway as specific investment recommendations, trading recommendations, analysis of investment opportunities or similar general recommendations regarding the trading of investment instruments. The Company does not provide investment services within the meaning of MIFID II The Company is not a licensed investment services provider (securities broker-dealer) within the meaning of MIFID II All trading on the platform made available as part of the services provided by the Company, although it may be based on real trading data and simulates real trading, is only notional trading on a demo account. In this sense, i.e. that it is fictitious trading on fictitious accounts, terms such as “trading” or “trader” should also be understood and should not be given the meanings they have in the context of real trading.`}
          <br />
          <br />
          {`The technical solution offered in the form of platforms made available as part of the services offered by the Company (i.e. platforms for fictitious trading on demo accounts) uses third party services. The website is operated and owned by the Company and all content is copyrighted by the Company.`}

          <br />
          <br />
          {`Restricted countries: Pakistan, Iran, Syria, Myanmar, Bangladesh, Vietnam, North Korea, the Russian Federation, the Republic of Belarus, Cuba, Lebanon, Libya, Sudan, Crimea, Donetsk and Luhansk regions of Ukraine, United Arab Emirates.`}
        </div>
      </div>
    </div>
  );
}
