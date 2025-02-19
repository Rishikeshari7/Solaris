"use client";
import React from "react";
import Logo from "../../../public/Images/Home/logo.png";
import Image from "next/image";
import { sideNavData } from "@/Data/Common/SideBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-10 bg-backgroundGreen py-10 px-5 min-w-[14rem]">
      <Image className="w-36" src={Logo} alt="Logo" />
      <div className="flex flex-col gap-4">
        {sideNavData.map(({ title, link }, index) => {
          const isActive = pathname === link;
          return (
            <Link
              key={index}
              href={link}
              className={`py-2 px-3 text-lg rounded-md font-medium border border-transparent hover:border-backgroundYellow ${
                isActive ? "bg-backgroundYellow text-black" : "text-textGray"
              }`}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
