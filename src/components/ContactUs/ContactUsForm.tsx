"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function ContactUsForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:support@empiretrading.co?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#01110B80] p-5 rounded-2xl flex flex-col gap-5 max-w-xl mx-auto"
    >
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">Leave a Message</div>
        <div className="font-light text-light">
          We will respond within 12 hours.
        </div>
      </div>

      <input
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your Name"
      />

      <input
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Your Email"
      />

      <input
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        placeholder="Your Subject"
        type="text"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />

      <textarea
        rows={5}
        cols={5}
        className="border border-[#184230] w-full rounded-2xl p-4 placeholder:text-[#628676]"
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <Button size={"xl"} variant={"green"} className="w-full mt-5">
        Submit
      </Button>
    </form>
  );
}
