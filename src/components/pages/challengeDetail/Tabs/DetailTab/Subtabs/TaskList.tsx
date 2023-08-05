import { PropsWithChildren, useState } from "react";
interface Props {
  tasks: string[];
  hints: string[];
  setCheckedTask: (index: number, checked: boolean) => void;
  checkedTasks: boolean[];
  currentTab: string;
}

const TaskList: React.FC<PropsWithChildren<Props>> = ({
  tasks,
  hints,
  setCheckedTask,
  checkedTasks,
  currentTab,
}) => {
  return (
    <>
      <div
        className="h-full overflow-y-scroll px-3 py-4"
        style={{ display: currentTab === "Task" ? "block" : "none" }}
      >
        {tasks.map((task, index) => (
          <div className="mb-10" key={index}>
            <Task
              checked={checkedTasks[index]}
              content={task}
              index={index}
              setCheckedTask={setCheckedTask}
            />
            <Hint content={hints[index]} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;

interface ITask {
  checked: boolean;
  content: string;
  index: number;
  setCheckedTask: (index: number, checked: boolean) => void;
}

const Task: React.FC<ITask> = ({
  content,
  index,
  setCheckedTask,
  checked = false,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col pb-5">
      <div className="flex flex-row items-center border-b border-[color:var(--border-color)] pb-1">
        <div className="flex flex-row items-center mr-2">
          <input
            checked={checked}
            type="checkbox"
            className="h-4 w-4"
            onChange={(e) => {
              setCheckedTask(index, e.target.checked);
            }}
          />
        </div>
        <div
          className="flex w-full cursor-pointer select-none flex-row items-center"
          onClick={() => setOpen(!open)}
        >
          <span
            className="text-lg"
            style={{
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            Task {index + 1}
          </span>
          <div
            className="ml-auto"
            style={{
              transform: `rotate(${open ? 0 : 180}deg)`,
              transition: "transform 150ms ease 0s",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="18"
              height="18"
              className="icon-btn"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="code p-2"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

interface IHint {
  content: string;
  index: number;
}

const Hint: React.FC<IHint> = ({ content, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex cursor-pointer select-none flex-row items-center border-b border-[color:var(--border-color)] pb-1"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg">Hint {index + 1}</span>
        <div
          className="ml-auto"
          style={{
            transform: `rotate(${open ? 0 : 180}deg)`,
            transition: "transform 150ms ease 0s",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="18"
            height="18"
            className="icon-btn"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            ></path>
          </svg>
        </div>
      </div>{" "}
      {open && (
        <div
          className="code p-2"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};
