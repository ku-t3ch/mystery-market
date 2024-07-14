"use client";

import { useEffect, useState } from "react";
import StartScreenAndRain1 from "./story/StartScreenAndRain1";
// ibm san text

export default function Home() {
    const [isStart, setIsStart] = useState<boolean>(false);
    const [getName, setName] = useState<string>('');

    useEffect(() => {
        if (isStart) {
            console.log("Start Game");
            console.log(getName);
        }
    }, [isStart, getName]);

    return (
        
        <div className="h-screen w-full text-white bg-black">
            {!getName && <StartScreenAndRain1 setName={setName} />} {/* ให้ผูเล่นกดเริ่มเกมพร้อมกับใส่ชื่อ */}
            {/* พื้นที่จัดการ scenes */}
            {getName} {isStart? "hhh": "xxx"}

        
        </div>
    );
}
