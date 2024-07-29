import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import ClarityScript from "../components/ClarityScript";

const ibm = IBM_Plex_Sans_Thai({ weight: ["400", "700"], subsets: ["thai"] });

export const metadata: Metadata = {
  title: "MYSTERY MARKET",
  description: "ค้นหาดอกไม้ของคุณในตลาดน้ำราตรีแห่งแสงจันทร์",
  metadataBase: new URL("https://mystery-market.netlify.app/mystery-market"),
  manifest: "/mystery-market/site.webmanifest",
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
