import { ContactUsForm, LastCTASectionContactUs } from "@/components";
import GreenText from "@/components/ui/green-text";

// const Data = [
//   { title: "Aofei Jwfj", sub: "sadasdasdasd awdasefefs" },
//   { title: "Joia Hunfw", sub: "sadasdasdasd awdasefefs" },
//   { title: "SADSD EFSAe", sub: "sadasdasdasd awdasefefs" },
// ];

export default function page() {
  return (
    <div className="container mx-auto px-5">
      <div className="text-center flex items-center justify-center flex-col gap-2 sm:py-20 py-10">
        <div className="flex items-center gap-1 md:text-6xl sm:text-5xl text-4xl font-semibold">
          <GreenText>Contact</GreenText> <div>Us</div>
        </div>
        <div className="font-light text-light max-w-3xl md:text-xl sm:text-lg text-base">
          Curious about Empire Funded or ready to seize new opportunities?
          We&apos;re here to help. Our dedicated team is eager to assist you on
          your journey to prop trading success.{" "}
        </div>
      </div>

      {/* <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center sm:gap-2 gap-5">
        <ContactUsForm />

        <div className="max-sm:px-5">
          <div>
            <div className="sm:text-3xl text-2xl font-semibold">
              Get in Touch
            </div>
            <div className="max-w-md sm:text-base text-sm">
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
                  className="sm:w-[80px] xs:w-[60px] w-[50px]"
                />

                <div>
                  <div className="sm:text-xl text-lg font-semibold">
                    {item.title}
                  </div>
                  <div className="font-light text-light sm:text-base text-sm">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <ContactUsForm />

      <LastCTASectionContactUs />
    </div>
  );
}
