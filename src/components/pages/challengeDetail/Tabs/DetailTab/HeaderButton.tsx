import { PropsWithChildren } from "react";

interface IHeaderButton {
  onClick: () => void;
  isActive: boolean;
  style?: React.CSSProperties;
}

const HeaderButton: React.FC<PropsWithChildren<IHeaderButton>> = ({
  onClick,
  children,
  isActive,
  style,
}) => {
  return (
    <button
      className={`mx-2 tab ${isActive ? "tab-active" : ""}`}
      disabled={isActive}
      style={style}
      onClick={onClick}
    >
      <div className="flex flex-row items-center">{children}</div>
    </button>
  );
};

export default HeaderButton;
