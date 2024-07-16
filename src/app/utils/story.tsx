import { IStory } from "../interfaces/IStory";
import Start from "../components/storys/1";
import ButterflyEffect from "../components/storys/2";
import UserEnterName from "../components/storys/3";

// ใช้ <br/> ในการขึ้นบรรทัดใหม่
// ถ้า background เป็น .mp4 ให้ใช้ poster ในการแสดงรูป preview ของ video
// ถ้า มี choice ให้ใส่ go ใน choice แล้วใส่ go ใน story ให้เป็น null

export const story: IStory[] = [
    {
        scene_id: 0,
        background: "/mystery-market/assets/background/rainbackground.mp4",
        children: <Start />,
        go: 1,
    },
    {
        scene_id: 1,
        background: "/mystery-market/assets/background/rainbackground.mp4",
        children: <ButterflyEffect />,
        go: 2,
    },
    {
        scene_id: 2,
        background: "/mystery-market/assets/background/rainbackground.mp4",
        children: <UserEnterName />,
        go: null,
    },
    {
        scene_id: 3,
        title: "บทนำ",
        story: "ท่ามกลามพายุฝนที่โหมซัดกระหน่ำ<br />เสียงพ่อค้าแม่ค้าเจื้อยแจ้วตลอดทาง<br />ผู้คนเร่งรีบกลับบ้านในยามค่ำคืน<br />............<br />คุณพึ่งเสร็จจากการทำงาน<br />เดินทางกลับบ้านด้วยใบหน้าที่เหนื่อยล้า.<br />เหมือนเดิมทุกๆวัน อย่างไร้จุดหมาย....<br />และในที่สุดก็กลับมาถึงบ้าน",
        choice: null,
        poster: "/mystery-market/assets/background/rainbackground.png",
        background: "/mystery-market/assets/background/rainbackground.mp4",
        go: 4
    },
    {
        scene_id: 4,
        title: "เมื่อคุณกลับถึงบ้านแล้ว<br/>ห้องของคุณเป็นอย่างไร",
        story: null,
        choice: [
            { title: "ห้องโมเดิร์น สไตล์ชิคๆ", go: 5 },
            { title: "ห้องมินิมอล สไตล์น่ารัก", go: 5 },
            { title: "ห้องที่ไม่เป็นระเบียบ ของเต็มห้อง", go: 5 },
            { title: "ห้องที่จัดระเบียบแบ่งเป็นหมวดหมู่", go: 5 },
            { title: "ห้องที่บรรยากาศเงียบสงบ", go: 5 },
        ],
        background: "/mystery-market/assets/background/rainbackground.mp4",
        go: null
    },
    {
        scene_id: 5,
        title: "เมื่อคุณเข้ามาในห้องแล้ว<br/>สิ่งแรกที่คุณจะทำคือ",
        story: null,
        choice: [
            { title: "เล่นเกมออนไลน์กับเพื่อน วันนี้ต้องชนะ!", go: 6 },
            { title: "นั่งเล่นโทรศัพท์คนเดียว ที่โซฟาตัวโปรด", go: 6 },
        ],
        background: "/mystery-market/assets/background/roombgdark.jpg",
        go: null

    }
]