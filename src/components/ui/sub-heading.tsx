import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function SubHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={cn(`text-light`, className)}>{children}</h2>;
}
