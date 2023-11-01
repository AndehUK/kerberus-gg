import { Logo } from "./logo";
import { AuthProvider } from "@/components/providers/auth-provider";
import { LoginButton } from "@/components/login-button";

import { MobileSidebar } from "./mobile-sidebar";
import { NavigationItems } from "./nav-items";

export const Navbar = () => {
  return (
    <AuthProvider>
      <div className="mx-auto w-full bg-[#141416]">
        <div className="mx-auto flex max-w-7xl justify-between p-6">
          <div className="nav:hidden flex items-center">
            <MobileSidebar />
          </div>
          <div className="nav:flex hidden items-center gap-x-16 max-[900px]:gap-x-12">
            <Logo />
            <NavigationItems />
          </div>
          <LoginButton />
        </div>
      </div>
    </AuthProvider>
  );
};
