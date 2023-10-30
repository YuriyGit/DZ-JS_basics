const positionLat = 10;
const positionLong = 20;
const addressLat = 30;
const addressLong = 40;

console.log(Math.round(Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2)))
