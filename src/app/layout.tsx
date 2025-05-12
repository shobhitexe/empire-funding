import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import Image from "next/image";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empire Trading",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Toaster />

        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '23936770399281696');
          fbq('track', 'PageView');`,
          }}
        ></Script>

        <noscript>
          <Image
            height="1"
            width="1"
            alt="fb"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=23936770399281696&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
