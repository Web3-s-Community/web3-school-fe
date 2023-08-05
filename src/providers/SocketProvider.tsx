"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const SocketContext = createContext({
  isLoading: false,
  setIsLoading: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export const SocketProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SocketContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
