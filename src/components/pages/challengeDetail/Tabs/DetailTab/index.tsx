import { PropsWithChildren, useState, useEffect } from "react";
import TabHeader from "../../TabLayout/TabHeader";
import TabWrapper from "../../TabLayout/TabWrapper";
import TabButton from "./HeaderButton";
import { IChallengeDetail } from "../..";
import BottomNavbar from "./BottomNavbar";
import Prompt from "./Subtabs/Prompt";
import Video from "./Subtabs/Video";
import TaskList from "./Subtabs/TaskList";
import Test from "./Subtabs/Test";
import Solution from "./Subtabs/Solution";
interface Props {
  data: IChallengeDetail & { prevSlug: string; nextSlug: string };
  isFullScreen: boolean;
  onClickFullScreen: () => void;
  onClickOutFullScreen: () => void;
}

const DetailTab: React.FC<PropsWithChildren<Props>> = ({
  data,
  isFullScreen,
  onClickFullScreen,
  onClickOutFullScreen,
}) => {
  const [currentTab, setCurrentTab] = useState("Prompt");
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>([]);

  useEffect(() => {
    setCheckedTasks(Array(data.tasks.length).fill(false));
  }, [data.tasks]);

  const remainedTaskCount = checkedTasks.filter((done) => !done).length;
  const taskCountClass =
    remainedTaskCount !== 0
      ? "rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800"
      : "rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900";
  return (
    <>
      <TabWrapper style={{ width: "100%" }}>
        <TabHeader
          isFullScreen={isFullScreen}
          onClickOutFullScreen={onClickOutFullScreen}
          onClickFullScreen={onClickFullScreen}
        >
          <TabButton
            onClick={() => setCurrentTab("Prompt")}
            isActive={currentTab === "Prompt"}
            style={{
              marginLeft: 0,
            }}
          >
            <span className="mr-2">Prompt</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="18"
              height="18"
              className=""
              fill="var(--red)"
            >
              <circle cx="8" cy="8" r="8"></circle>
            </svg>
          </TabButton>
          {data.videos.length > 0 && (
            <TabButton
              onClick={() => setCurrentTab("Video")}
              isActive={currentTab === "Video"}
            >
              Video
            </TabButton>
          )}
          <TabButton
            onClick={() => setCurrentTab("Task")}
            isActive={currentTab === "Task"}
          >
            <span className="mr-2">Tasks</span>
            <span className={taskCountClass}>{remainedTaskCount}</span>
          </TabButton>
          <TabButton
            onClick={() => setCurrentTab("Test")}
            isActive={currentTab === "Test"}
          >
            Test
          </TabButton>
          <TabButton
            onClick={() => setCurrentTab("Solution")}
            isActive={currentTab === "Solution"}
          >
            Solution
          </TabButton>
        </TabHeader>
        {currentTab === "Prompt" && (
          <Prompt
            title={data.title}
            language={data.language}
            difficulty={data.difficulty}
            tags={data.tags}
            points={data.points}
            prompt={data.prompt}
          />
        )}
        {data.videos.length > 0 && (
          <Video currentTab={currentTab} videos={data.videos} />
        )}
        <TaskList
          currentTab={currentTab}
          tasks={data.tasks}
          hints={data.hints}
          checkedTasks={checkedTasks}
          setCheckedTask={(index, checked) =>
            setCheckedTasks((prev) => {
              let dup = prev.slice();
              dup[index] = checked;
              return dup;
            })
          }
        />
        {currentTab === "Test" && <Test test={data.test} />}
        {currentTab === "Solution" && <Solution solution={data.solution} />}
        <BottomNavbar prevSlug={data.prevSlug} nextSlug={data.nextSlug} />
      </TabWrapper>
    </>
  );
};

export default DetailTab;
