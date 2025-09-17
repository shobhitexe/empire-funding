import Image from "next/image";

const stats = [
  { title: "Paid to Traders", stat: "600" },
  { title: "Traders", stat: "8" },
  { title: "Countries Served", stat: "130" },
];

export default function StatsAndPayouts() {
  return (
    <div className="container mx-auto px-5 rounded-2xl sm:pt-16 pt-10">
      <div
        style={{ boxShadow: "0px -65px 142.9px 0px #003d1b59 inset" }}
        className="grid md:grid-cols-5 grid-cols-3 gap-5 items-center p-10 rounded-2xl border border-white/10"
      >
        {stats.map((item, idx) => (
          <div key={item.title} className="flex flex-col items-center">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90.98deg, #4B5374 -14.65%, #FFFFFF 50.11%, #4B5374 114.88%)",
              }}
              className="text-transparent bg-clip-text font-bold sm:text-5xl text-2xl"
            >
              <div>
                {idx === 0 ? "$" : ""}
                {item.stat}
                {/* <NumberTicker value={Number(item.stat)} /> */}
                {idx === 0 ? "k+" : idx === 1 ? "k" : "+"}
              </div>
            </div>
            <div className="sm:text-base text-sm whitespace-nowrap">
              {item.title}
            </div>
          </div>
        ))}

        <div className="col-span-3 sm:col-span-2 flex justify-around gap-4">
          <Image
            src="/images/payouts/bst.png"
            alt="best-prop"
            width={212}
            height={106}
            className="sm:w-[160px] w-[120px]"
          />
          <Image
            src="/images/payouts/fp.png"
            alt="faster-payouts"
            width={212}
            height={106}
            className="sm:w-[160px] w-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
