import {
  AccountConfig,
  BestTraders,
  FaqsHome,
  Hero,
  LastCTASection,
  MultipleAssets,
  PayoutTicker,
  // Popup,
  ProfitCalculator,
  StatsAndPayouts,
  SuccessStories,
  Testimonials,
  TopRatedFirm,
  TradingPlatform,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <PayoutTicker />
      <StatsAndPayouts />
      <MultipleAssets />
      <TradingPlatform />
      <AccountConfig />
      <TopRatedFirm />
      <SuccessStories />
      <ProfitCalculator />
      <BestTraders />
      <Testimonials />
      <FaqsHome />
      <LastCTASection />
      {/* <Popup /> */}
    </main>
  );
}
