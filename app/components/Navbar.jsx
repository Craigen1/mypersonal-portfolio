"use client";

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import "../globals.css";
import Image from "next/image";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);

  const currentTheme = theme === "system" ? theme : theme;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <main className="fixed dark:bg-[#101010] bg-[#F4F4F4] w-full h-20 shadow-lg z-50">
      <div className="flex justify-between items-center w-full h-full px-2 ">
        <Link href="/">
          <h2 className="font-bold text-[#3BE55A] text-3xl mx-10">MJP</h2>
        </Link>
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="nav-btn">Home</li>
            </Link>
            <Link href="/">
              <li className="nav-btn">About</li>
            </Link>
            <Link href="/">
              <li className="nav-btn">Projects</li>
            </Link>
            <Link href="/">
              <li className="nav-btn">Resume</li>
            </Link>
          </ul>
          <div className="hidden md:flex">
            {currentTheme === "dark" ? (
              <button className="px-3" onClick={() => setTheme("light")}>
                <Image src="/sun.svg" width={25} height={25} alt="sun" />
              </button>
            ) : (
              <button className="px-3" onClick={() => setTheme("dark")}>
                <Image src="/moon.svg" width={23} height={23} alt="moon" />
              </button>
            )}
          </div>

          {/*Mobile Navigation Bar */}
          <div className="md:hidden px-3">
            {currentTheme === "dark" ? (
              <button onClick={() => setTheme("light")}>
                <Image src="/sun.svg" width={27} height={27} alt="sun" />
              </button>
            ) : (
              <button onClick={() => setTheme("dark")}>
                <Image src="/moon.svg" width={25} height={25} alt="moon" />
              </button>
            )}
          </div>
          <div
            onClick={handleNav}
            className="md:hidden px-3 mb-2 cursor-pointer hover:scale-110"
          >
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed top-0 left-0 bg-black/70 w-full h-screen" : ""}
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-screen h-[48%] bg-[#E4E4E4] dark:bg-[#171717] p-10 ease-in-out duration-500"
              : "fixed left-0 top-[-100%] h-[48%] w-screen bg-[#E4E4E4] dark:bg-[#171717] p-10 ease-in-out duration-500"
          }
        >
          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-2xl font-bold text-[#3BE55A]">MJP</h2>
              <div
                onClick={handleNav}
                className="cursor-pointer hover:scale-75"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div>
              <ul className="grid place-items-center gap-6 my-5">
                <Link href="/">
                  <li className="nav-btn font-medium text-md max-w-fit">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className="nav-btn font-medium text-md max-w-fit">
                    About
                  </li>
                </Link>
                <Link href="/">
                  <li className="nav-btn font-medium text-md max-w-fit">
                    Projects
                  </li>
                </Link>
                <Link href="/">
                  <li className="nav-btn font-medium text-md max-w-fit">
                    Resume
                  </li>
                </Link>
              </ul>
              <div className="my-5">
                <p className="uppercase tracking-wider">get in touch</p>
                <div className="flex flex-row gap-3 my-2">
                  <FaGithub className="cursor-pointer hover:text-[#1AA333]" />
                  <FaLinkedinIn className="cursor-pointer hover:text-[#1AA333]" />
                  <FaTwitter className="cursor-pointer hover:text-[#1AA333]" />
                  <AiOutlineMail className="cursor-pointer hover:text-[#1AA333]" />
                  <BsFacebook className="cursor-pointer hover:text-[#1AA333]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
