let val;

const today = new Date();
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');


val = today.getMonth();
val =  today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);

console.log(birthday);