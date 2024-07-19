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
        story: "ขณะที่คุณเล่นโทรศัพท์อยู่<br/>จู่ๆก็มีข้อความเด้งขึ้นมา",
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
    },
    {
        scene_id: 301,
        title: "เพื่อนของคุณปฏิเสธไม่ไปดูกล่อง</br>เพราะสนใจอาหารตรงหน้ามากกว่า...",
        choice: [
            { title: "ค่อยๆเดินเข้าไปดู", go: 303, lilly : 1 },
            
        ],
        background: "/mystery-market/assets/background/oceanbackground.png",
    },
    {
        scene_id: 302,
        title: "เธอจะไม่เข้าไปดูจริงๆเหรอ",
        choice: [
            { title: "ไปดูก็ได้ แต่ไปคนเดียว", go: 303, roses : 1 },
            { title: "อยู่ที่เดิมกับเพื่อนๆ", go: 303,  forgetmenot : 1 },
            
        ],
        background: "/mystery-market/assets/background/oceanbackground.png",
    },
    {
        scene_id: 303,
        title: "เมื่อคุณเดินเข้าไป คุณพบกับ",
        choice: [
            { title: "เด็กน้อยกำลังร้องไห้อยู่", go: 304 },
            { title: "สัตว์เลี้ยงที่สภาพมอมแมม", go: 305 },
            { title: "ความว่างเปล่า", go: 306 },
        ],
        background: "/mystery-market/assets/background/oceanbackground.png",
    },
    {
        scene_id: 304,
        story: "คุณรู้สึกแปลกใจที่เสียงร้องไห้ของเด็กคนนั้น<br/>คุ้นเคยอย่างแปลกประหลาด<br/>ดังนั้นคุณจึงตัดสินใจเข้าไปพูดคุยกับเด็กคนนั้น<br/>...........<br/>ก่อนจากลา<br/>คุณต้องการให้กำลังใจเด็กน้อยคนนั้น<br/>จึงเขียนกระดาษโน๊ตว่า",
        background: "/mystery-market/assets/background/oceanbackground.png",
        go: 310
    },
    {
        scene_id: 305,
        title: "สัตว์ตัวนั้นคือ",
        choice: [
            { title: "น้องหมา", go: 307, },
            { title: "น้องแมว", go: 308, },
            
        ],
        background: "/mystery-market/assets/background/oceanbackground.png",
    },
    {
        scene_id: 306,
        story: "หลังจากเหตุการณ์ทุกอย่างจบลง ..........<br/>ถึงแม้ว่ามันจะดึกแล้ว<br/>แต่คุณยังรู้สึกไม่อยากกลับบ้าน <br/>จึงชวนเพื่อนไปนั่งพายเรือชมจันทร<br/>ซึ่งเป็นไฮไลท์ของตลาดน้ำราตรีแห่งนี้อีกครั้ง",
        background: "/mystery-market/assets/background/oceanbackground.png", //เข้าสู่ช่วงบทขอพร บทที่ 2 (ฉากท้องทะเลป่ะ อะไรสักอย่างที่มันฟริ้งๆ)
        go: 311
    },
    {
        scene_id: 307,
        title: "สภาพของมันไม่ค่อยสู้ดีนัก<br/>โชคดีคุณมีขวดน้ำที่ยังไม่ได้เปิดอยู่ <br/> คุณจะ....ทำอย่างไรกับน้องหมาตัวนี้ดี",
        choice: [
            { title: "เทน้ำให้กิน", go: 309, dog : 1 }, 
            { title: "ไม่เทน้ำให้กิน", go: 309, }, 
            
        ],
        background: "/mystery-market/assets/background/oceanbackground.png",
    },
    {
        scene_id: 308,
        title: "สภาพของมันไม่ค่อยสู้ดีนัก<br/>โชคดีคุณมีขวดน้ำที่ยังไม่ได้เปิดอยู่ <br/> คุณจะ....ทำอย่างไรกับน้องแมวตัวนี้ดี",
        choice: [
            { title: "เทน้ำให้กิน", go: 309, cat : 1 }, 
            { title: "ไม่เทน้ำให้กิน", go: 309, }, 
            
        ],
        background: "/mystery-market/assets/background/oceanbackground.png",
    },
    {
        scene_id: 309,
        story: "ระหว่างเดินกลับไปที่โต๊ะคุณก็ได้พบกับ<br/>เด็กน้อยกำลังร้องไห้อยู่",
        background: "/mystery-market/assets/background/oceanbackground.png",
        go: 304
    },
    {
        scene_id: 310,
        story: "{input_text} ใส่ข้อความให้เด็กน้อย", // เพิ่มfunctionใส่ข้อความ
        background: "/mystery-market/assets/background/oceanbackground.png",
        go: 306
    }, 
    {
        scene_id: 311,
        story: "แม้ว่าจะมีเสียงคุยและดนตรีบรรเลง<br/>แต่ทว่าคุณกลับรู้สึกง่วงนอนแปลกๆ<br/>ระหว่างที่นั่งเรือกับเพื่อน<br/><br/>สิ่งสุดท้ายที่คุณจำได้<br/>คือหนังตาที่เริ่มหย่อนลง <br/>ความรู้สึกที่เหมือนตกจากเรือ <br/> แล้วจมลงสู่แม่น้ำดำดิ่งลงไป……",
        background: "/mystery-market/assets/background/oceanbackground.png",
        go: 312
    },
    {
        scene_id: 312,
        story: "เมื่อคุณลืมตามาอีกที<br/>คุณพบว่า ตัวเองอยู่ในห้วงสายธารแห่งท้องทะเลสีคราม <br/>และได้พบกับภูตที่มอบพรวิเศษ 1 ข้อ<br/>พรนี้เป็นพรขอบคุณ <br/>สำหรับการเดินทางตลาดราตรีแสงจันทร์ในคืนนี้<br/>เมื่อคุณเลือกไปแล้ว<br/>คุณจะไม่สามารถเปลี่ยนแปลงมันได้อีก<br/>เพราะฉะนั้น โปรดเลือกในสิ่งที่คุณปรารถนามากที่สุด",
        //background: , //อันนี้จะเป็นหน้าที่ไม่ได้มีช้อยเลือก ฉากเป็นเหมือนหน้าหนังสือ
        go: 313
    },
    {
        scene_id: 313,
        title: null ,
        choice: [
            { title: "ขออยู่ในโลกแห่งความฝันและจินตนาการ", go: 314}, //ไปผลลัพธ์ ending 13-16
            { title: "ขออยู่ในโลกแห่งความเป็นจริง", go: 314, }, // ไปผลลัพธ์ ending 17-21
            
        ],
        //background: , ฉากเป็นเหมือนหน้าหนังสือ
    },
    {
        scene_id: 314,
        story: "แสงยามเช้าอันสดใส<br/>เสียงนกที่คอยร้องเพลงในตอนเช้าตรู่<br/>ทำให้คุณรู้สึกตัวและลืมตาตื่นขึ้นมา<br/>คุณก็ได้ยินเสียงนาฬิกาปลุกที่ดังตามเวลาเช่นเคย<br/><br/>หลังจากที่ปิดนาฬิกาปลุกแล้ว<br/>คุณสำรวจกับตัวเอง<br/>แล้วพบว่า…",
        // background:, //เปลี่ยนฉากทะเลเป็นฉากสดใส
        // go: ไปหน้า Ending 
        // ใส่เพลง
    },
]