import Footer from "@/components/shared/Footer";
import { ChevronsRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container-2xl mt-8">
      <div className="flex-center flex-col space-y-5 sm:space-y-6 lg:space-y-8">
        <Link
          href={"/appui"}
          className="px-4 py-1.5 border hover:border-slate-300 dark:hover:border-slate-500 cursor-pointer border-slate-100 dark:border-gray-800 rounded-full shadow-sm bg-slate-100 dark:bg-gray-800 flex-center gap-2"
        >
          <p className="extra-small-regular xs:small-regular text-gray-900 dark:text-gray-200">
            Explore 100+ free Editable & Reusable Components
          </p>
          <ChevronsRight size={20} />
        </Link>
        <div className="flex-wrap max-w-[700px] md:max-w-[800px] lg:max-w-[900px] w-full">
          <p className="lg:text-[48px] h2-bold sm:h1-bold md:text-[37px] font-bold md:leading-[45px] lg:leading-[50px] tracking-tighter sm:text-center">
            Build Fast UI of Your Website with editable & Resuable Tailwind
            Components
          </p>
        </div>
        <div className="flex-wrap max-w-screen-sm lg:max-w-screen-md w-full">
          <p className="lg:h3-regular paragraph-regular md:base-regular text-gray-500 dark:text-gray-400 sm:text-center">
            Custom Tailwind Css open source component based UI with reusable and
            editable Components with dark mode integrated
          </p>
        </div>
        <div className="flex-col space-y-3.5 items-center justify-center max-w-[400px] w-full xs:w-auto xs:space-y-0 xs:flex-center xs:flex-row gap-4 md:gap-5">
          <Link
            href={"/appui"}
            className="px-4 flex-center py-[8px] lg:py-[12px] dark:bg-white dark:text-black bg-gray-800 text-white max-w-[400px] w-full xs:w-auto rounded-[8px] body-regular"
          >
            Get Started
          </Link>
          <Link
            href={"/appui"}
            className="px-4 py-[8px] lg:py-[12px] border border-slate-300 text-gray-900 rounded-[8px] body-regular w-full max-w-[400px] xs:w-auto dark:text-white flex-center gap-2"
          >
            <Star size={20} />
            Explore Components
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
