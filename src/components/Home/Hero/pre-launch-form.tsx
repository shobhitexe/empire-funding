"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { SubmitForm } from "./submit-form-action";
import { toast } from "sonner";

export default function PrelaunchForm() {
  async function SubmitFormClient(formData: FormData) {
    try {
      const res = await SubmitForm(formData);

      if (res !== true) {
        toast("Failed to record email");
        return;
      }

      toast(
        <>
          Hey {formData.get("name")}, thanks for signing up. You have been
          successfully added to Empire Trading&apos;s launch list!
          <br />
          <br />
          Stay tuned for more exclusive offers! 💪🏻
        </>
      );
    } catch (error) {
      console.log(error);
      toast("Failed to record email, Please try later");
    }
  }

  return (
    <form
      action={SubmitFormClient}
      className="flex flex-col gap-5 max-w-md max-sm:mx-auto w-full"
    >
      <div className="grid w-full max-w-sms items-center gap-1.5">
        <Input required type="text" name="name" placeholder="Name" />
      </div>
      <div className="grid w-full max-w-sms items-center gap-1.5">
        <Input required type="email" name="email" placeholder="Email" />
      </div>

      <div className="bg-gradient-to-bl p-px from-[#00FF99]/50 via-[#000000] via-80% to-[#000000] w-fit max-sm:mx-auto rounded-2xl">
        <Button className="w-fit text-lg bg-[#001B0C] text-[#59D28F] hover:bg-[#001B0C]/80 sm:h-14 h-12 has-[>svg]:sm:px-36 has-[>svg]:px-10 cursor-pointer rounded-2xl">
          Join Empire <ArrowRight className="sm:w-12 w-7 h-12" />
        </Button>
      </div>
    </form>
  );
}
