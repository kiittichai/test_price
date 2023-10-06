// เชื่อมต่อ WebSocket
// const WebSocket = require("ws");
const socket = new WebSocket('wss://www.sctgold.com/primepush/productPrice/100/ONLINE/A');

// หา elements ของราคา
const priceAElement = document.getElementById('priceA');
const priceBElement = document.getElementById('priceB');
const priceCElement = document.getElementById('priceC');

// ราคา SCT Gold
const priceDElement = document.getElementById('priceD');
const priceEElement = document.getElementById('priceE');
const priceFElement = document.getElementById('priceF');

const priceGElement = document.getElementById('priceG');
const priceHElement = document.getElementById('priceH');
const priceIElement = document.getElementById('priceI');

const priceJElement = document.getElementById('priceJ');
const priceKElement = document.getElementById('priceK');
const priceLElement = document.getElementById('priceL');

const priceMElement = document.getElementById('priceM');
const priceNElement = document.getElementById('priceN');
const priceOElement = document.getElementById('priceO');

const pricePElement = document.getElementById('priceP');
const priceQElement = document.getElementById('priceQ');
const priceRElement = document.getElementById('priceR');

const priceSElement = document.getElementById('priceS');
const priceTElement = document.getElementById('priceT');
const priceUElement = document.getElementById('priceU');

const priceVElement = document.getElementById('priceV');
const priceWElement = document.getElementById('priceW');
const priceXElement = document.getElementById('priceX');

// สร้างตัวแปรเพื่อเก็บราคาก่อนหน้าและ Timestamp
let previousSellPrice = null;
let previousTimestamp = null;
let previousSellPrice_2 = null;
let previousTimestamp_2 = null;
let previousSellPrice_3 = null;
let previousTimestamp_3 = null;
let previousSellPrice_4 = null;
let previousTimestamp_4 = null;
let previousSellPrice_5 = null;
let previousTimestamp_5 = null;
let previousSellPrice_6 = null;
let previousTimestamp_6 = null;
let previousSellPrice_7 = null;
let previousTimestamp_7 = null;
let previousSellPrice_8 = null;
let previousTimestamp_8 = null;

// เมื่อมีข้อมูลถึง
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const newSellPrice = data.productPriceDTOs[2].sellPrice;
    const newSellPrice_2 = data.productPriceDTOs[5].sellPrice;
    const newSellPrice_3 = data.productPriceDTOs[6].sellPrice;
    const newSellPrice_4 = data.productPriceDTOs[14].sellPrice;
    const newSellPrice_5 = data.productPriceDTOs[7].sellPrice;
    const newSellPrice_6 = data.productPriceDTOs[6].sellPrice;
    const newSellPrice_7 = data.productPriceDTOs[0].sellPrice;
    const newSellPrice_8 = data.productPriceDTOs[3].sellPrice;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice !== newSellPrice) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column C)
        if (previousSellPrice !== null) {
            const priceChange = newSellPrice - previousSellPrice;
            priceCElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceCElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column A)
        priceAElement.textContent = newSellPrice;

        // อัปเดตราคาที่เปลี่ยนแปลง (column B)
        priceBElement.textContent = data.productPriceDTOs[2].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice = newSellPrice;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[2].timestamp;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_2 !== newSellPrice_2) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column F)
        if (previousSellPrice_2 !== null) {
            const priceChange = newSellPrice_2 - previousSellPrice_2;
            priceFElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceFElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column D)
        priceDElement.textContent = newSellPrice_2;

        // อัปเดตราคาที่เปลี่ยนแปลง (column E)
        priceEElement.textContent = data.productPriceDTOs[5].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_2 = newSellPrice_2;
    }

    // อัปเดต Timestamp
    previousTimestamp_2 = data.productPriceDTOs[5].timestamp;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_3 !== newSellPrice_3) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column I)
        if (previousSellPrice_3 !== null) {
            const priceChange = newSellPrice_3 - previousSellPrice_3;
            priceIElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceIElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column G)
        priceGElement.textContent = newSellPrice_3;

        // อัปเดตราคาที่เปลี่ยนแปลง (column H)
        priceHElement.textContent = data.productPriceDTOs[6].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_3 = newSellPrice_3;
    }

    // อัปเดต Timestamp
    previousTimestamp_3 = data.productPriceDTOs[6].timestamp;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_4 !== newSellPrice_4) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column L)
        if (previousSellPrice_4 !== null) {
            const priceChange = newSellPrice_4 - previousSellPrice_4;
            priceLElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceLElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column J)
        priceJElement.textContent = newSellPrice_4;

        // อัปเดตราคาที่เปลี่ยนแปลง (column H)
        priceKElement.textContent = data.productPriceDTOs[14].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_4 = newSellPrice_4;
    }

    // อัปเดต Timestamp
    previousTimestamp_4 = data.productPriceDTOs[14].timestamp;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_5 !== newSellPrice_5) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column O)
        if (previousSellPrice_5 !== null) {
            const priceChange = newSellPrice_5 - previousSellPrice_5;
            priceOElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceOElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column M)
        priceMElement.textContent = newSellPrice_5;

        // อัปเดตราคาที่เปลี่ยนแปลง (column H)
        priceNElement.textContent = data.productPriceDTOs[7].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_5 = newSellPrice_5;
    }

    // อัปเดต Timestamp
    previousTimestamp_5 = data.productPriceDTOs[7].timestamp;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_6 !== newSellPrice_6) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column R)
        if (previousSellPrice_6 !== null) {
            const priceChange = newSellPrice_6 - previousSellPrice_6;
            priceRElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceRElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column P)
        pricePElement.textContent = newSellPrice_6;

        // อัปเดตราคาที่เปลี่ยนแปลง (column Q)
        priceQElement.textContent = data.productPriceDTOs[6].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_6 = newSellPrice_6;
    }

    // อัปเดต Timestamp
    previousTimestamp_6 = data.productPriceDTOs[6].timestamp;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_7 !== newSellPrice_7) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column U)
        if (previousSellPrice_7 !== null) {
            const priceChange = newSellPrice_7 - previousSellPrice_7;
            priceUElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceUElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column S)
        priceSElement.textContent = newSellPrice_7;

        // อัปเดตราคาที่เปลี่ยนแปลง (column T)
        priceTElement.textContent = data.productPriceDTOs[0].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_7 = newSellPrice_7;
    }

    // อัปเดต Timestamp
    previousTimestamp_7 = data.productPriceDTOs[0].timestamp;

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_8 !== newSellPrice_8) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column X)
        if (previousSellPrice_8 !== null) {
            const priceChange = newSellPrice_8 - previousSellPrice_8;
            priceXElement.textContent = priceChange.toFixed(2); // แสดงเป็นทศนิยม 2 ตำแหน่ง
        } else {
            priceXElement.textContent = '0';
        }

        // อัปเดตราคาก่อนหน้า (column V)
        priceVElement.textContent = newSellPrice_8;

        // อัปเดตราคาที่เปลี่ยนแปลง (column W)
        priceWElement.textContent = data.productPriceDTOs[3].buyPrice;

        // อัปเดตราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_8 = newSellPrice_8;
    }

    // อัปเดต Timestamp
    previousTimestamp_8 = data.productPriceDTOs[3].timestamp;
};

// เมื่อเชื่อมต่อ WebSocket สำเร็จ
socket.onopen = () => {
    console.log('เชื่อมต่อ WebSocket สำเร็จ');
};

// เมื่อการเชื่อมต่อถูกปิด
socket.onclose = () => {
    console.log('การเชื่อมต่อ WebSocket ถูกปิด');
};

// สร้างฟังก์ชันเพื่ออัปเดตเวลาและวันที่
function updateDateTime() {
    const now = new Date();
    
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    
    const formattedDate = now.toLocaleDateString('th-TH', options);
    
    const updateTimeElement = document.getElementById('updateTime');
    updateTimeElement.textContent = `อัพเดต : ${formattedDate.replace(/(\d{4}) (.+)(\d{2}:\d{2})/, ' $1 | เวลา $3')}`;
}

// เรียกใช้งานฟังก์ชันเมื่อหน้าเว็บโหลด
updateDateTime();

// อัปเดตเวลาและวันที่ทุก 1 นาที
setInterval(updateDateTime, 60000); // 1 นาที = 60000 มิลลิวินาที