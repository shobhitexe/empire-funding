"use client";

import { useEffect } from "react";
import { Intercom } from "@intercom/messenger-js-sdk";

export default function IntercomWidget() {
  useEffect(() => {
    Intercom({
      app_id: "q215b1or",
    });
  }, []);

  return null;
}
