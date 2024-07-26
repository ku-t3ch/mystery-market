import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import { useLocalStorage } from 'usehooks-ts';

type Props = {}

export default function PreAloneEnding({}: Props) {
  const [isAlone, setIsAlone] = useLocalStorage<boolean>("isAlone", true);
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
  const [screenKeep, setScreenKeep] = useLocalStorage<number[]>("screenKeep", [0]);
  const [dog] = useLocalStorage<number>('dog', 0);
  const [cat] = useLocalStorage<number>("cat", 0);
  const [message] = useLocalStorage<string>('message', '');
  const [selectedAnimal] = useLocalStorage<string>('selectedAnimal', '');

 const goToScene = (scene_id: number | null) => {
    if (scene_id != null) {
    setCurrentScene(scene_id);
    setScreenKeep([...screenKeep, scene_id]);
    }
 };

 const nextScene = () => {
    const has214 = screenKeep.includes(214);
    const has213 = screenKeep.includes(213);

    if (has214 && isAlone) {
      if (message !== "") 
      {
        if (selectedAnimal === "dog" && dog > 0) {
          return 222;
        } else if (selectedAnimal === "cat" && cat > 0) {
          return 223;
        } else {
          return 221;
        }
      } else {
        return 220;
      }
    }
    else if (has213 && isAlone) {
      if (message !== "") 
      {
        if (selectedAnimal === "dog" && dog > 0) {
          return 218;
        }
        else if (selectedAnimal === "cat" && cat > 0) {
          return 219;
        }
        else {
          return 217;
        }
      }
      else 
      {
        return 216;
      }
    }

    return 215;//currentScene;
 }

  return (
    <>
      <div>
        หลังจากที่ปิดนาฬิกาปลุกแล้ว
        <br />
        คุณก็นึกถึงเรื่องราวที่เกิดขึ้นเมื่อวาน
        <br />
        จึงได้คว้าโทรศัพท์เพื่อค้นหาเมื่อวานเกิดอะไรขึ้นบ้าง
        <br />
        แต่เมื่อค้นหาเว็บแล้ว
        <br />
        พบว่าไม่มีใครเขียนบทความ
        <br />
        เรื่องตลาดน้ำราตรีแห่งนั้นได้เลย…
      </div>
      <div className="mt-2">
        <button
          onClick={() => goToScene(nextScene())}
          className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-2 py-2 px-8 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10 border"
        >
          <span>เข้าสู่บทสุดท้าย</span>
          <Icon
            icon="ic:baseline-navigate-next"
            className="border bg-white text-black rounded-full hover:cursor-pointer"
          />
        </button>
      </div>
    </>
  );
}