"use client";

import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import ChallengeItem, { IChallengeItem } from "./ChallengeItem";
import { useSearchParams } from "next/navigation";
interface Props {
  list: IChallengeItem[];
}

const ChallengeList: React.FC<PropsWithChildren<Props>> = ({ list }) => {
  const searchParams = useSearchParams();

  const filteredList = useMemo(() => {
    const result = list.filter((row) => {
      const title = searchParams.get("q");
      const status = searchParams.get("status");
      const language = searchParams.get("language");
      const difficulty = searchParams.get("difficulty");

      const matchTitle =
        !title || row.title.toLowerCase().includes(title.toLowerCase());
      const matchStatus = !status || row.code?.status === status;
      const matchLanguage = !language || row.language === language;
      const matchDifficulty = !difficulty || row.difficulty === difficulty;

      return matchTitle && matchStatus && matchLanguage && matchDifficulty;
    });

    const sort = searchParams.get("sort");
    if (sort) {
      if (sort === "newest") result.sort((a, b) => a.sort - b.sort);
      else result.sort((a, b) => b.sort - a.sort);
    }
    return result;
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
