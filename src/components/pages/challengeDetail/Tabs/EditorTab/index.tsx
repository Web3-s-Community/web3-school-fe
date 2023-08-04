import { PropsWithChildren, useState } from "react";
import TabWrapper from "../../TabLayout/TabWrapper";
import TabHeader from "../../TabLayout/TabHeader";
import { IChallengeDetail } from "../..";

import dynamic from "next/dynamic";
import CommandButtons from "../../CommandButtons";
const AceEditor = dynamic(() => import("./AceEditor"), {
  ssr: false,
});

interface Props {
  isFullScreen: boolean;
  onClickFullScreen: () => void;
  onClickOutFullScreen: () => void;
  data: IChallengeDetail;
}

const EditorTab: React.FC<PropsWithChildren<Props>> = ({
  isFullScreen,
  onClickFullScreen,
  onClickOutFullScreen,
  data,
}) => {
  const [code, setCode] = useState("");

  return (
    <>
      <TabWrapper style={{ height: "100%" }}>
        <TabHeader
          isFullScreen={isFullScreen}
          onClickOutFullScreen={onClickOutFullScreen}
          onClickFullScreen={onClickFullScreen}
          style={{
            overflow: "hidden",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}
        >
          {data.language === "solidity" && (
            <div className="flex flex-row items-center text-sm">
              <div className="flex h-[30px] w-[30px] flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1300 1300"
                  xmlSpace="preserve"
                  width="30"
                  height="30"
                  className="text-black dark:text-[color:#0F0]"
                  fill="currentColor"
                >
                  <path
                    opacity="0.45"
                    d="M773.772 253.308 643.068 485.61H381.842l130.614-232.302h261.316"
                  ></path>
                  <path
                    opacity="0.6"
                    d="M643.068 485.61h261.318L773.772 253.308H512.456L643.068 485.61z"
                  ></path>
                  <path
                    opacity="0.8"
                    d="M512.456 717.822 643.068 485.61 512.456 253.308 381.842 485.61l130.614 232.212z"
                  ></path>
                  <path
                    opacity="0.45"
                    d="m513.721 1066.275 130.704-232.303h261.318l-130.705 232.303H513.721"
                  ></path>
                  <path
                    opacity="0.6"
                    d="M644.424 833.973H383.107l130.613 232.303h261.317L644.424 833.973z"
                  ></path>
                  <path
                    opacity="0.8"
                    d="M775.038 601.761 644.424 833.973l130.614 232.303 130.704-232.303-130.704-232.212z"
                  ></path>
                </svg>
              </div>
              solidity 0.8.17
            </div>
          )}
          {data.language === "vyper" && (
            <div className="flex flex-row items-center text-sm">
              <div className="flex h-[30px] w-[30px] flex-col items-center justify-center">
                <svg
                  data-name="Transparent Logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 1773.62"
                  width="22"
                  height="22"
                  className="text-black dark:text-[color:#F0F]"
                  fill="currentColor"
                >
                  <path
                    d="m1024 886.81-256 443.41 256 443.4 256-443.4-256-443.41z"
                    style={{ opacity: 0.8 }}
                  ></path>
                  <path
                    d="m1280 443.41-256 443.4 256 443.41 256-443.41-256-443.4zM768 443.41l-256 443.4 256 443.41 256-443.41-256-443.4z"
                    style={{ opacity: 0.6 }}
                  ></path>
                  <path
                    d="m1536 0-256 443.41 256 443.4 256-443.4L1536 0zM1152 221.7H896L768 443.41l256 443.4 256-443.4-128-221.71zM512 0 256 443.41l256 443.4 256-443.4L512 0z"
                    style={{ opacity: 0.45 }}
                  ></path>
                  <path
                    d="M1792 443.4 2048 0h-512l256 443.4zM256 443.4 512 0H0l256 443.4z"
                    style={{ opacity: 0.3 }}
                  ></path>
                </svg>
              </div>
              vyper 0.3.7
            </div>
          )}
        </TabHeader>
        <AceEditor
          value={code}
          onChange={(value) => {
            setCode(value);
          }}
        />
      </TabWrapper>
      <CommandButtons code={code} />
    </>
  );
};

export default EditorTab;
