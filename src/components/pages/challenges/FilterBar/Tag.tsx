import { PropsWithChildren, useMemo } from "react";
import styles from "./styles.module.css";

interface TagProps {
  type: "status" | "language" | "difficulty" | "free";
  displayName: string;
  onClick?: () => void;
}

const Tag: React.FC<PropsWithChildren<TagProps>> = ({
  type,
  displayName,
  onClick,
}) => {
  const tagClass = useMemo(() => {
    if (type === "status") return styles.Tag_default;
    else return styles[`Tag_${displayName}`];
  }, [type, displayName]);

  return (
    <>
      <div className={!!onClick ? "px-1" : ""}>
        <button
          className={`flex flex-row items-center whitespace-nowrap rounded-lg py-1 px-2 text-center text-sm font-semibold leading-none ${tagClass}`}
          onClick={onClick}
        >
          <span>{displayName}</span>
          {!!onClick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="14"
              height="14"
              fill="currentColor"
              className="ml-1"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};
export default Tag;
