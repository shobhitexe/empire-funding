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
    <h1 className={cn(`sm:text-5xl text-4xl font-semibold px-5`, className)}>
      {children}
    </h1>
  );
}
