import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function MarketTextField() {
  const [message, setMessage] = useState<string>("");
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
  const [screenKeep, setScreenKeep] = useLocalStorage<number[]>(
    "screenKeep",
    []
  );
  const [messageStore, setMessageStorage] = useLocalStorage<string>("message", "");

  const onNextSceneButton = () => {
    const nextScene = 204;
    if (message) {
      setMessageStorage(message);
      setCurrentScene(nextScene);
      setScreenKeep([...screenKeep, nextScene]);
    }
  };

  return (
    <>
      <div>
        <p>
          คุณรู้สึกแปลกใจที่เสียงร้องไห้ของเด็กคนนั้นคุ้น
          <br />
          เคยแปลกประหลาด ดังนั้นคุณจึงตัดสินใจเข้าไป
          <br />
          พูดคุยกับเด็กคนนั้น และซื้อขนมให้เด็กคนนั้นอย่างหนึ่ง
          <br />
          ...........
          <br />
          ก่อนจากลา คุณต้องการจะให้กำลังใจเด็กน้อยคนนั้น
          <br />
          จึงเขียนกระดาษโน๊ตว่า
        </p>
      </div>
      <div className="mt-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={40}
          rows={10}
          className="bg-gray-400 bg-opacity-40 rounded-xl shadow-sm shadow-black/15 py-2 px-4 focus:outline-none focus:border-white placeholder:text-slate-200"
          placeholder="กรุุณาเขียนข้อความต้องการให้กำลังใจเด็กน้อยคนนั้น"
        ></textarea>
        <button
          onClick={onNextSceneButton}
          className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-2 py-2 px-8 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10 border"
        >
          <span>ถัดไป</span>
          <Icon
            icon="ic:baseline-navigate-next"
            className="border bg-white text-black rounded-full hover:cursor-pointer"
          />
        </button>
      </div>
    </>
  );
}
