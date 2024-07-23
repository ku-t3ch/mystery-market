import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

export default function Market01() {
    const [isAlone, setIsAlone] = useLocalStorage<boolean>('isAlone', true);
    const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);


    return (
        <>
            {/* story */}
            {isAlone ?
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <div className="p-4">
                        เดินไปที่บูธอาหาร<br />แต่ที่นี่มีอาหารมากมายจนเลือกไม่ถูก<br />และด้วยงบที่มีจำกัด คุณจึงเลือกซื้อ
                    </div>
                    <div className="flex flex-col gap-4 pb-8">
                        <button onClick={() => setCurrentScene(16)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">1</p>
                            <p className="text-center w-full">เมนูซิกเนเจอร์ของทางร้าน พลาดไม่ได้</p>
                        </button>
                        <button onClick={() => setCurrentScene(16)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">2</p>
                            <p className="text-center w-full">เมนูที่กินบ่อยๆเป็นประจำอยู่แล้ว ไม่เปลี่ยนแปลง</p>
                        </button>
                    </div>
                </div> : <div className="flex flex-col items-center justify-center h-full w-full mt-[-4rem]">
                    <div className="p-4">
                        คุณและเพื่อนไปที่บูธอาหาร<br />ที่นี่มีอาหารมากมายจนเลือกไม่ถูก<br />และด้วยงบที่มีจำกัด คุณจึงเลือกซื้อ
                    </div>
                    <div className="flex flex-col gap-4 pb-8">
                        <button onClick={() => setCurrentScene(16)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">1</p>
                            <p className="text-center w-full">ให้เพื่อนเป็นคนตัดสินใจเลือกเมนูอาหาร</p>
                        </button>
                        <button onClick={() => setCurrentScene(16)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">2</p>
                            <p className="text-center w-full">ให้เราเป็นคนตัดสินใจเลือกเมนูอาหาร</p>
                        </button>
                    </div>
                </div>}
        </>
    );
}