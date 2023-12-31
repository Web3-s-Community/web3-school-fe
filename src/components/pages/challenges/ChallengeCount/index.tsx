import { PropsWithChildren } from "react";
interface Props {
  totalCount: number;
  completed: number;
}

const ChallengeCount: React.FC<PropsWithChildren<Props>> = ({
  completed,
  totalCount,
}) => {
  const completedPercent = Math.floor((completed / totalCount) * 100);

  return (
    <>
      <div className="mx-auto mb-5">
        <h3 className="h3 mb-2 px-10 text-center text-slate-900 dark:text-zinc-300">
          {completed} / {totalCount} challenges
        </h3>
        <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-zinc-700">
          <div className="flex flex-row rounded-full overflow-hidden">
            <div
              className="h-4 bg-green-500 rounded-l-full rounded-r-full"
              style={{ width: `${completedPercent}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeCount;
