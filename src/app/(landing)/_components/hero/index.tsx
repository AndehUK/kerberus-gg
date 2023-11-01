import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Header } from "../header";
import { Button } from "@/components/ui/button";
import { ServerAddressButton } from "./address-button";

export const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-background" />
        <div className="mx-auto lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden lg:rounded-2xl">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="/hero_background.png"
                alt=""
                width={1816}
                height={741}
              />
            </div>
            <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-40">
              <div className="relative top-8">
                <Header>
                  Now in{" "}
                  <span className="font-extrabold text-primary">
                    {" "}
                    CLOSED BETA!{" "}
                  </span>
                </Header>
              </div>
              <div className="mx-auto max-w-6xl rounded-xl bg-black/50 px-4 py-16">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block uppercase text-white drop-shadow-xl">
                    Best 1.20 Minecraft Experience
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Try your hand at the newest Minecraft network in town,
                  bringing new fun minigames, a free-to-play focused experience
                  that rewards you for activity and make new friends and listing
                  memories along the way!
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-sm md:flex md:max-w-none md:justify-center">
                <div className="space-y-4 md:mx-auto md:inline-grid md:grid-cols-2 md:gap-5 md:space-y-0">
                  <ServerAddressButton />
                  <Button variant="discord" size="cta">
                    <Link
                      href="/discord"
                      target="_blank"
                      className="flex items-center gap-x-4"
                    >
                      <ExternalLink className="h-5 w-5" />
                      discord.gg/kerberus
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
