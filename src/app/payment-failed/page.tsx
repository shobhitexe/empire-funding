import { buttonVariants } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="sm:mt-20 mt-10 px-5">
      <div
        className="flex max-w-sm w-full mx-auto p-10 rounded-xl flex-col items-center justify-center gap-4"
        style={{
          background:
            "linear-gradient(47.01deg, rgba(16, 185, 129, 0.16) 0%, rgba(52, 211, 153, 0.08) 50%, rgba(5, 150, 105, 0.16) 100%)",
        }}
      >
        {/* <Image src={"/images/tick.svg"} alt={"tick"} width={150} height={150} /> */}

        <X className="size-36 bg-red-500 rounded-full p-5" />

        <div className="flex flex-col items-start justify-center gap-4">
          <div className="font-bold text-2xl">Oops!</div>
          <div>Something went wrong.</div>
          <div className="text-sm text-muted-foreground">
            If any amount was debited, please contact support.
          </div>
          <Link href={"/"} className={`${buttonVariants({})}`}>
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
