"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
    setName: Dispatch<SetStateAction<string>>;
}

export default function StartScreenAndRain1(prop: IProps) {
    const [isStart, setIsStart] = useState<boolean>(false);
    const [getName, setName] = useState<string>('');

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    useEffect(() => {
        if (isSubmit) {
            if (getName === '') {
                // message error
            } else {
                // start game
                prop.setName(getName);
                setIsSubmit(false);
            }
        }
        return () => {
            setIsSubmit(false);
        }
    }, [isSubmit]);
    return (
        <>
            <video
                autoPlay
                loop
                muted
                className="absolute object-cover w-full h-[calc(100dvh)]"
            >
                <source src="/mystery-market/assets/background/rainbackground.mp4" type="video/mp4" />
            </video>
            <div className="relative flex flex-col items-center justify-between h-[calc(100dvh)] w-full py-4">
                {!isStart ? <>
                    {/* logo */}
                    <div className="flex flex-col items-center justify-center h-auto w-full">
                        <Image src="/mystery-market/assets/images/KUTechWhite 1.png" width={60} height={60} alt="KUTech Logo" />
                    </div>
                    {/* ชื่อเกม */}
                    <div className="flex flex-col items-center justify-center h-[calc(100dvh)] w-full">
                        <div className="relative w-[95vw] h-[250px]">
                            <Image src="/mystery-market/assets/images/mystery-market-logo.png" fill className="object-contain" alt="Mystery Market Logo" />
                        </div>
                        <button className="px-10 py-2 rounded-lg bg-white/30 backdrop-blur-sm shadow-2xl" onClick={() => setIsStart(true)}>เริ่มเล่น</button>
                    </div>
                    {/* social media */}
                    <div className="flex flex-col items-center h-auto w-full gap-2">
                        <div className="flex flex-row justify-center w-full gap-4">
                            <Link href="https://www.instagram.com/ku.t3ch/" className="flex flex-col flex-center items-center hover:cursor-pointer">
                                <Icon icon="bi:instagram" width={32} height={32} />
                                <small>ku.t3ch</small>
                            </Link>
                            <Link href="https://www.facebook.com/ku.t3ch" className="flex flex-col flex-center items-center hover:cursor-pointer">
                                <Icon icon="bi:facebook" width={32} height={32} />
                                <small>KU Tech</small>
                            </Link>
                        </div>
                        <p className="text-white">tech.nisit.ku.ac.th/mystery-market</p>
                    </div>
                </> : <>
                    <div className="px-5 flex flex-col items-center justify-center h-full w-full gap-[75px]">
                        <div className="flex flex-col text-center p-5 w-full bg-white bg-opacity-20 shadow-2xl hover:bg-opacity-50 rounded-xl">
                            <p>สวัสดีนะ</p>
                            <p>เธอที่รัก</p>
                            <p>ยินดีที่ได้รู้จัก</p>
                            <p>เธอชื่ออะไรเหรอ...</p>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center gap-[25px]">
                            <input type="search" className="w-full px-5 py-2 mt-2 bg-white bg-opacity-20 shadow-2xl hover:bg-opacity-50 rounded-xl placeholder:text-gray-700 border" placeholder="ชื่อของเธอ" onChange={(e) => setName(e.target.value)} />
                            <button className="w-1/2 px-10 py-2 rounded-lg bg-white/30 backdrop-blur-sm shadow-2xl" onClick={() => setIsSubmit(true)}>เริ่มเล่น</button>
                        </div>
                    </div>
                </>}
            </div>
        </>
    );
}