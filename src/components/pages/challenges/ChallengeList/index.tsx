"use client";

import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import ChallengeItem, { ChallengeItemProps } from "./ChallengeItem";
import { useSearchParams } from "next/navigation";
interface Props {}
const list: ChallengeItemProps[] = [
  {
    isCompleted: true,
    title: "Hello World",
    hasVideo: true,
    language: "solidity",
    difficulty: "easy",
    href: "/challenges/1",
    categories: ["app"],
    isFree: true,
  },
  {
    isCompleted: false,
    title: "Value Types",
    hasVideo: true,
    language: "vyper",
    difficulty: "medium",
    href: "/challenges/2",
    categories: ["defi", "curve", "mainnet"],
    isFree: false,
  },
  {
    isCompleted: false,
    title: "Function",
    hasVideo: false,
    language: "vyper",
    difficulty: "hard",
    href: "/challenges/3",
    categories: ["defi", "curve", "mainnet"],
    isFree: false,
  },
];
const ChallengeList: React.FC<PropsWithChildren<Props>> = ({}) => {
  const searchParams = useSearchParams();

  const filteredList = useMemo(() => {
    return list.filter((row) => {
      const title = searchParams.get("q");
      const status = searchParams.get("status");
      const language = searchParams.get("language");
      const difficulty = searchParams.get("difficulty");
      const matchTitle =
        !title || row.title.toLowerCase().includes(title.toLowerCase());
      const matchStatus = !status || row.isCompleted === (status === "passed");
      const matchLanguage = !language || row.language === language;
      const matchDifficulty = !difficulty || row.difficulty === difficulty;
      return matchTitle && matchStatus && matchLanguage && matchDifficulty;
    });
  }, [searchParams]);
  return (
    <>
      <div className="mx-auto mt-1 flex max-h-[60vh] w-full max-w-[90vw] flex-col overflow-x-auto overflow-y-auto rounded-sm md:max-w-screen-lg">
        <table className="w-full border-spacing-2">
          <thead></thead>
          <tbody>
            {filteredList.map((row, index) => (
              <ChallengeItem key={index} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChallengeList;
