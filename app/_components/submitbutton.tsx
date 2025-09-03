"use client";

import React from "react";
import { Button } from "@/components/ui/stateful-button";

export function StatefulButtonDemo() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 200);
    });
  };
  return (
    <div className="fixed flex h-20 w-full items-center m-2 ml-10">
      <Button onClick={handleClick}>Back</Button>
    </div>
  );
}
