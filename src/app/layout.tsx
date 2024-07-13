import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MYSTERY MARKET",
  description: "สวัสดีนะเธอที่รัก ยินดีที่ได้รู้จัก เธอชื่ออะไรหรอ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overscroll-none"}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
