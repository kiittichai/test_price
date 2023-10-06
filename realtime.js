document.addEventListener('DOMContentLoaded', () => {
    // ดึงค่าราคาล่าสุดจาก Session Storage
   //////////////////////////////////////////////////////////////////////////////////////////////////
    const previousSellPrice = parseFloat(sessionStorage.getItem('previousSellPrice')) || null;
    const previousBuyPrice = parseFloat(sessionStorage.getItem('previousBuyPrice')) || null;
    const previousPriceChange = parseFloat(sessionStorage.getItem('previousPriceChange')) || 0;
    
    // แสดงราคาล่าสุดบนหน้าเว็บ
    if (previousSellPrice !== null && previousBuyPrice !== null) {
        priceAElement.textContent = previousSellPrice;
        priceBElement.textContent = previousBuyPrice;
        priceCElement.textContent = previousPriceChange.toFixed(2);
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////

    const previousSellPrice_2 = parseFloat(sessionStorage.getItem('previousSellPrice_2')) || null;
    const previousBuyPrice_2 = parseFloat(sessionStorage.getItem('previousBuyPrice_2')) || null;
    const previousPriceChange_2 = parseFloat(sessionStorage.getItem('previousPriceChange_2')) || 0;
    
    // แสดงราคาล่าสุดบนหน้าเว็บ
    if (previousSellPrice_2 !== null && previousBuyPrice_2 !== null) {
        priceDElement.textContent = previousSellPrice_2;
        priceEElement.textContent = previousBuyPrice_2;
        priceFElement.textContent = previousPriceChange_2.toFixed(2);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////

    const previousSellPrice_3 = parseFloat(sessionStorage.getItem('previousSellPrice_3')) || null;
    const previousBuyPrice_3 = parseFloat(sessionStorage.getItem('previousBuyPrice_3')) || null;
    const previousPriceChange_3 = parseFloat(sessionStorage.getItem('previousPriceChange_3')) || 0;
    
    // แสดงราคาล่าสุดบนหน้าเว็บ
    if (previousSellPrice_3 !== null && previousBuyPrice_3 !== null) {
        priceGElement.textContent = previousSellPrice_3;
        priceHElement.textContent = previousBuyPrice_3;
        priceIElement.textContent = previousPriceChange_3.toFixed(2);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////

    const previousSellPrice_4 = parseFloat(sessionStorage.getItem('previousSellPrice_4')) || null;
    const previousBuyPrice_4 = parseFloat(sessionStorage.getItem('previousBuyPrice_4')) || null;
    const previousPriceChange_4 = parseFloat(sessionStorage.getItem('previousPriceChange_4')) || 0;
    
    // แสดงราคาล่าสุดบนหน้าเว็บ
    if (previousSellPrice_4 !== null && previousBuyPrice_4 !== null) {
        priceJElement.textContent = previousSellPrice_4;
        priceKElement.textContent = previousBuyPrice_4;
        priceLElement.textContent = previousPriceChange_4.toFixed(2);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////

    const previousSellPrice_5 = parseFloat(sessionStorage.getItem('previousSellPrice_5')) || null;
    const previousBuyPrice_5 = parseFloat(sessionStorage.getItem('previousBuyPrice_5')) || null;
    const previousPriceChange_5 = parseFloat(sessionStorage.getItem('previousPriceChange_5')) || 0;
    
    // แสดงราคาล่าสุดบนหน้าเว็บ
    if (previousSellPrice_5 !== null && previousBuyPrice_5 !== null) {
        priceMElement.textContent = previousSellPrice_5;
        priceNElement.textContent = previousBuyPrice_5;
        priceOElement.textContent = previousPriceChange_5.toFixed(2);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    const previousSellPrice_6 = parseFloat(sessionStorage.getItem('previousSellPrice_6')) || null;
    const previousBuyPrice_6 = parseFloat(sessionStorage.getItem('previousBuyPrice_6')) || null;
    const previousPriceChange_6 = parseFloat(sessionStorage.getItem('previousPriceChange_6')) || 0;
    
    // แสดงราคาล่าสุดบนหน้าเว็บ
    if (previousSellPrice_6 !== null && previousBuyPrice_6 !== null) {
        pricePElement.textContent = previousSellPrice_6;
        priceQElement.textContent = previousBuyPrice_6;
        priceRElement.textContent = previousPriceChange_6.toFixed(2);
    }

     //////////////////////////////////////////////////////////////////////////////////////////////
     const previousSellPrice_7 = parseFloat(sessionStorage.getItem('previousSellPrice_7')) || null;
     const previousBuyPrice_7 = parseFloat(sessionStorage.getItem('previousBuyPrice_7')) || null;
     const previousPriceChange_7 = parseFloat(sessionStorage.getItem('previousPriceChange_7')) || 0;
     
     // แสดงราคาล่าสุดบนหน้าเว็บ
     if (previousSellPrice_7 !== null && previousBuyPrice_7 !== null) {
         priceSElement.textContent = previousSellPrice_7;
         priceTElement.textContent = previousBuyPrice_7;
         priceUElement.textContent = previousPriceChange_7.toFixed(2);
     }
     //////////////////////////////////////////////////////////////////////////////////////////////
     const previousSellPrice_8= parseFloat(sessionStorage.getItem('previousSellPrice_8')) || null;
     const previousBuyPrice_8 = parseFloat(sessionStorage.getItem('previousBuyPrice_8')) || null;
     const previousPriceChange_8 = parseFloat(sessionStorage.getItem('previousPriceChange_8')) || 0;
     
     // แสดงราคาล่าสุดบนหน้าเว็บ
     if (previousSellPrice_8 !== null && previousBuyPrice_8 !== null) {
         priceVElement.textContent = previousSellPrice_8;
         priceWElement.textContent = previousBuyPrice_8;
         priceXElement.textContent = previousPriceChange_8.toFixed(2);
     }
});

const socket = new WebSocket('wss://www.sctgold.com/primepush/productPrice/100/ONLINE/A');

// หา elements ของราคา
//////////////////////////////////////////////////////////////////////////////////////////////////
const priceAElement = document.getElementById('priceA');
const priceBElement = document.getElementById('priceB');
const priceCElement = document.getElementById('priceC');
//////////////////////////////////////////////////////////////////////////////////////////////////
const priceDElement = document.getElementById('priceD');
const priceEElement = document.getElementById('priceE');
const priceFElement = document.getElementById('priceF');
//////////////////////////////////////////////////////////////////////////////////////////////////

const priceGElement = document.getElementById('priceG');
const priceHElement = document.getElementById('priceH');
const priceIElement = document.getElementById('priceI');
//////////////////////////////////////////////////////////////////////////////////////////////////

const priceJElement = document.getElementById('priceJ');
const priceKElement = document.getElementById('priceK');
const priceLElement = document.getElementById('priceL');

//////////////////////////////////////////////////////////////////////////////////////////////////

const priceMElement = document.getElementById('priceM');
const priceNElement = document.getElementById('priceN');
const priceOElement = document.getElementById('priceO');
//////////////////////////////////////////////////////////////////////////////////////////////////

const pricePElement = document.getElementById('priceP');
const priceQElement = document.getElementById('priceQ');
const priceRElement = document.getElementById('priceR');
//////////////////////////////////////////////////////////////////////////////////////////////////

const priceSElement = document.getElementById('priceS');
const priceTElement = document.getElementById('priceT');
const priceUElement = document.getElementById('priceU');
//////////////////////////////////////////////////////////////////////////////////////////////////

const priceVElement = document.getElementById('priceV');
const priceWElement = document.getElementById('priceW');
const priceXElement = document.getElementById('priceX');
//////////////////////////////////////////////////////////////////////////////////////////////////
// สร้างตัวแปรเพื่อเก็บราคาก่อนหน้าและ Timestamp
let previousSellPrice = parseFloat(sessionStorage.getItem('previousSellPrice')) || null;
let previousPriceChange = parseFloat(sessionStorage.getItem('previousPriceChange')) || 0;

////////////////////////////////////////////////////////////////////////////////////////////////////
let previousSellPrice_2 = parseFloat(sessionStorage.getItem('previousSellPrice_2')) || null;
let previousPriceChange_2 = parseFloat(sessionStorage.getItem('previousPriceChange_2')) || 0;
////////////////////////////////////////////////////////////////////////////////////////////////////

let previousSellPrice_3 = parseFloat(sessionStorage.getItem('previousSellPrice_3')) || null;
let previousPriceChange_3 = parseFloat(sessionStorage.getItem('previousPriceChange_3')) || 0;
////////////////////////////////////////////////////////////////////////////////////////////////////

let previousSellPrice_4 = parseFloat(sessionStorage.getItem('previousSellPrice_4')) || null;
let previousPriceChange_4 = parseFloat(sessionStorage.getItem('previousPriceChange_4')) || 0;

////////////////////////////////////////////////////////////////////////////////////////////////////

let previousSellPrice_5 = parseFloat(sessionStorage.getItem('previousSellPrice_5')) || null;
let previousPriceChange_5 = parseFloat(sessionStorage.getItem('previousPriceChange_5')) || 0;
////////////////////////////////////////////////////////////////////////////////////////////////////

let previousSellPrice_6 = parseFloat(sessionStorage.getItem('previousSellPrice_6')) || null;
let previousPriceChange_6 = parseFloat(sessionStorage.getItem('previousPriceChange_6')) || 0;
////////////////////////////////////////////////////////////////////////////////////////////////////

let previousSellPrice_7 = parseFloat(sessionStorage.getItem('previousSellPrice_7')) || null;
let previousPriceChange_7 = parseFloat(sessionStorage.getItem('previousPriceChange_7')) || 0;

////////////////////////////////////////////////////////////////////////////////////////////////////

let previousSellPrice_8= parseFloat(sessionStorage.getItem('previousSellPrice_8')) || null;
let previousPriceChange_8 = parseFloat(sessionStorage.getItem('previousPriceChange_8')) || 0;
////////////////////////////////////////////////////////////////////////////////////////////////////

// เมื่อมีข้อมูลถึง
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    ////////////////////////////////////////////////////////////
    const newSellPrice = data.productPriceDTOs[2].sellPrice;
    const newSellPrice_2 = data.productPriceDTOs[5].sellPrice;
    const newSellPrice_3 = data.productPriceDTOs[6].sellPrice;
    const newSellPrice_4 = data.productPriceDTOs[14].sellPrice;
    const newSellPrice_5 = data.productPriceDTOs[7].sellPrice;
    const newSellPrice_6 = data.productPriceDTOs[6].sellPrice;
    const newSellPrice_7 = data.productPriceDTOs[0].sellPrice;
    const newSellPrice_8 = data.productPriceDTOs[3].sellPrice;
    ////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////
    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice !== newSellPrice) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column C)
        if (previousSellPrice !== null) {
            const priceChange = newSellPrice - previousSellPrice;
            priceCElement.textContent = (priceChange + previousPriceChange).toFixed(2);
            previousPriceChange += priceChange;
        } else {
            priceCElement.textContent = previousPriceChange.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column A)
        priceAElement.textContent = newSellPrice;

        // อัปเดตราคาที่เปลี่ยนแปลง (column B)
        priceBElement.textContent = data.productPriceDTOs[2].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice', newSellPrice);
        sessionStorage.setItem('previousBuyPrice', data.productPriceDTOs[2].buyPrice);
        sessionStorage.setItem('previousPriceChange', previousPriceChange);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice = newSellPrice;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[2].timestamp;
    ////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////
    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_2 !== newSellPrice_2) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column F)
        if (previousSellPrice_2 !== null) {
            const priceChange_2 = newSellPrice_2 - previousSellPrice_2;
            priceFElement.textContent = (priceChange_2 + previousPriceChange_2).toFixed(2);
            previousPriceChange_2 += priceChange_2;
        } else {
            priceFElement.textContent = previousPriceChange_2.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column D)
        priceDElement.textContent = newSellPrice_2;

        // อัปเดตราคาที่เปลี่ยนแปลง (column E)
        priceEElement.textContent = data.productPriceDTOs[5].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice_2', newSellPrice_2);
        sessionStorage.setItem('previousBuyPrice_2', data.productPriceDTOs[5].buyPrice);
        sessionStorage.setItem('previousPriceChange_2', previousPriceChange_2);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_2 = newSellPrice_2;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[5].timestamp;
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////
    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า เอาตรงนี้
    if (previousSellPrice_3 !== newSellPrice_3) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column I)
        if (previousSellPrice_3 !== null) {
            const priceChange_3 = newSellPrice_3 - previousSellPrice_3;
            priceIElement.textContent = (priceChange_3 + previousPriceChange_3).toFixed(2);
            previousPriceChange_3 += priceChange_3;
        } else {
            priceIElement.textContent = previousPriceChange_3.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column G)
        priceGElement.textContent = newSellPrice_3;

        // อัปเดตราคาที่เปลี่ยนแปลง (column H)
        priceHElement.textContent = data.productPriceDTOs[6].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice_3', newSellPrice_3);
        sessionStorage.setItem('previousBuyPrice_3', data.productPriceDTOs[6].buyPrice);
        sessionStorage.setItem('previousPriceChange_3', previousPriceChange_3);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_3 = newSellPrice_3;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[6].timestamp;
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_4 !== newSellPrice_4) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column L)
        if (previousSellPrice_4 !== null) {
            const priceChange_4 = newSellPrice_4 - previousSellPrice_4;
            priceLElement.textContent = (priceChange_4 + previousPriceChange_4).toFixed(2);
            previousPriceChange_4 += priceChange_4;
        } else {
            priceLElement.textContent = previousPriceChange_4.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column J)
        priceJElement.textContent = newSellPrice_4;

        // อัปเดตราคาที่เปลี่ยนแปลง (column K)
        priceKElement.textContent = data.productPriceDTOs[14].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice_4', newSellPrice_4);
        sessionStorage.setItem('previousBuyPrice_4', data.productPriceDTOs[14].buyPrice);
        sessionStorage.setItem('previousPriceChange_4', previousPriceChange_4);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_4 = newSellPrice_4;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[14].timestamp;

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_5 !== newSellPrice_5) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column O)
        if (previousSellPrice_5 !== null) {
            const priceChange_5 = newSellPrice_5 - previousSellPrice_5;
            priceOElement.textContent = (priceChange_5 + previousPriceChange_5).toFixed(2);
            previousPriceChange_5 += priceChange_5;
        } else {
            priceOElement.textContent = previousPriceChange_5.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column M)
        priceMElement.textContent = newSellPrice_5;

        // อัปเดตราคาที่เปลี่ยนแปลง (column N)
        priceNElement.textContent = data.productPriceDTOs[7].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice_5', newSellPrice_5);
        sessionStorage.setItem('previousBuyPrice_5', data.productPriceDTOs[7].buyPrice);
        sessionStorage.setItem('previousPriceChange_5', previousPriceChange_5);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_5 = newSellPrice_5;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[7].timestamp;
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_6 !== newSellPrice_6) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column R)
        if (previousSellPrice_6 !== null) {
            const priceChange_6 = newSellPrice_6 - previousSellPrice_6;
            priceRElement.textContent = (priceChange_6 + previousPriceChange_6).toFixed(2);
            previousPriceChange_6 += priceChange_6;
        } else {
            priceRElement.textContent = previousPriceChange_6.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column P)
        pricePElement.textContent = newSellPrice_6;

        // อัปเดตราคาที่เปลี่ยนแปลง (column Q)
        priceQElement.textContent = data.productPriceDTOs[6].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice_6', newSellPrice_6);
        sessionStorage.setItem('previousBuyPrice_6', data.productPriceDTOs[6].buyPrice);
        sessionStorage.setItem('previousPriceChange_6', previousPriceChange_6);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_6 = newSellPrice_6;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[6].timestamp;
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_7 !== newSellPrice_7) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column U)
        if (previousSellPrice_7 !== null) {
            const priceChange_7 = newSellPrice_7 - previousSellPrice_7;
            priceUElement.textContent = (priceChange_7 + previousPriceChange_7).toFixed(2);
            previousPriceChange_7 += priceChange_7;
        } else {
            priceRElement.textContent = previousPriceChange_7.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column S)
        priceSElement.textContent = newSellPrice_7;

        // อัปเดตราคาที่เปลี่ยนแปลง (column T)
        priceTElement.textContent = data.productPriceDTOs[0].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice_7', newSellPrice_7);
        sessionStorage.setItem('previousBuyPrice_7', data.productPriceDTOs[0].buyPrice);
        sessionStorage.setItem('previousPriceChange_7', previousPriceChange_7);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_7 = newSellPrice_7;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[0].timestamp;
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // ตรวจสอบว่าราคาใหม่ไม่เท่ากับค่าราคาก่อนหน้า
    if (previousSellPrice_8 !== newSellPrice_8) {
        // คำนวณและอัปเดตราคาที่เปลี่ยนแปลง (column X)
        if (previousSellPrice_8 !== null) {
            const priceChange_8 = newSellPrice_8 - previousSellPrice_8;
            priceXElement.textContent = (priceChange_8 + previousPriceChange_8).toFixed(2);
            previousPriceChange_8 += priceChange_8;
        } else {
            priceXElement.textContent = previousPriceChange_8.toFixed(2);
        }

        // อัปเดตราคาก่อนหน้า (column V)
        priceVElement.textContent = newSellPrice_8;

        // อัปเดตราคาที่เปลี่ยนแปลง (column W)
        priceWElement.textContent = data.productPriceDTOs[3].buyPrice;

        // บันทึกราคาใหม่ใน Session Storage เพื่อใช้ในการรีเฟรชหน้า
        sessionStorage.setItem('previousSellPrice_8', newSellPrice_8);
        sessionStorage.setItem('previousBuyPrice_8', data.productPriceDTOs[3].buyPrice);
        sessionStorage.setItem('previousPriceChange_8', previousPriceChange_8);

        // อัปเดตค่าราคาก่อนหน้าเป็นค่าปัจจุบัน
        previousSellPrice_8 = newSellPrice_8;
    }

    // อัปเดต Timestamp
    previousTimestamp = data.productPriceDTOs[3].timestamp;
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

// ในส่วนของโค้ดที่ใช้ในการเริ่มหน้าเว็บ (เช่นในฟังก์ชัน onload หรือ DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    // ดึงค่าราคาล่าสุดจาก Session Storage
    const previousSellPrice = parseFloat(sessionStorage.getItem('previousSellPrice')) || null;
    
    // แสดงราคาล่าสุดบนหน้าเว็บ
    if (previousSellPrice !== null) {
        priceAElement.textContent = previousSellPrice;
        priceCElement.textContent = parseFloat(sessionStorage.getItem('previousPriceChange')).toFixed(2);
    }
});
