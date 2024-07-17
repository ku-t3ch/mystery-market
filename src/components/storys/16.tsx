import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

export default function Market02() {
    const [isAlone, setIsAlone] = useLocalStorage<boolean>('isAlone', true);
    const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);


    return (
        <>
            {/* story */}
            {isAlone ?
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <div className="p-4">
                        ระหว่างที่คุณนั่งรออาหารอยู่<br />สายตาของคุณเห็นบางสิ่งขยับอยู่ในกล่อง.....
                    </div>
                    <div className="flex flex-col gap-4 pb-8">
                        <button onClick={() => setCurrentScene(202)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">1</p>
                            <p className="text-center w-full">ค่อยๆเดินเข้าไปดู</p>
                        </button>
                        <button onClick={() => setCurrentScene(202)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">2</p>
                            <p className="text-center w-full">เดินเข้าไปดูทันที...</p>
                        </button>
                        <button onClick={() => setCurrentScene(201)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">2</p>
                            <p className="text-center w-full">นั่งอยู่เฉยๆ...</p>
                        </button>
                    </div>
                </div> : <div className="flex flex-col items-center justify-center h-full w-full mt-[-4rem]">
                    <div className="p-4">
                        ระหว่างที่คุณนั่งรออาหารอยู่<br />สายตาของคุณเห็นบางสิ่งขยับอยู่ในกล่อง.....
                    </div>
                    <div className="flex flex-col gap-4 pb-8">
                        <button onClick={() => setCurrentScene(302)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">1</p>
                            <p className="text-center w-full">ไม่ได้พูดอะไร ไม่สนใจ นั่งอยู่กับที่เดิม</p>
                        </button>
                        <button onClick={() => setCurrentScene(301)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">2</p>
                            <p className="text-center w-full">บอกเพื่อนไปดูกล่องให้หน่อย</p>
                        </button>
                        <button onClick={() => setCurrentScene(303)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                            <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">2</p>
                            <p className="text-center w-full">ลุกเดินไปดูกล่องเอง</p>
                        </button>
                    </div>
                </div>}
        </>
    );
}