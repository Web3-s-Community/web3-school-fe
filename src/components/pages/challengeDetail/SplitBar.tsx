import { PropsWithChildren } from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mode: "horizontal" | "vertical";
}

const SplitBar: React.FC<PropsWithChildren<Props>> = ({
  mode,
  onMouseDown,
  ...props
}) => {
  const thicknessClass = `${mode === "horizontal" ? "w" : "h"}-[14px]`;
  return (
    <>
      <div
        {...props}
        className={
          props.className +
          ` !shadow-none !bg-transparent !${thicknessClass} after:!hidden before:!hidden`
        }
      >
        <div
          onMouseDown={onMouseDown}
          className="shadow-none bg-transparent hover:bg-[var(--hover-split-bg-color)] transition"
        />
      </div>
    </>
  );
};

export default SplitBar;
