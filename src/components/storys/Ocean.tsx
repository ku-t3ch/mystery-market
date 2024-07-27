import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocalStorage } from "usehooks-ts";

export default function Ocean() {
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
  function onNextSceneButton() {
    setCurrentScene(15);
  }
  return (
    <>
      <div className="text-xl font-extrabold choice-story animate-delay-[5000ms] drop-shadow-md">
        คุณมาถึงตลาดน้ำแล้ว
      </div>
      <button
        onClick={onNextSceneButton}
        className="mt-8 flex flex-row items-center justify-center choice-story animate-delay-[5500ms] font-bold text-sm rounded-xl gap-2 py-2 px-8 bg-[##D9D9D91A] shadow-sm shadow-black/10 border"
      >
        <div>ถัดไป</div>
        <Icon
          icon="ic:baseline-navigate-next"
          className="border bg-white text-black rounded-full hover:cursor-pointer"
        />
      </button>
    </>
  );
}
