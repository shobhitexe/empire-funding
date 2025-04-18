import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        `md:text-4xl sm:text-3xl text-2xl font-semibold`,
        className
      )}
    >
      {children}
    </h1>
  );
}
