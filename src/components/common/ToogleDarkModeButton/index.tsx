import useDarkMode from "@/utils/useDarkMode";
import Image from "next/image";
import { PropsWithChildren } from "react";
interface Props {}

const ToggleDarkModeButton: React.FC<PropsWithChildren<Props>> = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <>
      <div className="flex items-center justify-center p-1">
        <button
          onClick={() => {
            setIsDarkMode((prev) => !prev);
          }}
          className="h-6 w-6 transition duration-100 ease-in-out hover:scale-110"
        >
          <Image
            src={isDarkMode ? "/svgs/moon.svg" : "/svgs/sun.svg"}
            width={24}
            height={24}
            alt="Toggle Dark Mode Button"
          />
        </button>
      </div>
    </>
  );
};

export default ToggleDarkModeButton;
