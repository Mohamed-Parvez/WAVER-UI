import Link from "next/link";
import React from "react";
import {
  Footer_AppUi_Items,
  Footer_Color_Items,
  Footer_Icon_Items,
  Footer_Section_Items,
  FooterImageItems,
} from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-2xl border-t border-gray-200 dark:border-gray-700 mt-10 py-4">
      <div className="mb-20 max-w-screen-2xl md:mb-0">
        <div className="sm:flex-between grid grid-cols-2 gap-10 py-10 sm:gap-0 px-5 sm:px-16 md:px-24 lg:px-36 xl:px-40">
          <div>
            <h4 className="mb-6 body-medium font-medium text-black dark:text-gray-100">
              Application UI
            </h4>
            <ul className="body-regular transition-all duration-500">
              {Footer_AppUi_Items.map((v) => (
                <li key={v.key} className="mb-6">
                  <Link
                    href={v.href}
                    className=" text-gray-500 dark:text-gray-400"
                  >
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 body-medium font-medium text-black dark:text-gray-100">
              Sections
            </h4>
            <ul className="body-regular transition-all duration-500">
              {Footer_Section_Items.map((v) => (
                <li key={v.key} className="mb-6">
                  <Link
                    href={v.href}
                    className=" text-gray-500 dark:text-gray-400"
                  >
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 body-medium font-medium text-black dark:text-gray-100">
              Icons
            </h4>
            <ul className="body-regular transition-all duration-500">
              {Footer_Icon_Items.map((v) => (
                <li key={v.key} className="mb-6">
                  <Link
                    href={v.href}
                    className=" text-gray-500 dark:text-gray-400"
                  >
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 body-medium font-medium text-black dark:text-gray-100">
              Colors
            </h4>
            <ul className="body-regular transition-all duration-500">
              {Footer_Color_Items.map((v) => (
                <li key={v.key} className="mb-6">
                  <Link
                    href={v.href}
                    className=" text-gray-500 dark:text-gray-400"
                  >
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 py-7">
          <div className="flex flex-col items-center justify-center">
            <span className="body-regular text-gray-500">
              ©<Link href="https://www.parvez.me/">Waver UI</Link> 2024, All
              rights reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:justify-center">
              {FooterImageItems.map((v) => (
                <Link
                  href={v.href}
                  key={v.key}
                  className="flex size-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                >
                  <Image height={20} width={20} alt={v.label} src={v.src} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
