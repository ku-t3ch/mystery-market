import { IStory } from "../interfaces/IStory";

// ใช้ <br/> ในการขึ้นบรรทัดใหม่

export const story: IStory[] = [
    {
        "scene_id": 0,
        "title": "บทนำ",
        "story": "ท่ามกลามพายุฝนที่โหมซัดกระหน่ำ<br/>เสียงพ่อค้าแม่ค้าเจื้อยแจ้วตลอดทาง<br/>ผู้คนเร่งรีบกลับบ้านในยามค่ำคืน<br/>............<br/>คุณพึ่งเสร็จจากการทำงาน<br/>เดินทางกลับบ้านด้วยใบหน้าที่เหนื่อยล้า.<br/>เหมือนเดิมทุกๆวัน อย่างไร้จุดหมาย....<br/>และในที่สุดก็กลับมาถึงบ้าน",
        "choice": null,
        "background": "/mystery-market/assets/background/rainbackground.mp4"
    },
    {
        "scene_id": 1,
        "title": "เมื่อคุณกลับถึงบ้านแล้ว ห้องของคุณเป็นอย่างไร",
        "story": null,
        "choice": [
            "ห้องโมเดิร์น สไตล์ชิคๆ",
            "ห้องมินิมอล สไตล์น่ารักๆ",
            "ห้องที่ไม่เป็นระเบียบ ของเต็มห้อง",
            "ห้องที่จัดระเบียบแบ่งเป็นหมวดหมู่",
            "ห้องที่บรรยากาศเงียบสงบ"
        ],
        "background": "/mystery-market/assets/background/roombgdark.jpg"
    },
    {
        "scene_id": 2,
        "title": "เมื่อคุณเข้ามาในห้องแล้ว สิ่งแรกที่คุณจะทำคือ",
        "story": null,
        "choice": [
            "เล่นเกมออนไลน์กับเพื่อน วันนี้ต้องชนะ!",
            "นั่งเล่นโทรศัพท์คนเดียว ที่โซฟาตัวโปรด"
        ],
        "background": "/mystery-market/assets/background/roombgdark.jpg"
    }
]