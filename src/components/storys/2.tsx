import Image from "next/image";

export default function ButterflyEffect() {
  return (
    <>
      {/* story */}
      <div className="flex flex-col items-center justify-center h-full w-full mt-[-4rem]">
        <div className="relative w-[90%] h-[400px] my-[-4rem] animate-fade animate-ease-out animate-duration-[2500ms]">
          <Image
            priority
            src="/mystery-market/assets/images/butterflyeffect-resize.webp"
            fill
            className="object-contain"
            alt="Mystery Market Logo"
          />
        </div>
        <div className="space-y-[-0.2rem]">
          <p className="animate-fade-up animate-ease-out animate-duration-[1500ms] animate-delay-[1000ms] text-left w-full text-2xl bg-gradient-to-r from-[#E4CCFF] to-[#C2DBFF] inline-block text-transparent bg-clip-text font-bold italic">
            THE BUTTERFLY EFFECT.
          </p>
          <p className="animate-fade animate-ease-out animate-duration-[1500ms] animate-delay-[1500ms] pb-8 text-lg font-bold text-left w-full">
            ทฤษฎีผีเสื้อขยับปีก
          </p>
          <p className="text-left w-full pb-8 animate-fade animate-ease-out animate-duration-[1500ms] animate-delay-[2000ms]">
            แนวคิดที่อธิบายว่าการเปลี่ยนแปลงเล็ก ๆ<br />
            อาจนำไปสู่ผลกระทบใหญ่โตในอนาคตได้
            <br />
          </p>
          <p className="text-left w-full pb-8 animate-fade animate-ease-out animate-duration-[1500ms] animate-delay-[3000ms]">
            “It has been said that something as small as
            <br />
            the flutter of a butterfly’s wing can utimately
            <br />
            cause a typhoon halfway around the world”
          </p>
          <p className="w-full text-sm text-right animate-fade animate-ease-out animate-duration-[2500ms]">
            - Chaos Theory
          </p>
        </div>
      </div>
    </>
  );
}
