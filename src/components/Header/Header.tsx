"use client";

import { HeartIcon } from "@/assets/icons";
import useHasScrolled from "@/hooks/useHasScrolled";

export default function Header() {
  const { scrolled } = useHasScrolled({ offsetThreshold: 300 });

  const initialHeaderClasses =
    "sticky w-full top-0 z-[9999] bg-mBlue-200 min-h-16 p-4 flex flex-col gap-4 md:flex-row justify-between md:items-center text-mBlue-600";

  const headerClassesAfterScroll =
    "sticky w-full top-0 z-[9999] bg-white min-h-16 p-4 flex flex-col gap-4 md:flex-row justify-between md:items-center text-zinc-900  shadow-md";

  return (
    <header
      className={`${
        scrolled ? headerClassesAfterScroll : initialHeaderClasses
      }`}
    >
      <div className="flex gap-4">
        <HeartIcon
          size={32}
          className={`${scrolled ? "text-red-500" : "text-mBlue-300"}`}
        />
        <h2 className="font-bold text-2xl">Menteliz</h2>
      </div>
      <div className="flex gap-3">
        <h4 className="font-semibold hover:underline">Sobre</h4>
        <h4 className="font-semibold hover:underline">Contato</h4>
      </div>
    </header>
  );
}
