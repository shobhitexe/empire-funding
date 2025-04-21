"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FaqsContent } from "./FaqsContent";
import LastCTASection from "../LastCtaSection";

const tabNames = ["Accounts", "Withdrawals", "KYC"];

export default function FaqsSection() {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-col gap-5 container mx-auto">
      <div className="flex justify-center gap-5">
        {tabNames.map((item, idx) => (
          <Button
            key={item}
            variant={idx === tab ? "green" : "outline"}
            size={"xl"}
            onClick={() => setTab(idx)}
          >
            {item}
          </Button>
        ))}
      </div>

      <Accordion
        type="single"
        collapsible
        className="mt-5 max-w-7xl mx-auto w-full"
      >
        {FaqsContent[tab].map((item, idx) => (
          <AccordionItem
            key={item.que + idx}
            value={idx.toString()}
            className="bg-[#020B06] mt-4"
          >
            <AccordionTrigger>{item.que}</AccordionTrigger>
            <AccordionContent>{item.ans}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10" />

      <LastCTASection />
    </div>
  );
}
