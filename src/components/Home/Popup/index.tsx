"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SubmitForm } from "../Hero/submit-form-action";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  async function SubmitFormClient(formData: FormData) {
    try {
      const res = await SubmitForm(formData);

      if (res !== true) {
        toast.error("Failed to record email");
        return;
      }

      toast.success(
        <>
          Hey, you&apos;ve successfully entered the giveaway, keep a look at
          your emails to claim when you win!
        </>
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to record email, Please try later");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle />
        <Image
          src={"/images/gift.png"}
          alt={"gift"}
          width={200}
          height={200}
          className="mx-auto scale-75"
        />

        <div className="text-center relative -top-6">
          <div className="font-bold text-4xl">GET 10% OFF</div>
          <div className="text-[#10B981] font-semibold">
            and get a chance to win $100K account
          </div>
        </div>

        <form action={SubmitFormClient} className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1">
            <Input required type="text" name="name" placeholder="Name" />
          </div>

          <div className="grid w-full items-center gap-1">
            <Input required type="email" name="email" placeholder="Email" />
          </div>

          <Button variant={"green"} size={"xl"} className="w-full mt-3">
            Claim Your Offer
          </Button>
        </form>

        <div className="text-[#94A3B8B2] text-sm text-center mt-4">
          By submitting, you agree to our terms and conditions. Offer valid for
          new customers only.
        </div>
      </DialogContent>
    </Dialog>
  );
}
