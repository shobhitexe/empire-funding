import { Button } from "../ui/button";

export default function LastCTASection() {
  return (
    <div
      className="container mx-auto text-center h-[500px] flex flex-col items-center justify-center gap-10 rounded-3xl"
      style={{
        backgroundImage: "url('/images/section.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center text-6xl font-semibold gap-1">
        <span>Let&apos;s join with millions of</span>
        <span className="text-[#39FF9C]">Traders in the world</span>
      </div>

      <div className="flex items-center gap-3">
        <Button variant={"green"} size={"xl"}>
          Get Funded
        </Button>
        <Button size={"xl"}>Try Demo</Button>
      </div>
    </div>
  );
}
