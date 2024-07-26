import React from "react";
import { useLocalStorage } from "usehooks-ts";

type Props = {};

export default function EndingNote({}: Props) {
  const [message] = useLocalStorage<string>("message", "");
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
  const [screenKeep, setScreenKeep] = useLocalStorage<number[]>(
    "screenKeep",
    []
  );

  const onNextSceneButton = () => {
    const nextScene = 17;
    if (message) {
      setCurrentScene(nextScene);
      setScreenKeep([...screenKeep, nextScene]);
    }
  };
  return (
    <>
      <div>
        คุณลุกขึ้นมาพบว่า
        <br />
        มีกระดาษโน๊ตและดอกไม้วางข้างคู่กัน
        <p>คุณหยิบกระดาษ</p>
      </div>
      <div className="w-[70%] mx-auto my-2">
        <div className="bg-gray-400 bg-opacity-40 rounded-md shadow-sm shadow-black/15 py-2 px-4 focus:outline-none focus:border-white">
          {message}
        </div>
      </div>
      <div className="mt-2">
        <button
          onClick={() => onNextSceneButton()}
          className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-2 py-2 px-8 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10 border"
        >
          คุณก็หยิบดอกไม้ที่วางไว้บนโต๊ะขึ้นมา
        </button>
      </div>
    </>
  );
}
