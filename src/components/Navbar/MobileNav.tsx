"use client";

import { Menu, User, X } from "lucide-react";
import { useState } from "react";
import { links } from ".";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { AnimatePresence, motion } from "motion/react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10">
      {isOpen ? (
        <X onClick={() => setIsOpen(false)} />
      ) : (
        <Menu onClick={() => setIsOpen(true)} />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed blurw z-50 left-0 w-full h-full bg-black/90 backdrop-filter backdrop-blur-md top-16 flex flex-col items-center justify-center gap-5"
          >
            <div className="flex flex-col items-center justify-center gap-3 text-3xl relative -top-20">
              {links.map((item, idx) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="uppercase font-semibold text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="origin-top"
                  >
                    {item.title}
                  </motion.div>
                </Link>
              ))}

              <Link
                href={"https://app.empiretrading.co/login"}
                className={`${buttonVariants({
                  className: "text-white font-bold",
                })}`}
                style={{
                  background:
                    "linear-gradient(119.33deg, #00EDA1AD 1.78%, #005238 90.93%)",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Now <User />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
