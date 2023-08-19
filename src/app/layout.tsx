import Navbar from "@/components/common/Navbar";
// import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { SocketProvider } from "@/providers/SocketProvider";

export const metadata: Metadata = {
  title: "Web3School",
  description: "Master Blockchain Coding Through Play Games",
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
          <div style={{display: 'flex'}}>
            <Navbar />
            {children}
          </div>
        </SocketProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
