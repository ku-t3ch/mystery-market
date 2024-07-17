import { IStory } from "../interfaces/IStory";
import Start from "../components/storys/1";
import ButterflyEffect from "../components/storys/2";
import UserEnterName from "../components/storys/3";
import Market01 from "../components/storys/15";
import Market02 from "../components/storys/16";

// ในกรณีที่ต้องที่ choice มีการเช็คเงื่อนไข ให้ทำการสร้าง component ใส่ children
// tip: กรณีท่่ี่พื้นหลังเป็น .mp4 ให้ทำการ hardcode ที่ page หลักเลย ตามตัวอย่างที่ทำไว้ (หรือมีวิธีที่ดีกว่าก็ฝากทำด้วยขอบใจ)
// tip: ถ้าจะใช้ tailwind ให้ใช้ class แทน className :)

// ending scene_id : [9, ...]

export const story: IStory[] = [
    {
        scene_id: 0,
        children: <Start />,
        go: 1,
    },
    {
        scene_id: 1,
        children: <ButterflyEffect />,
        go: 2,
    },
    {
        scene_id: 2,
        children: <UserEnterName />,
    },
    {
        scene_id: 3,
        title: "<p class='text-primary-blue'>บทนำ</p>",
        story: "ท่ามกลามพายุฝนที่โหมซัดกระหน่ำ<br />เสียงพ่อค้าแม่ค้าเจื้อยแจ้วตลอดทาง<br />ผู้คนเร่งรีบกลับบ้านในยามค่ำคืน<br />............<br />คุณพึ่งเสร็จจากการทำงาน<br />เดินทางกลับบ้านด้วยใบหน้าที่เหนื่อยล้า.<br />เหมือนเดิมทุกๆวัน อย่างไร้จุดหมาย....<br />และในที่สุดก็กลับมาถึงบ้าน",
        poster: "/mystery-market/assets/background/rainbackground.png",
        go: 4
    },
    {
        scene_id: 4,
        title: "เมื่อคุณกลับถึงบ้านแล้ว<br/>ห้องของคุณเป็นอย่างไร",
        story: null,
        choice: [
            { title: "ห้องโมเดิร์น สไตล์ชิคๆ", go: 5, sunflower: 1 },
            { title: "ห้องมินิมอล สไตล์น่ารัก", go: 5, roses: 1 },
            { title: "ห้องที่ไม่เป็นระเบียบ ของเต็มห้อง", go: 5, lavender: 1 },
            { title: "ห้องที่จัดระเบียบแบ่งเป็นหมวดหมู่", go: 5, lilly: 1 },
            { title: "ห้องที่บรรยากาศเงียบสงบ", go: 5, forgetmenot: 1 },
        ],
    },
    {
        scene_id: 5,
        title: "เมื่อคุณเข้ามาในห้องแล้ว<br/>สิ่งแรกที่คุณจะทำคือ",
        choice: [
            { title: "เล่นเกมออนไลน์กับเพื่อน วันนี้ต้องชนะ!", go: 7 },
            { title: "นั่งเล่นโทรศัพท์คนเดียว ที่โซฟาตัวโปรด", go: 6 },
        ],
        background: "/mystery-market/assets/background/roombgdark.jpg",
    },
    {
        scene_id: 6,
        story: "ขณะที่คุณเล่นโทรศัพท์อยู<br/>จู่ๆก็มีข้อความเด้งขึ้นมา",
        background: "/mystery-market/assets/background/roombgdark.jpg",
        go: 8
    },
    {
        scene_id: 7,
        story: "ขณะที่คุณเล่นเกมบนคอมพิวเตอร์<br/>จู่ๆก็มีข้อความเด้งขึ้นมา",
        background: "/mystery-market/assets/background/roombgdark.jpg",
        go: 8
    },
    {
        scene_id: 8,
        story: "เพื่อนของคุณทักคุณมา<br/>เฮ้...{getname} ไปเที่ยวตลาดน้ำกัน",
        choice: [
            { title: "ตอบข้อความ", go: 10 }, 
            { title: "ไม่ตอบข้อความ", go: 9 }, // bad ending
        ],
        background: "/mystery-market/assets/background/roombgdark.jpg",
    },
    {
        scene_id: 9, // ending
        story: "ถึงเธอที่รัก ช่างน่าเสียตายจริงๆ<br/>การเดินทางของคุณต้องจบลง<br/>โดยที่ไม่ได้รู้ความลับอะไรเลย<br/>ไม่เป็นไรนะ ยังมีเส้นทางอื่นๆมากมายรอคุณอยุ่<br/>ถ้าเธออยากรู้ผลลัพธ์อื่นๆละก็... ลองเล่นอีกครั่งดูสิ!",
        go: 0 // reset to start
    },
    {
        scene_id: 10,
        title: "ตอบข้อความไปว่า...",
        choice: [
            { title: "ไปสิ!<br/>แน่นอนเรื่องอะไรที่ฉันจะพลาด", go: 11, isAlone: false }, // extrovert 
            { title: "ไว้วันหลังนะ<br/>ช่วงนี้งานเยอะมากเลยTT", go: 11, isAlone: true}, // introvert
        ],
        background: "/mystery-market/assets/background/roombgdark.jpg",
    },
    {
        scene_id: 11,
        story: "หลังจากที่คุณปฎิเสธไปแล้ว<br/>คุณก็ได้ลองค้นหาข้อมูลตลาดน้ำแห่งนี้<br/>พบว่ามีของที่น่าสนใจอยู่ สิ่งนั้นคือ",
        choice: [
            { title: "บอร์ดเกมใหม่ล่าสุด รุ่น limited editon", go: 12, sunflower: 1 },
            { title: "ไว้วันหลังนะ<br/>ช่วงนี้งานเยอะมากเลยTT", go: 12, roses: 1 }, 
            { title: "หนังสือมือสองเกี่ยวกับวัฒนธรรม ท่องเที่ยว", go: 12, lavender: 1 },
            { title: "นาฬิกาอิเล็กทรอนิกส์ตั้งเตือนความจำ", go: 12, lilly: 1 },
            { title: "กล้องถ่ายรูปสำหรับถ่ายภาพธรรมชาติ", go: 12, forgetmenot: 1 }
        ],
        background: "/mystery-market/assets/background/roombgdark.jpg",
    },
    {
        scene_id: 12,
        story: "หลังจากที่เห็นของที่น่าสนใจแล้ว<br/>คุณจึงตัดสินใจที่จะไปเยี่ยมชมตลาดน้ำแห่งนี้<br/>แล้วเดินทางไปตลาดนำ้คนเดียว",
        background: "/mystery-market/assets/background/roombgdark.jpg",
        go: 15
    },
    {
        scene_id: 13,
        story: "หลังจากที่คุณตกลงไปกับเพื่อนของคุณแล้ว<br/>คุณก็ได้ลองค้นหาข้อมูลตลาดนำ้แห่งนี้<br/>และพบว่ามีของที่น่าสนใจอยู่ สิ่งนั้นคือ",
        choice: [
            { title: "บอร์ดเกมใหม่ล่าสุด รุ่น limited editon", go: 14, sunflower: 1 },
            { title: "อุปกรณ์วาดรูปสำหรับเด็ก", go: 14, roses: 1 },
            { title: "หนังสือมือสองเกี่ยวกับวัฒนธรรม ท่องเที่ยว", go: 14, lavender: 1 },
            { title: "นาฬิกาอิเล็กทรอนิกส์ตั้งเตือนความจำ", go: 14, lilly: 1 }, 
            { title: "กล้องถ่ายรูปสำหรับถ่ายภาพธรรมชาติ", go: 14, forgetmenot: 1 }
        ],
        background: "/mystery-market/assets/background/roombgdark.jpg",
    },
    {
        scene_id: 14,
        story: "หลังจากที่เห็นของที่น่าสนใจแล้ว<br/>คุณจึงตัดสินใจนัดเวลาและจุดนัดพบ<br/>แล้วเดินทางไปตลาดน้ำกับเพื่อนคุณ",
        background: "/mystery-market/assets/background/roombgdark.jpg",
        go: 15
    },
    {
        scene_id: 15,
        children: <Market01 />,
        background: "/mystery-market/assets/background/roombgdark.jpg",
    },
    {
        scene_id: 16,
        children: <Market02 />,
        background: "/mystery-market/assets/background/roombgdark.jpg",
    }
]