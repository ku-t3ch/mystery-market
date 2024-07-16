import { useEffect } from "react";
import { story } from "../utils/story";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";
import { Icon } from "@iconify/react/dist/iconify.js";

const Story = () => {
    const [getName, setName] = useLocalStorage<string>("name", '');
    const [currentScene, setCurrentScene] = useLocalStorage<number>("scene", 0);
    const [screenKeep, setScreenKeep] = useLocalStorage<number[]>('screenKeep', []);

    const goToScene = (scene_id: number | null) => {
        if (scene_id) { 
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

    useEffect(() => {
        // อย่าลืมลบ
        setCurrentScene(0);
        setName('');
        setScreenKeep([]);
    }, []);
    return (
        <>
            {story.map((item, index) => {
                const isCurrentScene = currentScene === item.scene_id;
                return (
                    <div key={index} className={`h-[calc(100dvh)] inset-0 w-full ${isCurrentScene ? '' : 'hidden'}`}>
                        {item.background.includes('.mp4') ? (
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute object-cover w-full h-[calc(100dvh)] inset-0"
                                poster={item.poster}
                            >
                                <source src={item.background} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="absolute object-cover w-full h-[calc(100dvh)] inset-0">
                                <Image priority src={item.background} fill alt="background" className="object-cover w-full h-[calc(100dvh)] inset-0" />
                            </div>
                        )}
                        <div className="absolute z-[999] left-8 top-10">
                            <Icon onClick={goToPreviousScene} icon="ic:baseline-navigate-before" className="bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10 rounded-full hover:cursor-pointer text-4xl" />
                        </div>
                        <div className="relative flex flex-col items-center justify-center h-[calc(100dvh)] w-full py-8 text-center" onClick={() => goToScene(item.go)}>
                            {/* logo */}
                            <div className={`flex flex-col items-center justify-center h-auto w-full ${currentScene == 0 ? "hidden" : ""}`}>
                                <Image src="/mystery-market/assets/images/mystery-market-logo.png" width={100} height={100} alt="Mystery-market Logo" />
                            </div>
                            {/* story */}
                            <div className="flex flex-col items-center justify-center h-full w-full">
                                {item.children ? item.children :
                                    <>
                                        <div className="pb-8">
                                            {item.title && <div dangerouslySetInnerHTML={{ __html: item.title || '' }} className="text-xl font-extrabold pt-4" onClick={() => goToScene(item.go)} />}
                                            {item.story && <div dangerouslySetInnerHTML={{ __html: item.story || '' }} className="p-4" onClick={() => goToScene(item.go)} />}
                                        </div>
                                        <div className="flex flex-col gap-4 pb-8">
                                            {item.choice && item.choice.map((choice, choiceIndex) => (
                                                <button key={choiceIndex} onClick={() => goToScene(choice.go)} className="flex flex-row font-bold text-sm rounded-xl gap-3 p-4 bg-[##D9D9D91A] backdrop-filter backdrop-blur-lg shadow-sm shadow-black/10">
                                                    <p className="relative text-[10px] bg-white rounded-full w-6 h-5 text-black text-sm font-thin">{choiceIndex + 1}</p>
                                                    <p className="text-center w-full">{choice.title}</p>
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