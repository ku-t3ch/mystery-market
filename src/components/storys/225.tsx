import { IStateKeep } from "@/interfaces/IStory";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

export default function EndingNote() {
  const [message] = useLocalStorage<string>("message", "");
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
  const [isAlone, setIsAlone] = useLocalStorage<boolean>("isAlone", true);
  const [dog, setDog] = useLocalStorage<boolean>("dog", false);
  const [cat, setCat] = useLocalStorage<boolean>("cat", false);
  const [selectedAnimal, setSelectedAnimal] = useLocalStorage<string>(
    "selectedAnimal",
    ""
  );
  const [reality, setReality] = useLocalStorage<boolean>("reality", false);
  const onNextScene = (choice: number) => {
    const nextScene = 1002;

    const lastScreenKeep = screenKeep[screenKeep.length - 1];
    setScreenKeep([
      ...screenKeep,
      {
        ...lastScreenKeep,
        scene_id: nextScene,
      },
    ]);
    setCurrentScene(nextScene);
  };
  let result = "";
  if (reality == false && isAlone == true && dog == false && cat == false) {
    result =
      "คุณตื่นมาในร่างกายเด็กตัวเล็กคนหนึ่งอยู่ในห้องนอนเพียงลำพังไร้เสียงของสิ่งมีชีวิตใดๆแสงรำไรส่องกระทบผ่านเปียโนตัวโปรดคุณดื่มด่ำไปกับภาพตรงหน้าและคิดว่าจะทำอย่างไรต่อดี";
  } else if (
    reality == false &&
    isAlone == true &&
    dog == true &&
    cat == false
  ) {
    result =
      "คุณตื่นมาในร่างกายเด็กตัวเล็กคนหนึ่งอยู่ในห้องนอนเพียงลำพังแต่ทันใดนั้นมีเสียงบ๊อกๆอยู่บนตัวของคุณเจ้าโฮ่งตัวจิ๋วจ้องมองตาแป๋วในที่สุดชีวิตอันแสนสงบก็เริ่มมีชีวิตชีวามากกว่าเดิม";
  } else if (
    reality == true &&
    isAlone == true &&
    dog == true &&
    cat == false
  ) {
    result =
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิมอยู่ในห้องนอนเพียงลำพังแต่ทันใดนั้นมีเสียงบ๊อกๆอยู่บนตัวของคุณเจ้าโฮ่งตัวจิ๋วจ้องมองตาแป๋วแล้วกระดิกหางอย่างร่าเริงในที่สุดชีวิตอันแสนสงบก็เริ่มมีชีวิตชีวามากกว่าเดิม";
  } else if (
    reality == true &&
    isAlone == true &&
    dog == false &&
    cat == true
  ) {
    result =
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิมอยู่ในห้องนอนเพียงลำพังแต่ทันใดนั้นมีเสียงเมี๊ยวอยู่บนตัวของคุณเจ้าเหมียวตัวจิ๋วจ้องมองตาแป๋วแล้วส่ายหางไปมาในที่สุดชีวิตอันแสนสงบก็เริ่มมีชีวิตชีวามากกว่าเดิม";
  } else if (isAlone == false && reality == false && dog == true) {
    result =
      "คุณตื่นมาในร่างเด็กตัวเล็กคนหนึ่งรายล้อมไปด้วยเสียงหัวเราะที่คุ้นเคยแต่ทันใดนั้นมีเสียงบ๊อกๆอยู่บนตัวของคุณการได้อยู่กับเพื่อนและหมาน้อยอันเป็นที่รักทำให้ชีวิตคุณกลับมาสดใสอีกครั้ง";
  } else if (isAlone == false && reality == false && cat == true) {
    result =
      "คุณตื่นมาในร่างกายเด็กตัวเล็กคนหนึ่งรายล้อมไปด้วยเสียงหัวเราะที่คุ้นเคย แต่ทันใดนั้นมีเสียงเมี๊ยวอยู่บนตัวของคุณ การได้อยู่กับเพื่อนและแมวเหมียวอันเป็นที่รักทำให้ชีวิตคุณกลับมาสดใสอีกครั้ง";
  } else if (
    isAlone == false &&
    reality == false &&
    cat == false &&
    dog == false
  ) {
    result =
      "คุณตื่นมาในร่างเด็กตัวเล็กคนหนึ่งรายล้อมไปด้วยเสียงหัวเราะที่คุ้นเคยพวกเขาคือเพื่อนที่เคยเล่นสนุกด้วยกันการได้อยู่กับเพื่อนอันเป็นที่รักทำให้ชีวิตคุณกลับมาสดใสอีกครั้ง";
  } else if (
    isAlone == false &&
    reality == true &&
    cat == false &&
    dog == false
  ) {
    result =
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิมทันใดนั้น เสียงโทรศัพท์จากเพื่อนก็ดังขึ้นมาคุณกดรับสาย พูดคุยกันสักพัก แล้วจึงเริ่มเล่าความฝันเมื่อคืนให้เพื่อนฟังเพื่อนคุณหัวเราะและสนุกไปกับเรื่องราวตลาดน้ำราตรีแล้วหวังว่าในวันพรุ่งนี้จะได้ไปสัมผัสประสบการณ์ด้วยกันจริงๆ";
  } else if (isAlone == false && reality == true && dog == true) {
    result =
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิม ทันใดนั้น เสียงโทรศัพท์จากเพื่อนดังขึ้น คุณกดรับสายและเล่าความฝันเมื่อคืนให้เพื่อนฟัง เพื่อนหัวเราะและอยากไปตลาดน้ำราตรีด้วยกันทันใดนั้น มีเสียงบ๊อกๆ รอบตัวคุณ หมาน้อยจอมซมที่กำลังปีนขึ้นมาบนเตียง การได้อยู่กับเพื่อนและหมาน้อยทำให้ชีวิตคุณกลับมาสดใสอีกครั้ง";
  } else if (isAlone == false && reality == true && cat == true) {
    result =
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิม ทันใดนั้น เสียงโทรศัพท์จากเพื่อนดังขึ้น คุณกดรับสายและเล่าความฝันเมื่อคืนให้เพื่อนฟัง เพื่อนหัวเราะและอยากไปตลาดน้ำราตรีด้วยกันทันใดนั้น มีเสียงเหมียวๆ รอบตัวคุณ แมวส้มซุกซนที่กำลังปีนขึ้นมาบนเตียง การได้อยู่กับเพื่อนและแมวเหมียวทำให้ชีวิตคุณกลับมาสดใสอีกครั้ง";
  } else if (
    isAlone == true &&
    reality == true &&
    cat == false &&
    dog == false
  ) {
    result =
      "คุณตื่นมาในร่างเด็กตัวเล็กคนหนึ่งอยู่ในห้องนอนเพียงลำพัง ไร้เสียงของสิ่งมีชีวิตใดๆ แสงรำไรส่องกระทบผ่านเปียโนตัวโปรดคุณดื่มด่ำไปกับภาพตรงหน้าและคิดว่าจะทำอย่างไรต่อดี";
  } else {
    result =
      "คุณตื่นมาโดยตัวคนเดียว ห้องทุกอย่างก็เป็นเหมือนเดิม ไม่มีอะไรเปลี่ยนแปลง";
  }
  console.log(result);
  return (
    <>
      <div className="choice-story px-8">{result}</div>
    </>
  );
}
