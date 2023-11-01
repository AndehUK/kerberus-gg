import type { LayoutProps } from "@/types/layout";

export const Header = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-pg xs:text-left xs:flex-row relative flex flex-col gap-x-1 rounded-xl border-b-4 border-l-2 border-[#191D25] bg-[#29303D] px-8 py-4 text-center font-semibold leading-6 sm:px-16">
        {children}
      </div>
    </div>
  );
};
