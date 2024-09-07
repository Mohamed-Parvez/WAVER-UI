import React from "react";
import Logo from "../ui/logo";
import Menu from "../ui/menu";
import Search from "../ui/search";
import { ModeToggle } from "../ui/modetoggle";
import Link from "next/link";
import { NavComponents } from "@/constants";

const NavBar = () => {
  return (
    <nav className="flex-between container-2xl gap-3 h-[52px] md:h-14 lg:h-[60px]">
      <div className="flex-center gap-6 lg:gap-6">
        <Logo />
        <Menu />
        <div className="hidden md:block">
          <div className="flex-between gap-3 lg:gap-5">
            {NavComponents.map((items) => (
              <Link key={items.key} href={items.href}>
                <p className="body-regular text-gray-600 dark:text-gray-400">
                  {items.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-center gap-3.5 max-w-screen-md w-full md:max-w-[260px] lg:max-w-[340px]">
        <Search />
        <div className="flex-center gap-1 sm:gap-2">
          <Link href={"https://github.com/Mohamed-Parvez/WAVER-UI.git"}>
            <div
              className="bg-[url('/assets/icons/github.svg')] dark:bg-[url('/assets/icons/githubdark.svg')]
             size-[24px] bg-contain"
            />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
