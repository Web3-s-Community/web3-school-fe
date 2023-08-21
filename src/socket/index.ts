import { SOCKET_URL } from "@/constants";
import { io } from "socket.io-client";

console.log(`Socket url got: ${SOCKET_URL}`)
export const socket = io("wss://socket.web3school.fun/ws");
