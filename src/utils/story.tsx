import { IStory } from "../interfaces/IStory";
import Start from "../components/storys/1";
import ButterflyEffect from "../components/storys/2";
import UserEnterName from "../components/storys/3";
import Market01 from "../components/storys/15";
import Market02 from "../components/storys/16";
import MarketTextField from "@/components/storys/209";
import PreEnding from "@/components/storys/314";
import PreAloneEnding from "@/components/storys/215";
import EndingNote from "@/components/storys/225";
import Garden from "@/components/storys/17";
import Ocean from "@/components/storys/Ocean";
import TheFlower from "@/components/storys/TheFlower";

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
    story:
      "ท่ามกลามพายุฝนที่โหมซัดกระหน่ำ<br />เสียงพ่อค้าแม่ค้าเจื้อยแจ้วตลอดทาง<br />ผู้คนเร่งรีบกลับบ้านในยามค่ำคืน<br />",
    poster: "/mystery-market/assets/background/rainbackground-resize.webp",
    go: 3.1,
  },

  {
    scene_id: 3.1,
    story:
      "คุณพึ่งเสร็จจากการทำงาน<br />เดินทางกลับบ้านด้วยใบหน้าที่เหนื่อยล้า.<br />เหมือนเดิมทุกๆวัน อย่างไร้จุดหมาย....<br />และในที่สุดก็กลับมาถึงบ้าน",
    poster: "/mystery-market/assets/background/rainbackground-resize.webp",
    go: 4,
  },
  {
    scene_id: 4,
    title: "เมื่อคุณกลับถึงบ้านแล้ว<br/>ห้องของคุณเป็นอย่างไร",
    story: null,
    choice: [
      {
        title: "ห้องโมเดิร์น สไตล์ชิคๆ",
        go: 5,
        sunflower: 1,
        firstFlower: "sunflower",
      },
      {
        title: "ห้องมินิมอล สไตล์น่ารัก",
        go: 5,
        roses: 1,
        firstFlower: "roses",
      },
      {
        title: "ห้องที่ไม่เป็นระเบียบ ของเต็มห้อง",
        go: 5,
        lavender: 1,
        firstFlower: "lavender",
      },
      {
        title: "ห้องที่จัดระเบียบแบ่งเป็นหมวดหมู่",
        go: 5,
        lilly: 1,
        firstFlower: "lilly",
      },
      { title: "ห้องที่บรรยากาศเงียบสงบ", go: 5, forgetmenot: 1 },
    ],
  },
  {
    scene_id: 5,
    title: "เมื่อคุณเข้ามาในห้องแล้ว<br/>สิ่งแรกที่คุณจะทำคือ",
    choice: [
      { title: "เล่นเกมออนไลน์กับเพื่อน วันนี้ต้องชนะ!", go: 7 },
      { title: "นั่งเล่นโทรศัพท์ที่โซฟาตัวโปรด", go: 6 },
    ],
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
  },
  {
    scene_id: 6,
    story: "ขณะที่คุณเล่นโทรศัพท์อยู่<br/>จู่ๆก็มีข้อความเด้งขึ้นมา",
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 8.1,
  },
  {
    scene_id: 7,
    story: "ขณะที่คุณเล่นเกมอยู่<br/>จู่ๆก็มีข้อความเด้งขึ้นมา",
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 8.1,
  },
  {
    scene_id: 8.1,
    title: `อ่านข้อความเลยมั้ย`,
    choice: [
      { title: "อ่านข้อความ", go: 10 },
      { title: "ค่อยอ่านอีกที", go: 8.2 }, // bad ending
    ],
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
  },
  {
    scene_id: 8.2,
    story: `เวลาผ่านไปช่วงนึง คุณจึงเปิดมือถืออีกครั้ง`,
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 8.3,
  },
  {
    scene_id: 8.3,
    title: `อ่านข้อความเลยมั้ย`,
    choice: [
      { title: "อ่านข้อความ", go: 10 },
      { title: "ค่อยอ่านอีกที", go: 8.4 }, // bad ending
    ],
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
  },
  {
    scene_id: 8.4,
    title: `จะไม่อ่านจริง ๆ หรอ`,
    choice: [
      { title: "อ่านก็ได้", go: 10 },
      { title: "ไม่อ่าน", go: 8.5 }, // bad ending
    ],
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
  },
  {
    scene_id: 8.5,
    title: `. . .`,
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 9,
  },
  {
    scene_id: 9, // ending
    title: "Bad Ending",
    story:
      "ถึงเธอที่รัก ช่างน่าเสียตายจริงๆ<br/>การเดินทางของคุณต้องจบลง<br/>โดยที่ไม่ได้รู้ความลับอะไรเลย<br/>ไม่เป็นไรนะ ยังมีเส้นทางอื่นๆมากมายรอคุณอยุ่<br/>ถ้าเธออยากรู้ผลลัพธ์อื่นๆละก็... ลองเล่นอีกครั่งดูสิ!",
    go: 0, // reset to start
  },
  {
    scene_id: 10,
    title: `"{getName} ไปตลาดน้ำ<br/>เป็นเพื่อนเราหน่อยสิ"`,
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 10.1,
  },
  {
    scene_id: 10.1,
    story: `คุณเคยได้ยินชื่อตลาดน้ำนี้มาผ่าน ๆ<br/>และคุณเองก็เคยอยากที่จะไปสักครั้ง`,
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 10.3,
  },
  {
    scene_id: 10.3,
    title: `คุณตอบข้อความเพื่อนของคุณไปว่า`,
    choice: [
      {
        title: "ได้ ๆ ไปกัน",
        go: 13,
        isAlone: false,
      }, // extrovert
      {
        title: "ไว้วันหลังนะ",
        go: 11,
        isAlone: true,
      }, // introvert
    ],
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
  },
  {
    scene_id: 11,
    story:
      "หลังจากที่คุณปฎิเสธไปแล้ว<br/>คุณก็ได้ลองค้นหาข้อมูลตลาดน้ำแห่งนี้<br/>พบว่ามีของที่น่าสนใจอยู่ สิ่งนั้นคือ",
    choice: [
      { title: "บอร์ดเกมใหม่ที่คุณสนใจ", go: 12, sunflower: 1 },
      { title: "อุปกรณ์วาดรูปสำหรับเด็ก", go: 12, roses: 1 },
      {
        title: "หนังสือมือสองเกี่ยวกับวัฒนธรรม ท่องเที่ยว",
        go: 12,
        lavender: 1,
      },
      { title: "นาฬิกาอิเล็กทรอนิกส์ตั้งเตือนความจำ", go: 12, lilly: 1 },
      { title: "กล้องถ่ายรูปสำหรับถ่ายภาพธรรมชาติ", go: 12, forgetmenot: 1 },
    ],
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
  },
  {
    scene_id: 12,
    story:
      "หลังจากที่เห็นของที่น่าสนใจแล้ว<br/>คุณจึงตัดสินใจที่จะไปเยี่ยมชมตลาดน้ำแห่งนี้<br/>แล้วเดินทางไปตลาดน้ำด้วยตัวเอง",
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 15.1,
  },
  {
    scene_id: 13,
    story:
      "หลังจากที่คุณตกลงไปกับเพื่อนของคุณแล้ว<br/>คุณก็ได้ลองค้นหาข้อมูลตลาดนำ้แห่งนี้<br/>และพบว่ามีของที่น่าสนใจอยู่ สิ่งนั้นคือ",
    choice: [
      { title: "บอร์ดเกมใหม่ที่คุณสนใจ", go: 14, sunflower: 1 },
      { title: "อุปกรณ์วาดรูปสำหรับเด็ก", go: 14, roses: 1 },
      {
        title: "หนังสือมือสองเกี่ยวกับวัฒนธรรม ท่องเที่ยว",
        go: 14,
        lavender: 1,
      },
      { title: "นาฬิกาอิเล็กทรอนิกส์ตั้งเตือนความจำ", go: 14, lilly: 1 },
      { title: "กล้องถ่ายรูปสำหรับถ่ายภาพธรรมชาติ", go: 14, forgetmenot: 1 },
    ],
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
  },
  {
    scene_id: 14,
    story:
      "หลังจากที่เห็นของที่น่าสนใจแล้ว<br/>คุณจึงตัดสินใจนัดเวลาและจุดนัดพบ<br/>แล้วเดินทางไปตลาดน้ำกับเพื่อนคุณ",
    background: "/mystery-market/assets/background/roombgdark-resize.webp",
    go: 15.1,
  },
  {
    scene_id: 15.1,
    children: <Ocean />,
    go: 15,
  },
  {
    scene_id: 15,
    children: <Market01 />,
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 16,
    children: <Market02 />,
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 17,
    children: <Garden />,
    background: "/mystery-market/assets/background/roombglight-resize.webp",
  },
  {
    scene_id: 201,
    story: "ไม่เข้าไปดูจริงเหรอ?",
    choice: [
      { title: "ไปดูก็ได้", go: 202, roses: 1 },
      { title: "อยู่ที่เดิม", go: 201.1 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 201.1,
    story: "คุณรออาหารจนเสร็จ กินอาหาร <br/>จากนั้นก็เดินไปเดินเล่นต่อ",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 201.2,
  },
  {
    scene_id: 201.2,
    story: "อยู่ๆ แสงข้างทางก็ค่อยๆมืดลง <br/> แต่คุณก็ยังคงเดินตรงไป",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 202,
  },
  {
    scene_id: 202,
    story: "เมื่อคุณเดินเข้าไป คุณพบกับ....",
    choice: [
      { title: "สัตว์เลี้ยงที่สภาพมอมแมม", go: 203, selectedAnimal: true },
      { title: "เด็กผู้หญิงตัวเล็กคนนึง", go: 205 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 203,
    story: "สัตว์ตัวนั้นคือ...",
    choice: [
      { title: "น้องหมา", go: 206 },
      { title: "น้องแมว", go: 207 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 204,
    story:
      "หลังจากเหตุการณ์ทุกอย่างจบลง<br />ถึงแม้ว่ามันจะดึกแล้ว<br />แต่คุณยังรู้สึกไม่อยากกลับบ้าน<br />จึงไปนั่งเรือพายชมแสงจันทร์<br />" +
      "ซึ่งเป็นไฮไลท์ของตลาดน้ำราตรีแห่งนี้อีกครั้ง",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 210,
  },
  {
    scene_id: 205,
    story: "ระหว่างทางคุณพบเด็กน้อยกำลังในมือถือกระดาษรูปภาพดอกไม้",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 209,
  },
  {
    scene_id: 206,
    story: "สภาพของมันไม่ค่อยสู้ดีนัก</br>คุณมีขวดน้ำที่ยังไม่ได้เปิดอยู่",
    choice: [
      { title: "เทน้ำให้กิน", go: 208.1, dog: true },
      { title: "ไม่เทน้ำให้กิน", go: 208.2 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 207,
    story: "สภาพของมันไม่ค่อยสู้ดีนัก</br>คุณมีขวดน้ำที่ยังไม่ได้เปิดอยู่",
    choice: [
      { title: "เทน้ำให้กิน", go: 208.1, cat: true },
      { title: "ไม่เทน้ำให้กิน", go: 208.2 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 208.1,
    story:
      "หลังจากที่คุณให้น้ำสัตว์เสร็จแล้ว</br> คุณจึงเดินไปกลับไปที่โต๊ะของคุณ",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 205,
  },
  {
    scene_id: 208.2,
    story: "คุณเดินออกมาและกลับไปที่โต๊ะของคุณ",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 205,
  },
  {
    scene_id: 209,
    story: "ไม่รู้ทำไมแต่คุณรู้สึก<br/>เหมือนเคยผ่านเหตุการณ์นี้มาก่อน",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 209.1,
  },
  {
    scene_id: 209.1,
    story: "คุณเข้าไปกอดเด็กน้อยคนนี้ <br/>เด็กน้อยคอยๆสงบลง",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 210,
  },
  {
    scene_id: 210,
    story:
      "อยู่ ๆ คุณกลับรู้สึกง่วงนอนแปลก ๆ<br /> ความรู้สึกสุดท้ายที่คุณจำได้คือหนังตาที่เริ่มหย่อนลง <br />ความรู้สึกที่ค่อย ๆ ล่องลอยไป<br />",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 210.1,
  },
  {
    scene_id: 210.1,
    title: "คุณค่อย ๆ จมลงไปสู่แม่น้ำในห้วงลึก",
    // background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 210.2,
  },
  {
    scene_id: 210.2,
    title: ". . .",
    // background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 211,
  },
  {
    scene_id: 211,
    story:
      "เมื่อคุณลืมตามาอีกที<br />" +
      "คุณพบว่าตัวเองอยู่ในห้วงสายธารแห่งท้องทะเลสีคราม<br />" +
      "และได้พบกับภูตที่มอบพรวิเศษ 1 ข้อ<br />",

    // background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 211.1,
  },
  {
    scene_id: 211.1,
    story:
      "พรนี้เป็นพรขอบคุณผู้มาเยือน<br />ตลาดราตรีแสงจันทร์ในคืนนี้" +
      "และเมื่อคุณเลือกไปแล้ว<br />" +
      "คุณจะไม่สามารถเปลี่ยนแปลงมันได้อีก<br />",
    // background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 211.2,
  },
  {
    scene_id: 211.2,
    title: " โปรดเลือกในสิ่งที่คุณปรารถนามากที่สุด",
    // background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 212,
  },
  {
    scene_id: 212,
    choice: [
      {
        title:
          "ขออยู่ในโลกแห่งความฝันและ<br />จินตนาการไม่มีกาลเวลา ไม่มีกฏเกณฑ์ควบคุม",
        go: 213.1,
      },
      {
        title:
          "ขออยู่ในโลกแห่งความเป็นจริงโดย<br />มีชีวิตที่มั่นคงและได้ทุกอย่างในสิ่งที่มุ่งหวั่ง",
        go: 213.2,
      },
    ],
    // background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 213.1,
    title: "คุณสะดุ้งตื่นขึ้นมาจากความฝัน",
    go: 213,
    background: "/mystery-market/assets/background/roombglight.webp",
  },
  {
    scene_id: 213.2,
    title: "คุณกลับมาสู่โลกความเป็นจริง",
    go: 213,
    background: "/mystery-market/assets/background/roombglight.webp",
  },
  {
    scene_id: 213,
    story:
      "แสงยามเช้าอันสดใส<br />เสียงนกที่คอยร้องเพลงในตอนเช้าตรู่<br />จนทำให้คุณเริ่มรู้สึกตัว<br />เมื่อลืมตาตื่นขึ้นมาคุณก็" +
      "ได้ยินเสียงนาฬิกาปลุก<br />ที่ดังตามเวลาที่เคยเป็นเฉกเช่นกิจวัตรประจำวัน",
    go: 214,
    background: "/mystery-market/assets/background/roombglight.webp",
  },
  {
    scene_id: 214,
    story:
      "หลังจากที่ปิดนาฬิกาไปแล้ว<br />คุณก็นึกถึงเรื่องราวที่เกิดขึ้นเมื่อวาน<br />คุณคว้าโทรศัพท์เพื่อค้นหาเกี่ยวกับตลาดน้ำราตรีนั้น",
    go: 215.1,
    background: "/mystery-market/assets/background/roombglight.webp",
  },

  {
    scene_id: 215.1,
    title: "แต่ก็พบว่าไม่มีใครเขียน<br/>เรื่องตลาดน้ำราตรีแห่งนี้เลย",
    go: 1000,
  },
  {
    scene_id: 1000,

    choice: [
      {
        title: "เข้าสู่บทสุดท้าย",
        go: 1001,
      },
    ],
  },
  {
    scene_id: 1001,
    children: <EndingNote />,
    background: "/mystery-market/assets/background/roombglight.webp",
    go: 1002,
  },
  {
    scene_id: 1002,
    story: "ที่โต๊ะของคุณมีดอกไม้และกระดาษใบหนึ่ง คุณอ่านข้อความในกระดาษ",
    background: "/mystery-market/assets/background/roombglight.webp",
    go: 1002.1,
  },
  {
    scene_id: 1002.1,
    title: "คุณมาเพื่อสิ่งนี้ใช่มั้ยละ รับไปสิ",
    background: "/mystery-market/assets/background/roombglight.webp",
    go: 1003,
  },
  {
    scene_id: 1003,
    children: <TheFlower />,
    background: "/mystery-market/assets/background/roombglight.webp",
  },

  {
    scene_id: 216,
    story:
      "คุณตื่นมาในร่างเด็กตัวเล็กคนหนึ่ง<br />อยู่ในห้องนอนเพียงลำพัง<br />ไร้เสียงของสิ่งมีชีวิตใดๆ<br />แสงรำไรส่องกระทบผ่านเปียโนตัวโปรด<br />" +
      "คุณดื่มด่ำไปกับภาพตรงหน้าและคิดว่าจะทำอย่างไรต่อดี",
    go: 224,
  },
  {
    scene_id: 217,
    story:
      "คุณตื่นมาในร่างกายเด็กตัวเล็กคนหนึ่ง<br />อยู่ในห้องนอนเพียงลำพัง<br />ไร้เสียงของสิ่งมีชีวิตใดๆ<br />แสงรำไรส่องกระทบผ่านเปียโนตัวโปรด<br />คุณดื่มด่ำไปกับภาพตรงหน้าและคิดว่าจะทำอย่างไรต่อดี",
    go: 225,
  },
  {
    scene_id: 218,
    story:
      "คุณตื่นมาในร่างกายเด็กตัวเล็กคนหนึ่ง<br />อยู่ในห้องนอนเพียงลำพัง<br />แต่ทันใดนั้นมีเสียงบ๊อกๆอยู่บนตัวของคุณ<br />เจ้าโฮ่งตัวจิ๋วจ้องมองตาแป๋ว<br />ในที่สุดชีวิตอันแสนสงบก็เริ่มมีชีวิตชีวามากกว่าเดิม",
    go: 225,
  },
  {
    scene_id: 219,
    story:
      "คุณตื่นมาในร่างกายเด็กตัวเล็กคนนึ่ง<br />อยู่ในห้องนอนเพียงลำพัง<br />แต่ทันใดนั้นมีเสียงเมี๊ยวอยู่บนตัวของคุณ<br />เจ้าเหมียวตัวจิ๋วจ้องมองตาแป๋ว<br />ในที่สุดชีวิตอันแสนสงบก็เริ่มมีชีวิตชีวามากกว่าเดิม",
    go: 225,
  },
  {
    scene_id: 220,
    story:
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิม<br />อยู่ในห้องนอนเพียงลำพัง<br />ไร้เสียงของสิ่งมีชีวิตใดๆ<br />แสงรำไรส่องกระทบผ่านเปียโนตัวโปรด<br />คุณดื่มด่ำไปกับภาพตรงหน้าและคิดว่าจะทำอย่างไรต่อดี",
    go: 224,
  },
  {
    scene_id: 221,
    story:
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิม<br />อยู่ในห้องนอนเพียงลำพัง<br />ไร้เสียงของสิ่งมีชีวิตใดๆ<br />แสงรำไรส่องแสงกระทบผ่านเปียโนตัวโปรด<br />คุณดื่มด่ำไปกับภาพตรงหน้าและคิดว่าจะทำอย่างไรต่อดี",
    go: 225,
  },
  {
    scene_id: 222,
    story:
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิม<br />อยู่ในห้องนอนเพียงลำพัง<br />แต่ทันใดนั้นมีเสียงบ๊อกๆอยู่บนตัวของคุณ<br />เจ้าโฮ่งตัวจิ๋วจ้องมองตาแป๋ว แล้วกระดิกหางอย่างร่าเริง<br />ในที่สุดชีวิตอันแสนสงบก็เริ่มมีชีวิตชีวามากกว่าเดิม",
    go: 225,
  },
  {
    scene_id: 223,
    story:
      "คุณตื่นมาในร่างผู้ใหญ่เหมือนเดิม<br />อยู่ในห้องนอนเพียงลำพัง<br />แต่ทันใดนั้นมีเสียงเมี๊ยวอยู่บนตัวของคุณ<br />เจ้าเหมียวตัวจิ๋วจ้องมองตาแป๋ว แล้วส่ายหางไปมา<br />ในที่สุดชีวิตอันแสนสงบก็เริ่มมีชีวิตชีวามากกว่าเดิม",
    go: 225,
  },
  {
    scene_id: 224,
    story: "คุณลุกขึ้นมาและพบแค่ดอกไม้ 1 ดอกที่วางไว้อยู่บนโต๊ะ",
    go: 17,
  },
  {
    scene_id: 225,
    children: <EndingNote />,
  },

  // -----------------------------------------------

  {
    scene_id: 301,
    title: "เพื่อนของคุณปฏิเสธไม่ไปดูกล่อง</br>เพราะสนใจอาหารตรงหน้ามากกว่า...",
    choice: [{ title: "ค่อยๆเดินเข้าไปดู", go: 303, lilly: 1 }],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 302,
    title: "มีเสียงบางอย่างออกมาจากกล่อง",
    choice: [
      { title: "ไปดูก็ได้ แต่ไปคนเดียว", go: 303, roses: 1 },
      { title: "อยู่ที่เดิมกับเพื่อนๆ", go: 303, forgetmenot: 1 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 303,
    title: "เมื่อคุณเดินเข้าไป คุณพบกับ...",
    choice: [
      { title: "เด็กน้อยกำลังร้องไห้อยู่", go: 304 },
      { title: "สัตว์เลี้ยงที่สภาพมอมแมม", go: 305, selectedAnimal: true },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 304,
    story:
      "คุณรู้สึกแปลกใจที่เสียงร้องไห้ของเด็กคนนั้น<br/>คุ้นเคยอย่างแปลกประหลาด<br/>เพื่อนของคุณก็เข้าไปกับคุณเช่นกัน",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 310,
  },
  {
    scene_id: 305,
    title: "สัตว์ตัวนั้นคือ",
    choice: [
      { title: "น้องหมา", go: 307 },
      { title: "น้องแมว", go: 308 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 306,
    story:
      "หลังจากเหตุการณ์ทุกอย่างจบลง <br/>ถึงแม้ว่ามันจะดึกแล้ว<br/>แต่คุณยังรู้สึกไม่อยากกลับบ้าน <br/>จึงชวนเพื่อนไปนั่งพายเรือชมจันทร<br/>ซึ่งเป็นไฮไลท์ของตลาดน้ำราตรีแห่งนี้อีกครั้ง",
    background: "/mystery-market/assets/background/boatvod1_047.webp", //เข้าสู่ช่วงบทขอพร บทที่ 2 (ฉากท้องทะเลป่ะ อะไรสักอย่างที่มันฟริ้งๆ)
    go: 311,
  },
  {
    scene_id: 307,
    title: "สภาพของมันไม่ค่อยสู้ดีนัก<br/>คุณมีขวดน้ำที่ยังไม่ได้เปิดอยู่",
    choice: [
      { title: "เทน้ำให้กิน", go: 309, dog: true },
      { title: "ไม่เทน้ำให้กิน", go: 309 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 308,
    title: "สภาพของมันไม่ค่อยสู้ดีนัก<br/>คุณมีขวดน้ำที่ยังไม่ได้เปิดอยู่",
    choice: [
      { title: "เทน้ำให้กิน", go: 309, cat: true },
      { title: "ไม่เทน้ำให้กิน", go: 309 },
    ],
    background: "/mystery-market/assets/background/boatvod1_047.webp",
  },
  {
    scene_id: 309,
    story: "ระหว่างเดินกลับไปที่โต๊ะคุณก็ได้พบกับ<br/>เด็กน้อยกำลังร้องไห้อยู่",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 304,
  },
  {
    scene_id: 310,
    story: "เพื่อนของคุณเข้าไปปลอบเด็กคนนั้น คุณเองก็เช่นกัน", // เพิ่มfunctionใส่ข้อความ
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 310.1,
  },
  {
    scene_id: 310.1,
    story: "เด็กน้อยได้ให้กระดาษเกี่ยวกับดอกไม้<br/>ให้กับคุณและเพื่อนของคุณ", // เพิ่มfunctionใส่ข้อความ
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 306,
  },
  {
    scene_id: 311,
    story:
      "แม้ว่าจะมีเสียงคุยและดนตรีบรรเลง<br/>แต่ทว่าคุณกลับรู้สึกง่วงนอนแปลกๆ<br/>คุณหันไปดูรอบตัวคุณ",
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 312.1,
  },

  {
    scene_id: 312.1,
    story:
      "เพื่อนของคุณหายไป<br/>หนังตาคุณเริ่มหย่อนลง<br/>ความรู้สึกที่เหมือนตกจากเรือ",
    //background: , //อันนี้จะเป็นหน้าที่ไม่ได้มีช้อยเลือก ฉากเป็นเหมือนหน้าหนังสือ
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 210.1,
  },
  {
    scene_id: 312.2,
    story: "210.1",
    //background: , //อันนี้จะเป็นหน้าที่ไม่ได้มีช้อยเลือก ฉากเป็นเหมือนหน้าหนังสือ
    background: "/mystery-market/assets/background/boatvod1_047.webp",
    go: 312,
  },
  {
    scene_id: 312,
    story:
      "เมื่อคุณลืมตามาอีกที<br/>คุณพบว่า ตัวเองอยู่ในห้วงสายธารแห่งท้องทะเลสีคราม <br/>และได้พบกับภูตที่มอบพรวิเศษ 1 ข้อ<br/>พรนี้เป็นสำหรับผู้เดินทาง<br/>สำหรับตลาดราตรีแสงจันทร์ในคืนนี้<br/>เมื่อคุณเลือกไปแล้ว<br/>คุณจะไม่สามารถเปลี่ยนแปลงมันได้อีก<br/>เพราะฉะนั้น โปรดเลือกในสิ่งที่คุณปรารถนามากที่สุด",
    //background: , //อันนี้จะเป็นหน้าที่ไม่ได้มีช้อยเลือก ฉากเป็นเหมือนหน้าหนังสือ
    go: 313,
  },
  {
    scene_id: 313,
    title: null,
    choice: [
      { title: "ขออยู่ในโลกแห่งความฝันและจินตนาการ", go: 314, reality: false }, //ไปผลลัพธ์ ending 13-16
      { title: "ขออยู่ในโลกแห่งความเป็นจริง", go: 314, reality: true }, // ไปผลลัพธ์ ending 17-21
    ],
    //background: , ฉากเป็นเหมือนหน้าหนังสือ
  },
  {
    scene_id: 314,
    story:
      "แสงยามเช้าอันสดใส<br/>เสียงนกที่คอยร้องเพลงในตอนเช้าตรู่<br/>ทำให้คุณรู้สึกตัวและลืมตาตื่นขึ้นมา<br/>คุณก็ได้ยินเสียงนาฬิกาปลุกที่ดังตามเวลาเช่นเคย<br/><br/>หลังจากที่ปิดนาฬิกาปลุกแล้ว<br/>คุณสำรวจกับตัวเอง<br/>แล้วพบว่า…",
    // background:, //เปลี่ยนฉากทะเลเป็นฉากสดใส
    // go: ไปหน้า Ending
    // ใส่เพลง
  },
  {
    scene_id: 315,
    story:
      "หลังจากที่ปิดนาฬิกาปลุกแล้ว คุณก็นึกถึงเรื่องราวที่เกิดขึ้นเมื่อวาน<br />จึงได้คว้าโทรศัพท์เพื่อค้นหาเมื่อวานเกิดอะไรขึ้นบ้าง แต่เมื่อค้นหาเว็บแล้ว<br />พบว่าไม่มีใครเขียนบทความเรื่องตลาดน้ำราตรีแห่งนั้นได้เลย….",
    background: "",
  },
];
