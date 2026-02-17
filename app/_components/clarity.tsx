"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export function ClarityClient() {
  useEffect(() => {
    const projectId = "vizcisgz7j";
    Clarity.init(projectId);
  }, []);

  return null;
}
