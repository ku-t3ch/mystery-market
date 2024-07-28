"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

type TitleKeys = "lily" | "sunflower" | "lavender" | "rose" | "forgetmenot";

interface TitleInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
}

const Title: Record<TitleKeys, TitleInfo> = {
  lily: {
    name: "lily",
    title: "Lily",
    subtitle: "เธอคือความสุขของฉัน",
    description:
      "ถึงเธอที่รัก เธอช่างเหมือนดั่งลิลลี่ในยามบ่ายคุณมักช่างสงสัยใคร่รู้เและเปิดกว้างกับเรื่องใหม่ๆตลอดการเผชิญความท้าทายใหม่ๆและมีความคิดสร้างสรรค์อันยอดเยี่ยมคือเสน่ห์ของคุณ",
  },
  sunflower: {
    name: "sunflower",
    title: "Sunflower",
    subtitle: "รักเพียงเธอผู้เดียว",
    description:
      "ถึงเธอที่รัก เธอช่างเหมือนดั่งดอกทานตะวัน ในยามเช้าตรู่ คุณมักจะเป็นความสดใสและเข้ากับผู้อื่นได้ง่าย ความตื่นเต้นสนุกสนานและการมองโลกในแง่ดี อันไร้ขีดจำกัดคือเสน่ห์ของคุณ",
  },
  lavender: {
    name: "lavender",
    title: "Lavender",
    subtitle: "ใส่ใจเธออยู่ตลอด",
    description:
      "ถึงเธอที่รัก เธอช่างเหมือนดั่งดอกลาเวนเดอร์ ในยามเย็น คุณมักจะชอบใส่ใจรายละเอียดและความรับผิดชอบต่องานที่ทำสูง ความพิถีพิถันปราณีตและการควบคุมอารมณ์ที่เป็นเลิศคือเสน่ห์ของคุณ",
  },
  rose: {
    name: "rose",
    title: "Rose",
    subtitle: "ฉันยอมรับเธอได้ทุกอย่าง",
    description:
      "ถึงเธอที่รัก เธอช่างเหมือนดั่งดอกกุหลาบ ในยามสาย คุณมักจะเป็นคนที่เข้าใจและพร้อมสนับสนุนทุกคนเสมอ ความสวยงามอันมีเสน่ห์และความอ่อนน้อมถ่อมตน อันไร้ที่ติคือเสน่ห์ของคุณ",
  },
  forgetmenot: {
    name: "forgetmenot",
    title: "Forget Me Not",
    subtitle: "สัญลักษณ์ของรักแท้",
    description:
      "ถึงเธอที่รัก เธอช่างเหมือนดั่งดอกแวววิเชียร์ ในยามค่ำ คุณมักชื่นชอบอยู่ในความสงบและมีความเข้าใจในอารมณ์สุนทรีย์สูง ความลับที่ไม่เปิดเผยและการดื่มด่ำไปโลกจินตนาการอันแสนวิเศษคือเสน่ห์ของคุณ",
  },
};

export default function Page({ params }: { params: { slug: TitleKeys } }) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const data = Title[params.slug];
  if (!data) {
    notFound();
  }

  return (
    <>
      {isLoading && (
        <div className="text-secondary-white fixed inset-0 flex flex-col items-center justify-center bg-primary-dark z-50">
          <div className="text-2xl font-bold">Mystery Market</div>
          <div className="text-sm">กำลังโหลดบทสรุป...</div>
        </div>
      )}
      <div className=" h-full text-secondary-dark">
        <div className="relative h-screen  mx-auto max-w-md w-full bg-primary-white animate-fade animate-duration-[2000ms] animate-ease-out">
          <div className="absolute max-w-md w-full  inset-0 right-0 left-0 m-auto">
            <Image
              src={`/mystery-market/assets/result/background/${data.name}-bg.webp`}
              fill
              alt="background"
              className="w-full h-full inset-0 "
              // quality={100}
            />
          </div>
          {/* <div className="rounded-3xl opacity-90 absolute inset-4 bg-gradient-to-b from-transparent via-white/10 to-white"></div> */}

          <div className="flex justify-center items-center absolute left-8 top-4 animate-fade-up animate-ease-out animate-duration-[1500ms]">
            <Image
              src="/mystery-market/assets/images/KUTechBlack.webp"
              width={60}
              height={60}
              alt="KUTech Logo"
            />
          </div>
          <div className="absolute top-8 flex flex-col items-center opacity-90 ">
            <div className="bg-gradient-to-b from-transparent m-4 pb-4 rounded-3xl via-white/10 to-white">
              {isClient && (
                <video
                  autoPlay
                  loop
                  muted
                  poster={`/mystery-market/assets/result/flowers-img/${data.name}-img.webp`}
                  playsInline
                  onLoadedData={handleLoadedData}
                  className="px-4"
                >
                  <source
                    src={`/mystery-market/assets/result/flowers/${data.name}.webm`}
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="flex justify-between px-8 w-full ">
                <div className="flex flex-col justify-center">
                  <div className="text-4xl font-bold">{data.title}</div>
                  <div className="text-sm pt-1 ">{data.subtitle}</div>
                </div>
                <div className="opacity-80  flex flex-col justify-center items-center">
                  <Image
                    src="/mystery-market/assets/images/qrcode.png"
                    width={100}
                    height={100}
                    alt="background"
                  />
                  <div className="pt-1 text-xs tracking-tight">
                    หาดอกไม้ของคุณ?
                  </div>
                </div>
              </div>
              <div className="px-8 pt-4 text-md">{data.description}</div>
              <div className="px-8 flex justify-between gap-4 w-full pt-6">
                <Link href={"/"} className="w-full">
                  <button className="w-full h-12 font-medium border-gray-500/30 border-2 rounded-xl">
                    <div>กลับไปหน้าหลัก</div>
                  </button>
                </Link>
                <button className="w-full h-12 font-medium bg-gradient-to-r from-[#E4CCFF] to-[#C2DBFF] rounded-xl">
                  <div className="">บันทึกรูปภาพ</div>
                </button>
              </div>
              <div className="pt-8">
                <SocialMedia />
              </div>
            </div>
            <Icon
              className="flex animate-bounce"
              icon="fe:arrow-down"
              width={36}
              height={36}
            />
            <div className="bg-primary-white w-full max-w-md pb-8">
              <Credit />
            </div>
          </div>
        </div>
        <div className="text-secondary-dark h-screen gap-4 py-4 flex flex-col items-center mx-auto max-w-md w-full bg-primary-white "></div>
        {/* <div className="text-secondary-dark h-screen gap-4 py-4 flex flex-col items-center mx-auto max-w-md w-full bg-primary-white "></div> */}
      </div>
    </>
  );
}

function Credit() {
  return (
    <>
      <div className="text-center text-4xl font-bold">Credit </div>
      <div className="pt-1 flex flex-col items-center gap-1">
        <div className="text-sm">Developed By</div>
        <Image
          src="/mystery-market/assets/images/KUTechBlack.webp"
          width={80}
          height={80}
          alt="KUTech Logo"
        />
        <div className="text-lg font-bold pt-1">Project Manager</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs ">Theerapong Mungcharoen</div>
        </div>
        <div className="text-lg font-bold pt-4">Story</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs ">Jitlada Yotinta</div>
          <div className="text-xs ">Lullalil Jupanich</div>
          <div className="text-xs ">Thananon Mahaphasukwat</div>
        </div>
        <div className="text-lg font-bold pt-4">Graphic Designer</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs ">Lullalil Jupanich</div>
          <div className="text-xs ">Kanpitcha Chamaiklang</div>
          <div className="text-xs ">Theerapong Mungcharoen</div>
        </div>
        <div className="text-lg font-bold pt-4">UX/UI</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs ">Natdanai Pinaves</div>
          <div className="text-xs ">Theerapong Mungcharoen</div>
          <div className="text-xs ">Panupong Lertveeranontarat</div>
          <div className="text-xs ">Karitthorn Bamrungpipattanporn</div>
        </div>
        <div className="text-lg font-bold pt-4">Front-end Developer</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs ">Jariyawat Pisin</div>
          <div className="text-xs ">Teerut Srithongdee</div>
          <div className="text-xs ">Weeranut Chayakul</div>
          <div className="text-xs ">Thanakirt Trakanjan</div>
          <div className="text-xs ">Phumrapee Soenvanichakul</div>
          <div className="text-xs ">Panupong Lertveeranontarat</div>
          <div className="text-xs ">Karitthorn Bamrungpipattanporn</div>
        </div>
        <div className="text-lg font-bold pt-4">Dev Ops</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs ">Teerut Srithongdee</div>
        </div>
      </div>
    </>
  );
}

function TopLogo() {
  return <></>;
}

function SocialMedia() {
  return (
    <>
      <div className="flex flex-col items-center gap-1  text-xs text-secondary-dark ">
        <div className="flex flex-row justify-center w-full gap-2">
          <Link
            href="https://www.instagram.com/ku.t3ch/"
            className="flex flex-col flex-center items-center hover:cursor-pointer"
          >
            <Icon icon="bi:instagram" width={24} height={24} />
            <div className="pt-1">ku.t3ch</div>
          </Link>
          <Link
            href="https://www.facebook.com/ku.t3ch"
            className="flex flex-col flex-center items-center hover:cursor-pointer"
          >
            <Icon icon="bi:facebook" width={24} height={24} />
            <div className="pt-1">KU Tech</div>
          </Link>
        </div>
        <Link
          href="https://tech.nisit.ku.ac.th/mystery-market"
          className="flex flex-row justify-center items-center gap-1"
        >
          <Icon icon="tabler:external-link" width={12} height={12} />
          <div>tech.nisit.ku.ac.th/mystery-market</div>
        </Link>
      </div>
    </>
  );
}
