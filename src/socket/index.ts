import { io } from "socket.io-client";
const URL = "localhost:12345";
export const socket = io(URL);
