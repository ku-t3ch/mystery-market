import { useEffect } from "react";
import { story } from "../utils/story";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";
import { Icon } from "@iconify/react/dist/iconify.js";
import ReactAudioPlayer from 'react-audio-player';
import { IChoice } from "../interfaces/IStory";

const Story = () => {
    const [getName, setName] = useLocalStorage<string>("name", '');
    const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
    const [screenKeep, setScreenKeep] = useLocalStorage<number[]>('screenKeep', [0]);

    const [isAlone, setIsAlone] = useLocalStorage<boolean>('isAlone', true);
    const [sunflower, setSunflower] = useLocalStorage<number>('sunflower', 0);
    const [roses, setRoses] = useLocalStorage<number>('roses', 0);
    const [lavender, setLavender] = useLocalStorage<number>('lavender', 0);
    const [lilly, setLilly] = useLocalStorage<number>('lilly', 0);
    const [forgetmenot, setForgetmenot] = useLocalStorage<number>('forgetmenot', 0);
    

    const goToScene = (scene_id: number | null) => {
        if (scene_id != null) {
            setCurrentScene(scene_id);
            setScreenKeep([...screenKeep, scene_id]);
        };
    };

    const goToPreviousScene = () => {
        if (screenKeep.length > 1) {
            screenKeep.pop();
            setScreenKeep(screenKeep);
            setCurrentScene(screenKeep[screenKeep.length - 1]);
        };
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
        goToScene(choice.go);
    }

    useEffect(() => {
        const audio = document.getElementById('audio') as HTMLAudioElement;
        audio.play();
    }, [currentScene]);

    useEffect(() => {
        // อย่าลืมลบ
        setCurrentScene(0);
        setName('');
        setScreenKeep([0]);
        setIsAlone(true);
        setSunflower(0);
        setRoses(0);
        setLavender(0);
        setLilly(0);
        setForgetmenot(0);
    }, []);

    useEffect(() => {
        // ใส่ชื่อใน story
        const title = document.getElementById("title" + currentScene);
        const story = document.getElementById('story' + currentScene);

        if (title && title.innerHTML.includes('{getName}')) {
            title.innerHTML = title.innerHTML.replace('{getName}', getName);
            console.log(title.innerHTML);
        }
        if (story && story.innerHTML.includes('{getName}')) {
            story.innerHTML = story.innerHTML.replace('{getName}', getName);
            console.log(story.innerHTML);
        }
    }, [currentScene])
    return (
        <>
            {/* audio */}
            <ReactAudioPlayer
                id = "audio"
                src="/mystery-market/assets/audio/Le Cygne (The Swan).mp3"
                autoPlay
                loop
                // controls
            />


            {/* video background */}
            {(currentScene <= 5) && 
            <video /* hardcode พื้นหลัง video rainbackground.mp4 */
                autoPlay
                loop
                muted
                className="absolute object-cover max-w-md w-full h-[calc(100dvh)] right-0 left-0 m-auto"
                poster="/mystery-market/assets/background/rainbackground-resize.webp"
                playsInline
            >
                <source src="/mystery-market/assets/background/rainbackground.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
            {story.map((item, index) => {
                const isCurrentScene = currentScene === item.scene_id;
                return (
                    <div key={index} className={`h-[calc(100dvh)] inset-0 w-full ${isCurrentScene ? '' : 'hidden'}`}>
                  
                        {item.background && <div className="absolute object-cover max-w-md w-full h-[calc(100dvh)] inset-0 right-0 left-0 m-auto">
                            <Image priority src={item.background!} fill alt="background" className="object-cover w-full h-[calc(100dvh)] inset-0" />
                        </div>}

                        {/* back button */}
                        <div className={`absolute z-[999] left-8 top-10 ${currentScene == 0 ? "hidden" : ""}`}>
                            <Icon onClick={goToPreviousScene} icon="ic:baseline-navigate-before" className="bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10 rounded-full hover:cursor-pointer text-4xl" />
                        </div>

                        <div className="relative flex flex-col items-center justify-center h-[calc(100dvh)] max-w-md w-full py-8 text-center right-0 left-0 m-auto" onClick={() => goToScene(item.go!)}>
                            {/* logo */}
                            <div className={`flex flex-col items-center justify-center h-auto w-full ${currentScene == 0 ? "hidden" : ""}`}>
                                <Image src="/mystery-market/assets/images/mystery-market-logo.png" width={100} height={100} alt="Mystery-market Logo" />
                            </div>
                            {/* story */}
                            <div className="flex flex-col items-center justify-center h-full w-full">
                                {item.children ? item.children :
                                    <>
                                        <div className="pb-8">
                                            {item.title && <div id={"title" + item.scene_id} dangerouslySetInnerHTML={{ __html: item.title || '' }} className="text-xl font-extrabold pt-4" onClick={() => goToScene(item.go!)} />}
                                            {item.story && <div id={"story" + item.scene_id} dangerouslySetInnerHTML={{ __html: item.story || '' }} className="p-4" onClick={() => goToScene(item.go!)} />}
                                        </div>
                                        <div className="flex flex-col gap-4 pb-8">
                                            {item.choice && item.choice.map((choice, choiceIndex) => (
                                                <button key={choiceIndex} onClick={() => checkChoice(choice)} className="flex flex-row items-center justify-center font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                                                    <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">{choiceIndex + 1}</p>
                                                    <p className="text-center w-full" dangerouslySetInnerHTML={{ __html: choice.title }} />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                }
                            </div>
                            {/* footer */}
                            <div className={`flex flex-col items-center h-auto w-full gap-2 ${currentScene == 0 ? "hidden" : ""}`}>
                                <small className="text-white">Copyright 2024 © Technology Club of Kasetsart University</small>
                            </div>
                        </div>
                    </div >
                );
            })}
        </>
    );
}

export default Story