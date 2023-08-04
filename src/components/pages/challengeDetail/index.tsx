"use client";
import Split from "@uiw/react-split";
import SplitBar from "@/components/pages/challengeDetail/TabLayout/SplitBar";
import DetailTab from "@/components/pages/challengeDetail/Tabs/DetailTab";
import { useState, useEffect } from "react";
import EditorTab from "@/components/pages/challengeDetail/Tabs/EditorTab";
import ConsoleTab from "./Tabs/ConsoleTab";

export interface IChallengeDetail {
  id: string;
  slug: string;
  language: string;
  title: string;
  difficulty: string;
  points: number;
  free: boolean;
  tags: string[];
  prompt: string;
  videos: {
    url: string;
    title: string | null;
  }[];
  starter: string;
  tasks: string[];
  hints: string[];
  code: { code: string; status: string } | null;
  solution: string;
  test: string;
}

interface Props {
  data: IChallengeDetail;
}

const initLeftRightSize = {
  left: 50,
  right: 50,
};

const ChallengeDetailLayout: React.FC<Props> = ({ data }) => {
  const [leftRightSize, setLeftRightSize] = useState(initLeftRightSize);

  const onDragLeftRight = (leftSize: number, rightSize: number) => {
    setLeftRightSize({
      left: leftSize,
      right: rightSize,
    });
  };

  const setFullLeftRight = (isLeft: boolean) => {
    setLeftRightSize({
      left: isLeft ? 100 : 0,
      right: isLeft ? 0 : 100,
    });
  };

  useEffect(() => {
    if (data) localStorage.setItem("language", data.language);
  }, [data]);

  return (
    <>
      <Split
        mode="horizontal"
        style={{ height: "100%", width: "100%" }}
        renderBar={(props) => <SplitBar {...props} mode="horizontal" />}
        onDragging={onDragLeftRight}
      >
        <div
          id="detail-tab"
          style={{
            width: `${leftRightSize.left}%`,
          }}
        >
          <DetailTab
            data={data}
            isFullScreen={leftRightSize.right < 1}
            onClickFullScreen={() => setFullLeftRight(true)}
            onClickOutFullScreen={() => setLeftRightSize(initLeftRightSize)}
          />
        </div>
        <Split
          id="right-panel"
          mode="vertical"
          renderBar={(props) => <SplitBar {...props} mode="vertical" />}
          style={{
            width: `${leftRightSize.right}%`,
          }}
        >
          <div className="h-[70%]">
            <EditorTab
              data={data}
              isFullScreen={leftRightSize.left < 1}
              onClickFullScreen={() => setFullLeftRight(false)}
              onClickOutFullScreen={() => setLeftRightSize(initLeftRightSize)}
            />
          </div>
          <div className="h-[30%]">
            <ConsoleTab />
          </div>
        </Split>
      </Split>
    </>
  );
};

export default ChallengeDetailLayout;
