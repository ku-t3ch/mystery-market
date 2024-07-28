import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import SocialMedia from "../SocialMedia";

export default function Start() {
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);

  return (
    <>
      {/* logo */}
      <div className="flex flex-col items-center justify-center h-auto w-full animate-fade-up animate-ease-out animate-duration-[1500ms] ">
        <Image
          src="/mystery-market/assets/images/KUTechWhite 1.png"
          width={60}
          height={60}
          alt="KUTech Logo"
        />
      </div>
      {/* ชื่อเกม */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="relative w-[80%] h-[250px] animate-fade-up animate-ease-out animate-duration-[1500ms] animate-delay-500">
          <Image
            src="/mystery-market/assets/images/mystery-market-logo-resize.webp"
            fill
            className="object-contain"
            alt="Mystery Market Logo"
          />
        </div>
        <button
          className="px-10 py-2 rounded-lg bg-white/30 backdrop-blur-sm shadow-2xl animate-fade-up animate-ease-out animate-duration-[1500ms] animate-delay-[1000ms]"
          onClick={() => setCurrentScene(1)}
        >
          เริ่มเล่น
        </button>
      </div>
      {/* social media */}
      <div className="animate-fade-up animate-ease-out animate-delay-[1500ms] animate-duration-[1500ms]">
        <SocialMedia />
      </div>
    </>
  );
}
