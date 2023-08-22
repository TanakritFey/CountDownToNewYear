(() => {

const SECOND = 1000;
const MINUTE = SECOND *60;
const HOUR = MINUTE *60;
const DAY = HOUR *24;

// set Id  และ Text 
const setElementInnerText = (id, text) =>{
    const element = document.getElementById(id);
    element.innerText = text;
}

const countDown = () => {
    const now = new Date().getTime();  // now เก็บค่า timestamp ของเวลาปัจจุบันของเราตอนนี้
    const newYear = new Date('December 31, 2023 23:59:59').getTime(); // newYear เก็บค่า timestamp ของเวลา สิ้นปี้ ของปี 2023
    const unixTimeLeft = newYear - now; // นำค่า เวลาปัจจุบัน - เวลาสิ้นปีในปี2023 เป็นค่า timestamp เพื่อคำนวณเวลาเหลือว่าอีกกี่ วัน ชม นาที วินาที จะถึงสิ้นปี 2023
    console.log(unixTimeLeft);
    // คำนวณ จำนวนวัน เหลืออีกกี่วันถึงจะสิ้นปี 2023
    setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
    setElementInnerText('hours', Math.floor(unixTimeLeft% DAY / HOUR));
    setElementInnerText('minutes', Math.floor(unixTimeLeft% HOUR/MINUTE));
    setElementInnerText('seconds', Math.floor(unixTimeLeft% MINUTE/SECOND));
}

const run = () => {
    countDown();
    setInterval(countDown, SECOND)
};

run();
})();
