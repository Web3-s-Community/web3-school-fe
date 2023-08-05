import { PropsWithChildren } from "react";
interface Props {
  style?: React.CSSProperties;
}

const TabWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  style,
}) => {
  return (
    <>
      <div
        className="flex h-full flex-col rounded-lg border border-[color:var(--border-color)] bg-[color:var(--bg-1)] overflow-x-hidden"
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export default TabWrapper;
