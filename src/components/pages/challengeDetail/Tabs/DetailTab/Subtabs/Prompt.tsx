import Tag from "@/components/pages/challenges/FilterBar/Tag";
import { PropsWithChildren } from "react";
interface Props {
  title: string;
  language: string;
  difficulty: string;
  tags: string[];
  points: number;
  prompt: string;
}

const Prompt: React.FC<PropsWithChildren<Props>> = ({
  title,
  language,
  difficulty,
  tags,
  points,
  prompt,
}) => {
  return (
    <div className="h-full overflow-y-scroll px-3 py-4">
      <div className="flex flex-row items-center">
        <h1 className="text-3xl">{title}</h1>
      </div>
      <div className="my-1 flex flex-row space-x-1">
        {[language, difficulty, ...tags].map((cate) => (
          <Tag key={cate} displayName={cate} />
        ))}
      </div>
      <div>{points} points</div>
      <div
        className="code mt-2 text-[color:var(--color-1)]"
        dangerouslySetInnerHTML={{ __html: prompt }}
      ></div>
    </div>
  );
};

export default Prompt;
