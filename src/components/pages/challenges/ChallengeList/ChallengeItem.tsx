import Link from "next/link";
import { PropsWithChildren } from "react";
import Tag from "../FilterBar/Tag";
export interface IChallengeItem {
  id: string;
  slug: string;
  language: string;
  title: string;
  difficulty: string;
  free: boolean;
  videos: { url: string; title: string }[];
  tags: string[];
  sort: number;
  code: { status: string } | null;
}

const ChallengeItem: React.FC<PropsWithChildren<IChallengeItem>> = ({
  title,
  code,
  videos,
  language,
  difficulty,
  tags,
  free,
  slug,
}) => {
  const status = code?.status ? code.status : "";
  const statusColor = {
    passed: "var(--green)",
    failed: "var(--red)",
    "": "var(--color-1)",
  }[status];

  return (
    <>
      <tr className="border-t odd:bg-gray-100 dark:border-zinc-800 dark:odd:bg-zinc-900">
        <td className="w-[20px] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="18"
            height="18"
            className="mx-auto"
            fill={statusColor}
          >
            {["passed", "failed"].includes(status) ? (
              <circle cx="8" cy="8" r="8"></circle>
            ) : (
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            )}
          </svg>
        </td>
        <td className="pr-2">
          <Link href={`challenges/${slug}`}>
            <span
              className={`${
                status === "passed" ? "line-through" : ""
              } cursor-pointer whitespace-nowrap font-semibold text-[color:var(--strike-color)] transition duration-200 ease-in-out hover:text-[color:var(--hover-strike-color)]`}
            >
              {title}
            </span>
          </Link>
        </td>
        <td className="w-[40px] px-2">
          <div className="flex flex-row items-center justify-center">
            {videos.length > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 71.412 50"
                width="24"
                height="24"
              >
                <g id="g5" transform="scale(.58824)">
                  <path
                    d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z"
                    id="path7"
                    fill="red"
                  ></path>
                  <path
                    id="polygon9"
                    fill="#fff"
                    d="M80.2 42.5 48.6 24.3v36.4z"
                  ></path>
                </g>
              </svg>
            )}
          </div>
        </td>
        <td className="w-[80px]">
          <div className="flex flex-row items-center justify-center">
            <Tag displayName={language} />
          </div>
        </td>
        <td className="w-[100px] px-2">
          <div className="flex flex-row items-center justify-center">
            <Tag displayName={difficulty} />
          </div>
        </td>
        <td>
          <div className="flex flex-row items-center justify-end">
            {tags.map((cate, index) => (
              <Tag key={index} displayName={cate} />
            ))}
          </div>
        </td>
        <td className="w-[60px] px-2">
          <div className="flex flex-row items-center justify-center">
            {free ? (
              <Tag displayName="free" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default ChallengeItem;
