import Navbar from "@/components/common/Navbar";
// import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { SocketProvider } from "@/providers/SocketProvider";

export const metadata: Metadata = {
  title: "Web3School",
  description: "Platform learning web3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"light"}>
        <SocketProvider>
          <Navbar />
          {children}
        </SocketProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
