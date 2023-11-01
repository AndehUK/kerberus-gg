import { Logo } from "./logo";
import { AuthProvider } from "@/components/providers/auth-provider";
import { LoginButton } from "@/components/login-button";

import { MobileSidebar } from "./mobile-sidebar";
import { NavigationItems } from "./nav-items";

export const Navbar = () => {
  return (
    <AuthProvider>
      <div className="mx-auto w-full bg-[#141416]">
        <div className="mx-auto flex max-w-7xl justify-between px-8 py-6">
          <div className="flex items-center nav:hidden">
            <MobileSidebar />
          </div>
          <div className="hidden items-center gap-x-16 max-[900px]:gap-x-12 nav:flex">
            <Logo />
            <NavigationItems />
          </div>
          <LoginButton />
        </div>
      </div>
    </AuthProvider>
  );
};
