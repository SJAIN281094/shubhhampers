"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="w-full relative">
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <Navigation />

            <div className="flex items-center gap-4">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
