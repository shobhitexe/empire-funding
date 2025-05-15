import {
  AccountConfig,
  BestTraders,
  FaqsHome,
  Hero,
  LastCTASection,
  MultipleAssets,
  PayoutTicker,
  Testimonials,
  TopRatedFirm,
  TradingPlatform,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <PayoutTicker />
      <MultipleAssets />
      <TradingPlatform />
      <AccountConfig />
      <TopRatedFirm />
      <BestTraders />
      <Testimonials />
      <FaqsHome />
      <LastCTASection />
    </main>
  );
}
