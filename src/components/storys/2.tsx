import Image from "next/image";

export default function ButterflyEffect() {
    return (
        <>
            {/* story */}
            <div className="flex flex-col items-center justify-center h-full w-full mt-[-4rem]">
                <div className="relative w-[90%] h-[400px] my-[-4rem]">
                    <img src="/mystery-market/assets/images/butterflyeffect-resize.webp" className="object-contain" alt="Mystery Market Logo" />
                </div>
                <div className="space-y-[-0.2rem]">
                    <p className="text-left w-full text-2xl bg-gradient-to-r from-[#E4CCFF] to-[#C2DBFF] inline-block text-transparent bg-clip-text font-bold italic">THE BUTTERFLY EFFECT.</p>
                    <p className="pb-8 text-lg font-bold text-left w-full">ทฤษฎีผีเสื้อขยับปีก</p>
                    <p className="text-left w-full pb-8">
                        แนวคิดที่อธิบายว่าการเปลี่ยนแปลงเล็ก ๆ<br/>อาจนำไปสู่ผลกระทบใหญ่โตในอนาคตได้<br/><br/>
                        “It has been said that something as small as<br/>the flutter of a butterfly’s wing can utimately<br/>cause a typhoon halfway around the world”
                    </p>
                    <p className="w-full text-sm text-right">- Chaos Theory</p>
                </div>
            </div>
        </>
    );
}