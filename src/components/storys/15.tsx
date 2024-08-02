import { IStateKeep } from "@/interfaces/IStory";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

export default function Market01() {
  const [isAlone, setIsAlone] = useLocalStorage<boolean>("isAlone", true);
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
  const [sunflower, setSunflower] = useLocalStorage<number>("sunflower", 0);
  const [roses, setRoses] = useLocalStorage<number>("roses", 0);
  const [lavender, setLavender] = useLocalStorage<number>("lavender", 0);
  const [lilly, setLilly] = useLocalStorage<number>("lilly", 0);
  const [forgetmenot, setForgetmenot] = useLocalStorage<number>(
    "forgetmenot",
    0
  );
  const [screenKeep, setScreenKeep] = useLocalStorage<IStateKeep[]>(
    "screenKeep",
    []
  );

  const onNextScene = (choice: number) => {
    const nextScene = 16;

    if (choice == 1 || choice == 4) {
      setSunflower(sunflower + 1);
      setRoses(roses + 1);
    } else if (choice == 2 || choice == 3) {
      setLavender(lavender + 1);
      setLilly(lilly + 1);
      setForgetmenot(forgetmenot + 1);
    }
    const lastScreenKeep = screenKeep[screenKeep.length - 1];
    setScreenKeep([
      ...screenKeep,
      {
        ...lastScreenKeep,
        scene_id: nextScene,
        lilly,
        lavender,
        sunflower,
        roses,
        forgetmenot,
      },
    ]);
    setCurrentScene(nextScene);
  };

  return (
    <>
      {/* story */}
      {isAlone ? (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="animate-fade animate-duration-[1500ms] p-4">
            คุณเดินไปที่บูธอาหาร
            <br />
            แต่ที่นี่มีอาหารมากมายจนเลือกไม่ถูก
            <br />
            และด้วยงบที่มีจำกัด คุณจึงเลือกซื้อ
          </div>
          <div className="flex flex-col gap-4 pb-8">
            <button
              onClick={() => onNextScene(1)}
              className=" choice-button animate-delay-[800ms]"
            >
              <p className="choice-number">1</p>
              <p className="text-center w-full text-md">
                เมนูซิกเนเจอร์ของทางร้าน พลาดไม่ได้
              </p>
            </button>
            <button
              onClick={() => onNextScene(2)}
              className=" choice-button animate-delay-[1100ms]"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full text-md">
                เมนูที่กินบ่อยๆเป็นประจำอยู่แล้ว ไม่เปลี่ยนแปลง
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="animate-fade animate-duration-[1500ms] p-4 ">
            คุณและเพื่อนไปที่บูธอาหาร
            <br />
            ที่นี่มีอาหารมากมายจนเลือกไม่ถูก
            <br />
            และด้วยงบที่มีจำกัด คุณจึงเลือกซื้อ
          </div>
          <div className="flex flex-col gap-4 pb-8">
            <button
              onClick={() => onNextScene(3)}
              className=" choice-button animate-delay-[800ms]"
            >
              <p className="choice-number">1</p>
              <p className="text-center w-full text-md">
                ให้เพื่อนเป็นคนตัดสินใจเลือกเมนูอาหาร
              </p>
            </button>
            <button
              onClick={() => onNextScene(4)}
              className="animate-delay-[1100ms] choice-button"
            >
              <p className="choice-number">2</p>
              <p className="text-center w-full text-md">
                ให้เราเป็นคนตัดสินใจเลือกเมนูอาหาร
              </p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
