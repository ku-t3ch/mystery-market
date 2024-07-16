import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";

export default function Start() {
    const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);

    return (
        <>
            {/* logo */}
            <div className="flex flex-col items-center justify-center h-auto w-full">
                <Image src="/mystery-market/assets/images/KUTechWhite 1.png" width={60} height={60} alt="KUTech Logo" />
            </div>
            {/* ชื่อเกม */}
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="relative w-[95vw] h-[250px]">
                    <Image src="/mystery-market/assets/images/mystery-market-logo.png" fill className="object-contain" alt="Mystery Market Logo" />
                </div>
                <button className="px-10 py-2 rounded-lg bg-white/30 backdrop-blur-sm shadow-2xl" onClick={() => setCurrentScene(1)}>เริ่มเล่น</button>
            </div>
            {/* social media */}
            <div className="flex flex-col items-center h-auto w-full gap-2">
                <div className="flex flex-row justify-center w-full gap-4">
                    <Link href="https://www.instagram.com/ku.t3ch/" className="flex flex-col flex-center items-center hover:cursor-pointer">
                        <Icon icon="bi:instagram" width={32} height={32} />
                        {/* <small>ku.t3ch</small> */}
                    </Link>
                    <Link href="https://www.facebook.com/ku.t3ch" className="flex flex-col flex-center items-center hover:cursor-pointer">
                        <Icon icon="bi:facebook" width={32} height={32} />
                        {/* <small>KU Tech</small> */}
                    </Link>
                </div>
                <Link href="https://tech.nisit.ku.ac.th/mystery-market" className="text-white flex flex-row justify-center items-center gap-1"><Icon icon="tabler:external-link" />tech.nisit.ku.ac.th/mystery-market</Link>
            </div>
        </>
    )
}