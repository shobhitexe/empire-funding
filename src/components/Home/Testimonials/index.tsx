import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="container mx-auto text-center my-20">
      <div className="text-[#40FF95] text-xl">Testimonials</div>

      <div className="flex flex-col items-center mt-2 gap-2">
        <Heading>
          <GreenText>Trust Us -</GreenText> You&apos;re In Safe Hands
        </Heading>

        <Image
          src={"/images/testimonials/t1.svg"}
          alt={"testinomials"}
          width={281}
          height={33}
          className="mt-2"
        />
      </div>
    </div>
  );
}
