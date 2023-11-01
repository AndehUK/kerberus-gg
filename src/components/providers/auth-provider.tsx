"use client";

import { SessionProvider } from "next-auth/react";

import type { LayoutProps } from "@/types/layout";

export const AuthProvider = ({ children }: LayoutProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
