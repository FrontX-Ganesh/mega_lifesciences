import React from "react";
import CompanyLogo from "@/public/images/Logo.png";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverButton, PopoverGroup } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { header_data } from "./navbar.constatnts";

const NavBar = () => {
  return (
    <div className="my-0 w-full z-[99]">
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="h-28 mx-auto py-3 px-24 max-1240px:p-4 max-[1520px]:px-8"
        >
          <div className=" flex items-center justify-between">
            <div className="flex gap-4">
              <div className="flex">
                <Link href="/" className="-m-1.5 p-1.5">
                  <Image
                    alt="componyLogo"
                    src={CompanyLogo}
                    className="h-20 w-auto"
                  />
                </Link>
              </div>

              {header_data.map((ele) => (
                <PopoverGroup
                  className="hidden lg:flex items-center gap-x-2 1240px:gap-x-1"
                  key={ele.id}
                >
                  <Popover className="relative">
                    <PopoverButton className="flex gap-2 items-center 1240px:text-sm text-xs w-max font-semibold px-3 py-2 rounded-md focus-visible:outline-none data-[open]:bg-[#E5EEFF] data-[open]:text-primary group">
                      {ele.title}
                      {ele.isSubMenu && <FaAngleDown />}
                    </PopoverButton>
                  </Popover>
                </PopoverGroup>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <FaSearch className="h-9" />
              <div>
                <PopoverGroup className="hidden lg:flex items-center gap-x-2 1240px:gap-x-1">
                  <Popover className="relative">
                    <PopoverButton className="border border-grey-100 flex gap-2 items-center 1240px:text-sm text-xs w-max font-semibold text-[#707070] px-3 py-2 rounded-md focus-visible:outline-none data-[open]:bg-[#E5EEFF] data-[open]:text-primary group">
                      ENG
                      <FaAngleDown />
                    </PopoverButton>
                  </Popover>
                </PopoverGroup>
              </div>
              <div className="text-[#1AABE3] text-xs">LOGIN IN</div>
              <div className="text-xs">By:</div>
              <Image
                alt="componyLogo"
                src={CompanyLogo}
                className="h-14 w-auto"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
