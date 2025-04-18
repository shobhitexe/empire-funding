import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = [
  {
    que: "What Is For Traders?",
    ans: "To win the game, you need strong support and diligent preparation. Join For Traders Community.",
  },
  {
    que: "Why Should I Choose For Traders?",
    ans: "To win the game, you need strong support and diligent preparation. Join For Traders Community.",
  },
  {
    que: "What Is a Trading Challenge?",
    ans: "To win the game, you need strong support and diligent preparation. Join For Traders Community.",
  },
  {
    que: "What Is the Leverage?",
    ans: "To win the game, you need strong support and diligent preparation. Join For Traders Community.",
  },
  {
    que: "What Is the Leverage?",
    ans: "To win the game, you need strong support and diligent preparation. Join For Traders Community.",
  },
];

export default function FaqsHome() {
  return (
    <div className="my-28 container mx-auto flex flex-col gap-5">
      <div className="flex flex-col gap-2 text-center">
        <Heading>
          Frequently Asked <GreenText>Questions</GreenText>
        </Heading>
        <SubHeading>
          I know... just like you many traders have these questions, so here are
          the answers!
        </SubHeading>
      </div>

      <Accordion
        type="single"
        collapsible
        className="mt-5 max-w-7xl mx-auto w-full"
      >
        {Faqs.map((item, idx) => (
          <AccordionItem
            key={item.que + idx}
            value={idx.toString()}
            className="bg-[#020B06] mt-4"
          >
            <AccordionTrigger>{item.que}</AccordionTrigger>
            <AccordionContent>{item.ans}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
