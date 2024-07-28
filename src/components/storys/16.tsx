import { IStateKeep } from "@/interfaces/IStory";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

export default function Market02() {
  const [isAlone, setIsAlone] = useLocalStorage<boolean>("isAlone", true);
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
  const [screenKeep, setScreenKeep] = useLocalStorage<IStateKeep[]>(
    "screenKeep",
    []
  );

  const setSceneNumber = (scene_id: number) => {
    const lastScreenKeep = screenKeep[screenKeep.length - 1];
    setScreenKeep([
      ...screenKeep,
      {
        ...lastScreenKeep,
        scene_id: scene_id,
      },
    ]);
    setCurrentScene(scene_id);
  };

  return (
    <>
      {/* story */}
      {isAlone ? (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="p-4 choice-story">
            ระหว่างที่คุณนั่งรออาหารอยู่
            <br />
            สายตาของคุณเห็นบางสิ่งขยับอยู่ในกล่อง.....
          </div>
          <div className="flex flex-col gap-4 pb-8">
            <button
              onClick={() => setSceneNumber(202)}
              className="choice-button animate-delay-[800ms]"
            >
              <p className="choice-number">1</p>
              <p className="text-center w-full ">ค่อยๆเดินเข้าไปดู</p>
            </button>
            <button
              onClick={() => setSceneNumber(202)}
              className="choice-button  animate-delay-[1100ms]"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full">เดินเข้าไปดูทันที...</p>
            </button>
            <button
              onClick={() => setSceneNumber(201)}
              className="choice-button  animate-delay-[1400ms]"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full">นั่งอยู่เฉยๆ...</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full mt-[-4rem]">
          <div className="p-4 choice-story ">
            ระหว่างที่คุณนั่งรออาหารอยู่
            <br />
            สายตาของคุณเห็นบางสิ่งขยับอยู่ในกล่อง.....
          </div>
          <div className="flex flex-col gap-4 pb-8">
            <button
              onClick={() => setSceneNumber(302)}
              className="choice-button  animate-delay-[800ms]"
            >
              <p className="choice-number">1</p>
              <p className="text-center w-full">
                ไม่ได้พูดอะไร ไม่สนใจ นั่งอยู่กับที่เดิม
              </p>
            </button>
            <button
              onClick={() => setSceneNumber(301)}
              className="choice-button  animate-delay-[1100ms]"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full">บอกเพื่อนไปดูกล่องให้หน่อย</p>
            </button>
            <button
              onClick={() => setSceneNumber(303)}
              className="choice-button  animate-delay-[1400ms]"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full">ลุกเดินไปดูกล่องเอง</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
