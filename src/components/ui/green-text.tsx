import { ReactNode } from "react";

export default function GreenText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        backgroundImage: "linear-gradient(90deg, #39FF9C 0%, #A5FFCD 100%)",
      }}
      className="text-transparent bg-clip-text w-fit"
    >
      {children}
    </span>
  );
}
