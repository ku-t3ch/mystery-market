import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function TheFlower() {
  const [sunflower, setSunflower] = useLocalStorage<number>("sunflower", 0);
  const [roses, setRoses] = useLocalStorage<number>("roses", 0);
  const [lavender, setLavender] = useLocalStorage<number>("lavender", 0);
  const [lilly, setLilly] = useLocalStorage<number>("lilly", 0);
  const [forgetmenot, setForgetmenot] = useLocalStorage<number>(
    "forgetmenot",
    0
  );

  function getHighestFlower(
    sunflower: number,
    roses: number,
    lavender: number,
    lilly: number,
    forgetmenot: number
  ): string {
    const flowerCounts = [
      { name: "sunflower", count: sunflower },
      { name: "roses", count: roses },
      { name: "lavender", count: lavender },
      { name: "lilly", count: lilly },
      { name: "forgetmenot", count: forgetmenot },
    ];

    const maxCount = Math.max(...flowerCounts.map((flower) => flower.count));

    return flowerCounts.find((flower) => flower.count === maxCount)?.name || "";
  }

  const highestFlowerCount = getHighestFlower(
    sunflower,
    roses,
    lavender,
    lilly,
    forgetmenot
  );

  const router = useRouter();

  const highestFlower = getHighestFlower(
    sunflower,
    roses,
    lavender,
    lilly,
    forgetmenot
  );

  function flower() {
    if (highestFlower) {
      router.push(`/flowers/${highestFlower}`);
    } else {
      router.push(`/flowers/lily`);
    }
    console.log("wtf");
  }
  return (
    <>
      <button onClick={flower} className=" choice-button">
        <p className="choice-number">1</p>
        <p className="text-center w-full text-md">หยิบกระถางดอกไม้ขึ้นมา</p>
      </button>
    </>
  );
}
