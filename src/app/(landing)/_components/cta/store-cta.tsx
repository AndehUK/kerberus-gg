import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const StoreCTA = () => {
  return (
    <div className="lg:mx-4 lg:py-12">
      <div
        className="store-cta mx-auto flex max-w-7xl items-center 
                justify-around px-12 lg:flex-row lg:rounded-lg"
      >
        <div className="mx-4 mb-6 max-w-md py-12 text-center text-white max-lg:mx-auto lg:text-left">
          <h1 className="mb-8 text-4xl font-bold">
            Visit our store now to support your favorite creators!
          </h1>
          <Button variant="store" size="store" className="uppercase">
            <Link href="/store">Check it out!</Link>
          </Button>
        </div>
        <div className="mx-4 max-w-sm max-lg:hidden">
          <Image
            src="/kerby_wumpus.png"
            width="688"
            height="457"
            className="relative left-12 top-2 scale-125"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
