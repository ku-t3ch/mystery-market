import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function UserEnterName() {
    const [getName, setName] = useLocalStorage<string>("name", '');
    const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
    const [screenKeep, setScreenKeep] = useLocalStorage<number[]>('screenKeep', []);

    const onNextSceneButton = () => {
        if (getName) {
            setCurrentScene(3);
            setScreenKeep([...screenKeep, 3]);
        }
    }
    
    return (
        <>
            {/* story */}
            <div className="flex flex-col items-center justify-center h-full w-full gap-8">
                <p>
                    <span className="text-primary-blue">สวัสดีนะ </span><span>เธอที่รัก</span>
                    <p>ยินดีที่ได้รู้จัก</p>
                    <p>เธอชื่ออะไรหรอ...</p>
                </p>
                <input type="text" value={getName} className="bg-transparent rounded-xl text-center backdrop-filter backdrop-blur-lg shadow-sm shadow-black/15 py-2 px-4 focus:outline-none focus:border-white" placeholder="กรุณากรอกชื่อเล่น" onChange={(e) => setName(e.target.value)}/>
                <button onClick={onNextSceneButton} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-2 py-2 px-8 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10 border">
                    <span>ถัดไป</span>
                    <Icon icon="ic:baseline-navigate-next" className="border bg-white text-black rounded-full hover:cursor-pointer" />
                </button>
            </div>
        </>
    );
}