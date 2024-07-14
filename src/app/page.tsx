"use client";

import { useEffect, useState } from "react";
import StartScreenAndRain1 from "./components/StartScreenAndRain1";
import { story } from "./utils/story";
import { IStory } from "./interfaces/IStory";

export default function Home() {
    const [getName, setName] = useState<string>('');
    const [currentScene, setCurrentScene] = useState<number>(0);
    const [getStory, setStory] = useState<IStory>(story[0]);

    const goNextScene = () => {
        setCurrentScene(currentScene + 1);
    }

    useEffect(() => {
        setStory(story[currentScene]);

    }, [currentScene]);


    return (
        <div className="h-screen w-full text-white bg-black">
            {!getName && <StartScreenAndRain1 setName={setName} />} {/* ให้ผูเล่นกดเริ่มเกมพร้อมกับใส่ชื่อ */}
            {/* พื้นที่จัดการ scenes */}
            {story.map((item, index) => {
                if (index === currentScene) {
                    return (
                        <div key={index}>
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute object-cover w-full h-full"
                                poster={item.backgound}
                            >
                                <source src={item.backgound} type="video/mp4" />
                            </video>
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
                }
            })}
        </div>
    );
}
