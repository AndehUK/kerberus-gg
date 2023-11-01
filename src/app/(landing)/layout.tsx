import { Navbar } from "./_components/navbar";
import type { LayoutProps } from "@/types/layout";

const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default LandingLayout;
