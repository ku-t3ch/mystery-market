import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import ClarityScript from "./components/ClarityScript";

const ibm = IBM_Plex_Sans_Thai({ weight: ["400", "700"], subsets: ["thai"] });

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
      <body className={ibm.className + " overscroll-none"}>
        <ClarityScript />
        {children}
      </body>
    </html>
  );
}
