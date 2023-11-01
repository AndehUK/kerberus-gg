"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export const ServerAddressButton = () => {
  const handleCopyClick = (textToCopy: string) => {
    if (navigator.clipboard) {
      const promise = navigator.clipboard.writeText(textToCopy);

      toast.promise(promise, {
        loading: "Copying to clipboard...",
        success: "Copied Server Address to Clipboard!",
        error: "Failed to copy to clipboard.",
      });
    } else {
      toast.error("Cannot access clipboard.");
    }
  };

  return (
    <Button
      variant="cta"
      size="cta"
      onClick={() => handleCopyClick("play.kerberus.gg")}
    >
      play.kerberus.gg
      <Copy className="h-5 w-5" />
    </Button>
  );
};
