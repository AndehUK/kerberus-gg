"use client";

import { signIn, useSession } from "next-auth/react";
import type { Session } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";

export const LoginButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center gap-x-4">
        <Skeleton className="h-full w-10 rounded-full bg-white/5" />
        <div className="flex flex-col items-center gap-y-2">
          <Skeleton className="h-2 w-24 bg-white/5" />
          <Skeleton className="h-2 w-24 bg-white/5" />
        </div>
      </div>
    );
  }

  return session ? <AvatarButton session={session} /> : <AuthButton />;
};

const AvatarButton = ({ session }: { session: Session }) => {
  const imageSrc = session.user.image ? session.user.image : undefined;

  return (
    <div className="nav:gap-x-4 flex items-center">
      <Avatar>
        <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
        <AvatarImage src={imageSrc} alt="" />
      </Avatar>
      <div className="flex flex-col justify-center text-sm">
        <p className="nav:flex hidden text-white/70">Andehx</p>
      </div>
    </div>
  );
};

const AuthButton = () => {
  return (
    <Button size="lg" onClick={() => signIn()}>
      Log In
    </Button>
  );
};
