import { SocketContext } from "@/providers/SocketProvider";
import { useContext } from "react";

export const useSocketProvider = () => {
  const { isLoading, setIsLoading } = useContext(SocketContext);
  return {
    isLoading,
    setIsLoading,
  };
};
