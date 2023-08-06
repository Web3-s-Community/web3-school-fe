import { SOCKET_URL } from "@/constants";
import { io } from "socket.io-client";
export const socket = io(SOCKET_URL);
