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
  const [sunflower, setSunflower] = useLocalStorage<number>("sunflower", 0);
  const [roses, setRoses] = useLocalStorage<number>("roses", 0);
  const [lavender, setLavender] = useLocalStorage<number>("lavender", 0);
  const [lilly, setLilly] = useLocalStorage<number>("lilly", 0);
  const [forgetmenot, setForgetmenot] = useLocalStorage<number>(
    "forgetmenot",
    0
  );

  const setSceneNumber = (choice: number) => {
    let gonext = 0;
    if (choice == 1) {
      setLilly(lilly + 1);
      gonext = 202;
    } else if (choice == 2) {
      setSunflower(sunflower + 3);
      gonext = 202;
    } else if (choice == 3) {
      gonext = 201;
    } else if (choice == 4) {
      setForgetmenot(forgetmenot + 1);
      gonext = 302;
    } else if (choice == 5) {
      setRoses(roses + 1);
      gonext = 303;
    } else if (choice == 6) {
      setSunflower(sunflower + 5);
      setLavender(lavender + 2);
      gonext = 303;
    }
    const lastScreenKeep = screenKeep[screenKeep.length - 1];
    setScreenKeep([
      ...screenKeep,
      {
        ...lastScreenKeep,
        scene_id: gonext,
        lilly,
        lavender,
        sunflower,
        roses,
        forgetmenot,
      },
    ]);
    setCurrentScene(gonext);
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
              onClick={() => setSceneNumber(1)}
              className="choice-button animate-delay-[800ms]"
            >
              <p className="choice-number">1</p>
              <p className="text-center w-full ">ค่อยๆเดินเข้าไปดู</p>
            </button>
            <button
              onClick={() => setSceneNumber(2)}
              className="choice-button  animate-delay-[1100ms]"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full">เดินเข้าไปดูทันที...</p>
            </button>
            <button
              onClick={() => setSceneNumber(3)}
              className="choice-button  animate-delay-[1400ms]"
            >
              <p className="choice-number">3</p>
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
              onClick={() => setSceneNumber(4)}
              className="choice-button  animate-delay-[800ms]"
            >
              <p className="choice-number">1</p>
              <p className="text-center w-full">
                ไม่ได้พูดอะไร ไม่สนใจ นั่งอยู่กับที่เดิม
              </p>
            </button>
            <button
              onClick={() => setSceneNumber(5)}
              className="choice-button  animate-delay-[1100ms]"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full">บอกเพื่อนไปดูกล่องให้หน่อย</p>
            </button>
            <button
              onClick={() => setSceneNumber(6)}
              className="choice-button  animate-delay-[1400ms]"
            >
              <p className="choice-number">3</p>
              <p className="text-center w-full">ลุกเดินไปดูกล่องเอง</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
