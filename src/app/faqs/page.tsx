import { FaqsSection, LastCTASection } from "@/components";
import GreenText from "@/components/ui/green-text";

export default function page() {
  return (
    <div className="container mx-auto">
      <div className="text-center flex items-center justify-center flex-col gap-2 sm:pt-20 mt-10 pb-10">
        <div className="flex sm:flex-row flex-col items-center gap-1 md:text-6xl sm:text-5xl text-4xl font-semibold">
          <div>Frequently Asked</div>
          <GreenText>Questions</GreenText>
        </div>
        <div className="font-light text-light max-w-3xl md:text-xl sm:text-lg text-base">
          I know... just like you many traders have these questions, so here are
          the answers!
        </div>
      </div>

      <FaqsSection />
      <div className="sm:mt-10 mt-5" />

      <LastCTASection />
    </div>
  );
}
