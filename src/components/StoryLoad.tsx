import { useEffect } from "react";
import { story } from "../utils/story";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";
import { Icon } from "@iconify/react/dist/iconify.js";
import ReactAudioPlayer from "react-audio-player";
import { IChoice, IStateKeep } from "../interfaces/IStory";
import CopyRight from "./CopyRight";

const Story = () => {
  const [getName, setName] = useLocalStorage<string>("name", "");
  const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
  const [screenKeep, setScreenKeep] = useLocalStorage<IStateKeep[]>(
    "screenKeep",
    [
      {
        scene_id: 0,
        getName: "",
        isAlone: true,
        sunflower: 0,
        roses: 0,
        lavender: 0,
        lilly: 0,
        forgetmenot: 0,
        dog: false,
        cat: false,
        selectedAnimal: false,
        firstFlower: "",
        reality: false,
      },
    ]
  );

  const [isAlone, setIsAlone] = useLocalStorage<boolean>("isAlone", true);
  const [firstFlower, setFirstFlower] = useLocalStorage<string>(
    "firstFlower",
    ""
  );
  const [sunflower, setSunflower] = useLocalStorage<number>("sunflower", 0);
  const [roses, setRoses] = useLocalStorage<number>("roses", 0);
  const [lavender, setLavender] = useLocalStorage<number>("lavender", 0);
  const [lilly, setLilly] = useLocalStorage<number>("lilly", 0);
  const [forgetmenot, setForgetmenot] = useLocalStorage<number>(
    "forgetmenot",
    0
  );
  const [dog, setDog] = useLocalStorage<boolean>("dog", false);
  const [cat, setCat] = useLocalStorage<boolean>("cat", false);
  const [selectedAnimal, setSelectedAnimal] = useLocalStorage<boolean>(
    "selectedAnimal",
    false
  );
  const [reality, setReality] = useLocalStorage<boolean>("reality", true);

  const goToScene = (scene_id: number | null) => {
    if (scene_id != null) {
      setCurrentScene(scene_id);
      setScreenKeep((prevScreenKeep) => [
        ...prevScreenKeep,
        {
          scene_id,
          getName,
          isAlone,
          sunflower,
          roses,
          lavender,
          lilly,
          forgetmenot,
          dog,
          cat,
          selectedAnimal,
          firstFlower,
          reality,
        },
      ]);
    }
  };

  const goToPreviousScene = () => {
    if (screenKeep.length > 1) {
      const newScreenKeep = screenKeep.slice(0, -1);
      setCurrentScene(newScreenKeep[newScreenKeep.length - 1].scene_id);
      setName(screenKeep[screenKeep.length - 1].getName);
      setIsAlone(screenKeep[screenKeep.length - 1].isAlone);
      setSunflower(screenKeep[screenKeep.length - 1].sunflower);
      setRoses(screenKeep[screenKeep.length - 1].roses);
      setLavender(screenKeep[screenKeep.length - 1].lavender);
      setLilly(screenKeep[screenKeep.length - 1].lilly);
      setForgetmenot(screenKeep[screenKeep.length - 1].forgetmenot);
      setDog(screenKeep[screenKeep.length - 1].dog);
      setCat(screenKeep[screenKeep.length - 1].cat);
      setSelectedAnimal(screenKeep[screenKeep.length - 1].selectedAnimal);
      setFirstFlower(screenKeep[screenKeep.length - 1].firstFlower);
      setReality(screenKeep[screenKeep.length - 1].reality);
      setScreenKeep(newScreenKeep);
    }
  };

  const checkChoice = (choice: IChoice) => {
    // พวกดอกไม่ไรงี้ก็ set ที่นี่
    if (choice.isAlone != null) {
      setIsAlone(choice.isAlone);
    }
    if (choice.sunflower != null) {
      setSunflower(sunflower + choice.sunflower);
    }
    if (choice.roses != null) {
      setRoses(roses + choice.roses);
    }
    if (choice.lavender != null) {
      setLavender(lavender + choice.lavender);
    }
    if (choice.lilly != null) {
      setLilly(lilly + choice.lilly);
    }
    if (choice.forgetmenot != null) {
      setForgetmenot(forgetmenot + choice.forgetmenot);
    }
    if (choice.dog != null) {
      setDog(choice.dog); // function หมา
    }
    if (choice.cat != null) {
      setCat(choice.cat); // function แมว
    }
    if (choice.selectedAnimal != null) {
      setSelectedAnimal(choice.selectedAnimal);
    }
    if (choice.firstFlower != null) {
      setFirstFlower(choice.firstFlower);
    }
    if (choice.reality != null) {
      setReality(choice.reality);
    }
    goToScene(choice.go);
  };

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.play();
    if (!currentScene) {
      localStorage.clear();
    }
  }, [currentScene]);

  // useEffect(() => {
  //   // อย่าลืมลบ
  //   setCurrentScene(0);
  //   setName("");
  //   setScreenKeep([0]);
  //   setIsAlone(true);
  //   setSunflower(0);
  //   setRoses(0);
  //   setLavender(0);
  //   setLilly(0);
  //   setForgetmenot(0);
  //   setDog(0);
  //   setCat(0);
  // }, [
  //   setCat,
  //   setCurrentScene,
  //   setDog,
  //   setForgetmenot,
  //   setIsAlone,
  //   setLavender,
  //   setLilly,
  //   setName,
  //   setRoses,
  //   setScreenKeep,
  //   setSunflower,
  // ]);

  useEffect(() => {
    // ใส่ชื่อใน story
    const title = document.getElementById("title" + currentScene);
    const story = document.getElementById("story" + currentScene);

    if (title && title.innerHTML.includes("{getName}")) {
      title.innerHTML = title.innerHTML.replace("{getName}", getName);
      console.log(title.innerHTML);
    }
    if (story && story.innerHTML.includes("{getName}")) {
      story.innerHTML = story.innerHTML.replace("{getName}", getName);
      console.log(story.innerHTML);
    }
  }, [currentScene, getName]);
  return (
    <>
      {/* audio */}
      <ReactAudioPlayer
        id="audio"
        src={`/mystery-market/assets/audio/Le Cygne (The Swan) Resize.mp3`}
        autoPlay
        loop
        volume={0.1}
        // controls
      />

      {/* video background */}
      {currentScene <= 5 && (
        <video /* hardcode พื้นหลัง video rainbackground.mp4 */
          autoPlay
          loop
          muted
          className="absolute object-cover max-w-lg w-full h-[calc(100dvh)] right-0 left-0 m-auto"
          poster="/mystery-market/assets/background/rainbackground-resize.webp"
          playsInline
          preload="auto"
        >
          <source
            src="/mystery-market/assets/background/rainbackground.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      {currentScene == 15.1 && (
        <video /* hardcode พื้นหลัง video rainbackground.mp4 */
          autoPlay
          muted
          className="absolute object-cover max-w-lg w-full h-[calc(100dvh)] right-0 left-0 m-auto"
          poster="/mystery-market/assets/background/boatvod1_000.webp"
          playsInline
        >
          <source
            src="/mystery-market/assets/background/boatvod1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      {story.map((item, index) => {
        const isCurrentScene = currentScene === item.scene_id;
        return (
          <div
            key={index}
            className={`h-[calc(100dvh)] inset-0 w-full ${
              isCurrentScene ? "" : "hidden"
            }`}
          >
            {item.background && (
              <div className="absolute object-cover max-w-lg w-full h-[calc(100dvh)] inset-0 right-0 left-0 m-auto">
                <Image
                  priority
                  src={item.background!}
                  fill
                  alt="background"
                  className="object-cover w-full h-[calc(100dvh)] inset-0"
                />
              </div>
            )}

            {/* back button */}
            <div className="relative mx-auto max-w-lg ">
              <div
                className={`absolute z-[999] left-8 top-10 ${
                  currentScene == 0 ? "hidden" : ""
                }`}
              >
                <Icon
                  onClick={goToPreviousScene}
                  icon="ic:baseline-navigate-before"
                  className="bg-primary-dark/20 rounded-full hover:cursor-pointer text-4xl"
                />
              </div>
            </div>

            <div
              // className={`relative flex flex-col items-center justify-center h-[calc(100dvh)] max-w-lg w-full py-8 text-center right-0 left-0 m-auto ${
              //   isCurrentScene ? "fadeIn" : "fadeOut"
              // }`}
              className={`relative flex flex-col items-center justify-center h-[calc(100dvh)] max-w-lg w-full py-8 text-center right-0 left-0 m-auto`}
              onClick={() => goToScene(item.go!)}
            >
              {/* logo */}
              <div
                className={`flex flex-col items-center justify-center h-auto w-full ${
                  currentScene == 0 ? "hidden" : ""
                }`}
              >
                <Image
                  src="/mystery-market/assets/images/mystery-market-logo-resize.webp"
                  width={100}
                  height={100}
                  alt="Mystery-market Logo"
                />
              </div>
              {/* story */}
              <div className="flex flex-col items-center justify-center h-full w-full">
                {item.children ? (
                  item.children
                ) : (
                  <>
                    <div className="pb-8">
                      {item.title && (
                        <div
                          id={"title" + item.scene_id}
                          dangerouslySetInnerHTML={{ __html: item.title || "" }}
                          className="text-xl font-extrabold pt-4 animate-fade animate-duration-[2000ms] animate-ease-out"
                          // onClick={() => goToScene(item.go!)}
                        />
                      )}
                      {item.story && (
                        <div
                          id={"story" + item.scene_id}
                          dangerouslySetInnerHTML={{ __html: item.story || "" }}
                          className={`p-4 animate-fade animate-duration-[2000ms] animate-ease-out ${
                            item.title ? "animate-delay-1000" : ""
                          } `}
                          // onClick={() => goToScene(item.go!)}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-4 pb-8">
                      {item.choice &&
                        item.choice.map((choice, choiceIndex) => (
                          <button
                            key={choiceIndex}
                            onClick={() => checkChoice(choice)}
                            // className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10"
                            className="choice-button"
                            style={{
                              animationDelay: `${500 + choiceIndex * 300}ms`,
                            }}
                          >
                            <p className="relative text-[10px] rounded-full w-6 h-5 text-secondary-dark text-sm font-bold bg-primary-white text-center">
                              {choiceIndex + 1}
                            </p>
                            <p
                              className="text-center w-full text-md"
                              dangerouslySetInnerHTML={{ __html: choice.title }}
                            />
                          </button>
                        ))}
                    </div>
                  </>
                )}
              </div>
              {/* footer */}
              <CopyRight currentScene={currentScene} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Story;
