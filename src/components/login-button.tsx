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
    <div className="flex max-w-[100px] items-center pr-2 nav:gap-x-4 min-[985px]:max-w-[175px]">
      <Avatar className="h-11 w-11">
        <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
        <AvatarImage src={imageSrc} alt="" />
      </Avatar>
      <p className="truncate">
        <span className="text-white/70 max-nav:hidden">
          {session.user.name}
        </span>
      </p>
    </div>
  );
};

const AuthButton = () => {
  return (
    <Button
      size="lg"
      className=" text-zinc-50 hover:bg-orange-500/80"
      onClick={() => signIn()}
    >
      Log In
    </Button>
  );
};
