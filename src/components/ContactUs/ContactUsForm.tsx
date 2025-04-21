import { Button } from "../ui/button";

export default function ContactUsForm() {
  return (
    <div className="bg-[#01110B80] p-5 rounded-2xl flex flex-col gap-5 max-w-xl mx-auto">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">Leave a Message</div>
        <div className="font-light text-light">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sedeius tempor
          incididunt dolore magna aliqua.
        </div>
      </div>

      <input
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        placeholder="Your Name"
      />

      <input
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        placeholder="Your Email"
      />

      <input
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        placeholder="Your Subject"
      />

      <textarea
        rows={5}
        cols={5}
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        placeholder="Your Message"
      />

      <Button size={"xl"} variant={"green"} className="w-full mt-5">
        Submit
      </Button>
    </div>
  );
}
