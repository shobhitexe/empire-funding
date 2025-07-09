import {
  AccountConfig,
  BestTraders,
  FaqsHome,
  Hero,
  LastCTASection,
  MultipleAssets,
  // PayoutTicker,
  Popup,
  ProfitCalculator,
  // Testimonials,
  TopRatedFirm,
  TradingPlatform,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <PayoutTicker /> */}
      <MultipleAssets />
      <TradingPlatform />
      <AccountConfig />
      <TopRatedFirm />
      <ProfitCalculator />
      <BestTraders />
      {/* <Testimonials /> */}
      <FaqsHome />
      <LastCTASection />
      <Popup />
    </main>
  );
}
