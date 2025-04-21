import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function LastCTASectionContactUs() {
  return (
    <div
      className="container mx-auto text-center h-[500px] flex flex-col items-center justify-center gap-10 my-10 rounded-3xl"
      style={{
        backgroundImage: "url('/images/lastsection.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center text-6xl font-semibold gap-1">
        <span>Ready to Elevate Your</span>
        <span className="text-[#39FF9C]">Trading?</span>
      </div>

      <div className="text-xl max-w-2xl">
        Level up with our flexible funding programs and supportive community.
        Claim your edge in the markets today.
      </div>

      <Button variant={"green"} size={"xl"}>
        Get Funded <ArrowRight />
      </Button>
    </div>
  );
}
