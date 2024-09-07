import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="hidden md:block">
      <div className="flex-center gap-2">
        {/* <div className="rounded-full border border-slate-400">
          <Image
            src={"/assets/icons/logoicon.svg"}
            height={24}
            width={24}
            alt="logo-icon"
          />
        </div> */}
        <p className="paragraph-medium text-black dark:text-white">Waver UI</p>
      </div>
    </Link>
  );
};

export default Logo;
