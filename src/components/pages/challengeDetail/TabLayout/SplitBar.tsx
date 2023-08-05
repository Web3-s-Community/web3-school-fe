import { PropsWithChildren } from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mode: "horizontal" | "vertical";
}

const SplitBar: React.FC<PropsWithChildren<Props>> = ({
  mode,
  onMouseDown,
  ...props
}) => {
  return (
    <>
      <div
        {...props}
        className={
          props.className +
          ` !shadow-none !bg-transparent ${
            mode === "horizontal" ? "!w-[14px]" : "!h-[14px]"
          } after:!hidden before:!hidden`
        }
      >
        <div
          onMouseDown={onMouseDown}
          className="h-full w-full shadow-none bg-transparent hover:bg-[var(--hover-split-bg-color)] transition"
        />
      </div>
    </>
  );
};

export default SplitBar;
