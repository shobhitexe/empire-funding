import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FaqsHome() {
  return (
    <div className="sm:my-28 my-16 container mx-auto flex flex-col sm:gap-5 gap-3 px-5">
      <div className="flex flex-col gap-2 text-center">
        <Heading>
          Frequently Asked <GreenText>Questions</GreenText>
        </Heading>
        <SubHeading>
          I know... just like you many traders have these questions, so here are
          the answers!
        </SubHeading>
      </div>

      <Button size={"xl"} variant={"green"} asChild className="w-fit mx-auto">
        <Link href={"/faqs"}>See FAQ</Link>
      </Button>
    </div>
  );
}
