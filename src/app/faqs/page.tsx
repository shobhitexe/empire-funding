import { FaqsSection } from "@/components";
import GreenText from "@/components/ui/green-text";

export default function page() {
  return (
    <div className="container mx-auto">
      <div className="text-center flex items-center justify-center flex-col gap-2 pt-20 pb-10">
        <div className="flex items-center gap-1 text-6xl font-semibold">
          <div>Frequently Asked</div>
          <GreenText>Questions</GreenText>
        </div>
        <div className="font-light text-light max-w-3xl text-xl">
          I know... just like you many traders have these questions, so here are
          the answers!
        </div>
      </div>

      <FaqsSection />
    </div>
  );
}
