import { useEffect, useRef, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setIsDarkMode(document.body.className === "dark");
    } else {
      const className = isDarkMode ? "dark" : "light";
      document.body.className = className;
    }
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
};

export default useDarkMode;
