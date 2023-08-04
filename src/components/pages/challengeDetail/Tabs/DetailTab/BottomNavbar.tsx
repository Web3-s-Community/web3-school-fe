import Link from "next/link";
import { PropsWithChildren } from "react";
interface Props {}

const BottomNavbar: React.FC<PropsWithChildren<Props>> = ({}) => {
  return (
    <>
      {" "}
      <div className="w-full border-t-2 border-[color:var(--border-color)]">
        <div className="flex flex-row justify-center py-1">
          <Link
            className="tab flex flex-row items-center"
            href="/challenges/solidity-value-types"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="18"
              height="18"
              className=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>
            <span>prev</span>
          </Link>
          <div className="mx-2 text-gray-400"> | </div>
          <Link
            className="tab flex flex-row items-center"
            href="/challenges/solidity-state-variables"
          >
            <span>next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="18"
              height="18"
              className=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
