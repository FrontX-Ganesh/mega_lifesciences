"use client";
import { useState } from "react";
import CompanyLogo from "@/public/images/Logo.png";
import sideLogo from "@/public/images/image 9.png";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { header_data } from "./navbar.constatnts";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="my-0 w-full z-[99]">
      <header className="bg-white max-w-[1200px] mx-auto">
        <nav aria-label="Global" className="h-28 mx-auto p-4 ">
          <div className="flex items-center justify-between">

            <div className="flex gap-4 items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  alt="Company Logo"
                  src={CompanyLogo}
                  className="h-20 w-auto"
                />
              </Link>

              <div className="hidden lg:flex gap-4">
                {header_data.map((ele) => (
                  <PopoverGroup
                    className="flex items-center gap-x-2"
                    key={ele.id}
                  >
                    <Popover className="relative">
                      <PopoverButton className="flex gap-2 items-center text-sm font-semibold px-3 py-2 rounded-md focus-visible:outline-none data-[open]:bg-[#E5EEFF] data-[open]:text-primary group">
                        {ele.title}
                        {ele.isSubMenu && <FaAngleDown />}
                      </PopoverButton>
                    </Popover>
                  </PopoverGroup>
                ))}
              </div>
            </div>


            <div className="hidden lg:flex gap-4 items-center">
              <FaSearch className="h-9" />
              <PopoverGroup className="flex items-center gap-x-2">
                <Popover className="relative">
                  <PopoverButton className="border border-grey-100 flex gap-2 items-center text-sm font-semibold text-[#707070] px-3 py-2 rounded-md focus-visible:outline-none data-[open]:bg-[#E5EEFF] data-[open]:text-primary group">
                    ENG
                    <FaAngleDown />
                  </PopoverButton>
                </Popover>
              </PopoverGroup>
              <div className="text-[#1AABE3] text-xs">LOGIN IN</div>
              <div className="text-xs">By:</div>
              <Image
                alt="Side Logo"
                src={sideLogo}
                className="h-14 w-auto"
              />
            </div>

            <div className="lg:hidden">
            <button
                className="text-xl p-2 focus:outline-none"
              >
                <FaSearch />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-xl p-2 focus:outline-none"
              >
                <FaBars />
              </button>
            </div>
          </div>

        </nav>
      </header>
    </div>
  );
};

export default NavBar;
