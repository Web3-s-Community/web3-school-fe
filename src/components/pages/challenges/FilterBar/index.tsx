"use client";

import Image from "next/image";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Select from "./Select";
import Tag from "./Tag";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface Props {}

const initParams = {
  q: "",
  sort: "",
  status: "",
  language: "",
  difficulty: "",
};

const FilterBar: React.FC<PropsWithChildren<Props>> = ({}) => {
  const [params, setParams] = useState(initParams);
  const [searchWord, setSearchWord] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setParams({
      q: searchParams.get("q") ?? "",
      sort: searchParams.get("sort") ?? "",
      status: searchParams.get("status") ?? "",
      language: searchParams.get("language") ?? "",
      difficulty: searchParams.get("difficulty") ?? "",
    });
    setSearchWord(searchParams.get("q") ?? "");
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const debounceTimeout = setTimeout(() => {
      setParams((prev) => ({ ...prev, q: searchWord }));
    }, 200);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchWord]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const filteredParams = { ...params };
    Object.keys(filteredParams).forEach((key) => {
      let vipKey = key as keyof typeof initParams;
      if (!filteredParams[vipKey]) {
        delete filteredParams[vipKey];
      }
    });
    const queryString = new URLSearchParams(filteredParams).toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(newUrl);
  }, [params]);

  const resetFilters = () => {
    setParams(initParams);
    setSearchWord("");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row flex-wrap justify-center gap-2">
          <div className="select flex flex-row items-center py-0">
            <Image
              src="/svgs/search.svg"
              width={16}
              height={16}
              alt="search icon"
              className="mr-2"
            />
            <input
              className="bg-gray-200 text-gray-600 focus:outline-none dark:bg-zinc-800 dark:text-white"
              placeholder="Search"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
          </div>
          <Select
            options={[
              { displayName: "Sort", value: "" },
              { displayName: "newest", value: "newest" },
              { displayName: "oldest", value: "oldest" },
            ]}
            value={params.sort}
            onChange={(value) =>
              setParams((prev) => ({ ...prev, sort: value }))
            }
          />
          <Select
            options={[
              { displayName: "Status", value: "" },
              { displayName: "passed", value: "passed" },
              { displayName: "failed", value: "failed" },
            ]}
            value={params.status}
            onChange={(value) =>
              setParams((prev) => ({ ...prev, status: value }))
            }
          />
          <Select
            options={[
              { displayName: "Language", value: "" },
              { displayName: "solidity", value: "solidity" },
              { displayName: "vyper", value: "vyper" },
            ]}
            value={params.language}
            onChange={(value) =>
              setParams((prev) => ({ ...prev, language: value }))
            }
          />
          <Select
            options={[
              { displayName: "Difficulty", value: "" },
              { displayName: "easy", value: "easy" },
              { displayName: "medium", value: "medium" },
              { displayName: "hard", value: "hard" },
            ]}
            value={params.difficulty}
            onChange={(value) =>
              setParams((prev) => ({ ...prev, difficulty: value }))
            }
          />

          <button className="icon icon-btn" onClick={resetFilters}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-row flex-wrap py-2">
          {!!params.status && (
            <Tag
              displayName={params.status}
              onClick={() => setParams((prev) => ({ ...prev, status: "" }))}
            />
          )}
          {!!params.language && (
            <Tag
              displayName={params.language}
              onClick={() => setParams((prev) => ({ ...prev, language: "" }))}
            />
          )}
          {!!params.difficulty && (
            <Tag
              displayName={params.difficulty}
              onClick={() => setParams((prev) => ({ ...prev, difficulty: "" }))}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FilterBar;
