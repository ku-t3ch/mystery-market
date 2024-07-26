import { on } from "events";
import Link from "next/link";
import React, { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Garden() {
  const [result, setResult] = useState<string>("");

  const [firstFlower] = useLocalStorage<string>("firstFlower", "");
  // flower score
  const [sunflower] = useLocalStorage<number>("sunflower", 0);
  const [roses] = useLocalStorage<number>("roses", 0);
  const [lavender] = useLocalStorage<number>("lavender", 0);
  const [lilly] = useLocalStorage<number>("lilly", 0);

  const getFlowerArr = () => {
    let flowerArr = [sunflower, roses, lavender, lilly];
    return flowerArr;
  };

  const onNextPage = () => {
    const flowerArr = getFlowerArr();
    const basePath = "/result/";
    for (let i = 0; i < flowerArr.length; i++) {
      if (flowerArr[i] > 3) {
        switch (firstFlower) {
          case "sunflower":
            return `${basePath}sunflower`;
          case "roses":
            return `${basePath}roses`;
          case "lavender":
            return `${basePath}lavender`;
          case "lilly":
            return `${basePath}lilly`;
          default:
            break;
        }
      }
    }
    return "";
  };

  return (
    <>
      <Link href={`${onNextPage()}`} className="w-full h-[100%]"></Link>
    </>
  );
}
