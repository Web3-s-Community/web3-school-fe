"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useDarkMode from "@/utils/useDarkMode";
import Link from "next/link";
import ToggleDarkModeButton from "../ToogleDarkModeButton";

interface Props {}

const tabLinks = [
  {
    displayName: "Challenges",
    href: "/challenges",
  },
  {
    displayName: "Sandbox",
    href: "/sandbox",
  },
  {
    displayName: "Leaderboard",
    href: "/leaderboard",
  },
  {
    displayName: "Pricing",
    href: "/pricing",
  },
  {
    displayName: "Resources",
    href: "/resources",
  },
];

const Navbar: React.FC<PropsWithChildren<Props>> = ({}) => {
  return (
    <>
      <nav className="fixed top-0 z-10 [height:var(--top-nav-height)] w-full bg-[color:var(--black)] px-3 py-1">
        <div className="flex w-full justify-between">
          <div className="flex space-x-4">
            <Logo />
            <Tabs />
          </div>
          <RightSectionBigScreen points={100} />
          <RightSectionSmallScreen />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <Link className="link-white flex items-center" href="/">
      <Image src="/svgs/logo.svg" width={40} height={40} alt="logo" />
      <span className="font-bold">Smart Contract Engineer</span>
    </Link>
  );
};

const Tabs = () => {
  const pathname = usePathname();

  return (
    <div className="hidden items-center space-x-4 md:flex">
      {tabLinks.map(({ displayName, href }) => (
        <Link
          key={href}
          className={`link-white ${
            href === pathname ? "link-white-active" : ""
          }`}
          href={href}
        >
          {displayName}
        </Link>
      ))}
    </div>
  );
};

const RightSectionBigScreen: React.FC<{ points?: number }> = ({
  points = 0,
}) => {
  return (
    <div className="hidden items-center space-x-3 pr-3 md:flex">
      <div className="text-white">
        <span>{points} points</span>
      </div>
      <ToggleDarkModeButton />
      <div className="relative">
        <button className="flex items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtftv4og-8hPZyIMivBbVp_u77_GFUcjk01Z4X_ILZXr=s96-c"
            className="h-7 w-7 cursor-pointer rounded-full transition duration-100 ease-in-out hover:scale-110"
            alt="avatar"
          />
        </button>
      </div>
    </div>
  );
};

const RightSectionSmallScreen = () => {
  return (
    <div className="flex items-center md:hidden">
      <ToggleDarkModeButton />
      <button className="bg-transparent px-3 py-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="flex h-6 w-6 flex-col items-center justify-center text-white"
          width="20"
          height="20"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
