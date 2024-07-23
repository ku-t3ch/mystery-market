"use client";
import Image from "next/image";
import Background from "@/../../public/assets/background/resulte_rainbow.png";
import Qrcode from "@/../../public/assets/images/qr-code.png";
import Link from "next/link";
import { useState } from "react";
import { La_Belle_Aurore } from "next/font/google";
import Lily from "@/app/components/3d_components/lily";
import NavBarResult from "@/app/components/result_components/NavbarResult";
import FooterResult from "@/app/components/result_components/FooterResult";

const title = La_Belle_Aurore({ subsets: ["latin"], weight: "400" });
export default function ForgetPage() {
  const [pageTitle, setPageTitle] = useState("forget");
  const [message, setMessage] = useState(
    `ถึงเธอที่รัก เธอช่างเหมือนดั่งดอกแวววิเชียร์ 
    ในยามค่ำ คุณมักชื่นชอบอยู่ในความสงบและ
    มีความเข้าใจในอารมณ์สุนทรีย์สูงความลับที่ไม่เปิดเผยและการดื่มด่ำไปโลกจินตนาการอันแสนวิเศษคือเสน่ห์ของคุณ`
  );
  return (
    <>
    <div
    className="h-screen relative"
      style={{
        backgroundImage: `url(${Background.src})`,
        // background: `linear-gradient(135deg, #93c5fd, #f9a8d4)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <div className="flex  w-screen   flex-col ">
        <NavBarResult />

        <div className="flex justify-center w-full ">
          <Lily />
        </div>
        {/* --------------------------text */}
        <div className="flex justify-center flex-col w-full">
          <div className="flex  h-[114px] left-[258px] top-[387px]   mb-4  justify-center p-5 gap-5">
            <div className="flex flex-col w-[130px] h-[54px] left-[18px] top-[399px]  text-center text-[#352f36]  font-normal  leading-[96px] mr-20  text-5xl">
              <p className={title.className}>{pageTitle}</p>
              <br />
            </div>

            <div className="flex  flex-col ">
              <Image
                className="w-[100px] h-[100px] left-0 top-0 "
                src={Qrcode}
                alt="Qrcode"
              />
              <div className="left-[7px] top-[96px] text-center text-zinc-600 text-xs font-normal leading-[18px] mt-1">
                หาดอกไม้ของคุณ?
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex flex-col  top-[517px]  text-zinc-800 text-base font-normal font-['IBM Plex Sans Thai'] leading-[30px] m-3 text-left mt-6 ">
              {message.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            </div>

          {/* -------------------------button */}
          <div className="flex justify-center mt-3 ">
            <Link href="/">
              <div className=" w-[130px] h-10 px-[30px] py-2.5 bg-white/opacity-20 rounded-xl border border-purple-200 justify-center items-center gap-2.5 inline-flex mr-5">
                <div className="text-center text-zinc-600 text-base font-medium font-['IBM Plex Sans Thai'] leading-tight">
                  หน้าหลัก
                </div>
              </div>
            </Link>
            <a
              href="https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png"
              download
            >
              <div className=" w-[160px] h-10 px-[30px] py-2.5 bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-zinc-600 text-base font-medium font-['IBM Plex Sans Thai'] leading-tight">
                  บันทึกรูปภาพ
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* ----------------------endButton */}
        {/* --------------------------------footer */}

        {/* -------------------------------------endFooter */}
      </div>
      {/* ------------------------------------- */}
    {/* </div> */}
    <div className=" absolute  bottom-4 w-full ">
      <FooterResult />
    </div>
  </div>
  {/* ------------------ */}

  </>
  );
}