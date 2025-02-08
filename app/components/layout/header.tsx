import { HeartIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IHeader {}

export const Header: React.FC<IHeader> = ({}) => {
  return (
    <header className="">
      <div className="container flex items-center justify-between pb-4 pt-2">
        <Link
          href={"/"}
          className="text-brand-gray-700 uppercase text-2xl font-semibold"
        >
          CAMPING
        </Link>
        <div className="flex gap-1 items-center">
          <button className="bg-brand-gray-100 size-12 flex items-center justify-center rounded-xl cursor-pointer active:scale-95">
            <HeartIcon className="text-brand-orange-500" />
          </button>
          <button className="bg-brand-green-100 size-12 flex items-center justify-center rounded-xl cursor-pointer active:scale-95">
            <MenuIcon className="text-brand-gray-600" />
          </button>
        </div>
      </div>
      <hr className="text-brand-gray-200 mx-4" />
    </header>
  );
};
