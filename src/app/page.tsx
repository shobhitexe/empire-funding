import {
  BestTraders,
  Hero,
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
      <TopRatedFirm />
      <BestTraders />
      <Testimonials />
    </main>
  );
}
