import { ContactUsForm, FaqsHome, LastCTASectionContactUs } from "@/components";
import GreenText from "@/components/ui/green-text";
import Image from "next/image";

const Data = [
  { title: "Aofei Jwfj", sub: "sadasdasdasd awdasefefs" },
  { title: "Joia Hunfw", sub: "sadasdasdasd awdasefefs" },
  { title: "SADSD EFSAe", sub: "sadasdasdasd awdasefefs" },
];

export default function page() {
  return (
    <div className="container mx-auto">
      <div className="text-center flex items-center justify-center flex-col gap-2 py-20">
        <div className="flex items-center gap-1 text-6xl font-semibold">
          <GreenText>Contact</GreenText> <div>Us</div>
        </div>
        <div className="font-light text-light max-w-3xl">
          Curious about Blueberry Funded or ready to seize new opportunities?
          We&apos;re here to help. Our dedicated team is eager to assist you on
          your journey to prop trading success.{" "}
        </div>
      </div>

      <div className="grid grid-cols-2 items-center justify-center gap-2">
        <ContactUsForm />

        <div>
          <div>
            <div className="text-3xl font-semibold">Get in Touch</div>
            <div className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sedeius
              tempor incididunt dolore magna aliqua.
            </div>
          </div>

          <div className="flex flex-col gap-7 mt-5">
            {Data.map((item) => (
              <div key={item.title} className="flex items-center gap-2">
                <Image
                  src={"/images/dollar.svg"}
                  alt={"dollar"}
                  width={80}
                  height={80}
                />

                <div>
                  <div className="text-xl font-semibold">{item.title}</div>
                  <div className="font-light text-light">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FaqsHome />

      <LastCTASectionContactUs />
    </div>
  );
}
