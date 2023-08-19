"use client";

import {PropsWithChildren, useEffect, useRef, useState} from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import useDarkMode from "@/utils/useDarkMode";
import Link from "next/link";
import ToggleDarkModeButton from "../ToogleDarkModeButton";
import styles from "./styles.module.css";

interface Props {
}

const tabLinks = [
    {
        displayName: "Challenges",
        href: "/challenges",
        icon: "challenge.svg"
    },
    {
        displayName: "Hackathon",
        href: "/hackathon",
        icon: "hackathon.svg"
    },
    {
        displayName: "Courses",
        href: "/courses",
        icon: "course.svg"
    },
    {
        displayName: "Job Board",
        href: "/job",
        icon: "job_board.svg"
    },
    {
        displayName: "Chat",
        href: "/chat",
        icon: "chat.svg"
    },
];

const Navbar: React.FC<PropsWithChildren<Props>> = ({}) => {
    return (
        <>
            <nav className="bg-[color:var(--black)] px-3 py-1 flex flex-col justify-between h-screen">
                {/* <div className="flex w-full justify-between"> */}
                <div className="space-x-4">
                    <Logo/>
                    <Tabs/>
                </div>
                <RightSectionBigScreen points={100}/>
                <RightSectionSmallScreen/>
                {/* </div> */}
            </nav>
        </>
    );
};

export default Navbar;

const Logo = () => {
    return (
        <Link className="link-white flex items-center" href="/" style={{width: 250}}>
            <Image src="/svgs/logo2.svg" width={40} height={40} alt="logo"/>
            <span className="text-2xl font-black text-indigo-600 ml-1">Web3</span>
            <span className="text-2xl font-bold ml-0.5">School</span>
        </Link>
    );
};

const Tabs = () => {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex flex-col">
            {tabLinks?.map(({displayName, href, icon}) => (
                <Link
                    key={href}
                    className={
                        pathname.includes(href) ? `${styles.linkActive} flex items-center` : `${styles.link} flex items-center`
                    }
                    href={href}
                >
                    <Image className="mr-1" src={"/svgs/" + icon} width={20} height={20} alt="logo"/>
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
            {/* <div className="text-white">
        <span>{points} points</span>
      </div>
      <ToggleDarkModeButton /> */}
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
            <ToggleDarkModeButton/>
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
