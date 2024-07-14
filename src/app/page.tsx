"use client";

import { useState } from "react";
import StartScreenAndRain1 from "./components/StartScreenAndRain1";
import { story } from "./utils/story";
import Image from "next/image";

export default function Home() {
    const [getName, setName] = useState<string>('');
    const [currentScene, setCurrentScene] = useState<number>(0);

    const goNextScene = () => {
        setCurrentScene(currentScene + 1);
    }

    return (
        <div className="h-screen w-full text-white bg-black">
            {!getName && <StartScreenAndRain1 setName={setName} />} {/* ให้ผูเล่นกดเริ่มเกมพร้อมกับใส่ชื่อ */}
            {/* พื้นที่จัดการ scenes */}
            {getName && story.map((item, index) => {
                if (currentScene !== index) return null;
                return (
                    <div key={index} className="h-screen w-full">
                        {item.background.includes('.mp4') ? <>
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute object-cover w-full h-full"
                            >
                                <source src={item.background} type="video/mp4" />
                            </video>
                        </> : <>
                            <div className="absolute object-cover w-full h-full">
                                <Image src={item.background} priority layout="fill" objectFit="cover" alt="background" />
                            </div>
                        </>
                        }


                        <div key={index} className="relative flex flex-col items-center justify-center h-screen w-full px-3 mb-8 text-center">
                            <div className="bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-sm shadow-black/20 w-full p-6 rounded-xl">
                                <div dangerouslySetInnerHTML={{ __html: item.title || '' }} className="font-extrabold pt-4" onClick={goNextScene} />
                                <div dangerouslySetInnerHTML={{ __html: item.story || '' }} onClick={goNextScene} className="p-4" />
                                <div className="flex flex-col gap-4 pb-8">
                                    {item.choice && item.choice.map((choice, index) => {
                                        return (
                                            <button key={index} onClick={goNextScene} className="rounded-xl p-4 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-sm shadow-black/20">{choice}</button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
