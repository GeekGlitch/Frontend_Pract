console.log("Date.js file is connected");

let date = new Date();
// To get current date obj
console.log(date);

// date, month, hours, seconds... ETC
date.getHours();
date.getDate();
date.getDay();
date.getFullYear();
date.getSeconds();
date.getMinutes();

// How to add  1 day extra into cuurent datetime
const miiliPerDay = 1000 * 60 * 60 * 24;
const dateOfDayAfterToday = new Date(
  date.setTime(date.getTime() + miiliPerDay)
);
// date
let date1 = new Date();
console.log(date1);
// get day of the week
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = daysOfWeek[date1.getDay()];
console.log("Today is: " + dayName + ".");
// Get today's date and time in milliseconds since January 1, 1970
let now = new Date().getTime();
// Get tomorrow's date and time in milliseconds since January 1, 1970
let nextDay = new Date().getTime() + (miiliPerDay - 500); // 864000
// Calculate difference between two dates
var diffDays = Math.round((nextDay - now) / miiliPerDay);
console.log(`In ${diffDays} days`);
// Get yesterday's date and time in milliseconds since January 1, 1970
let yesterDay = new Date().getTime() - (miiliPerDay - 500); // 86399
// Calculate difference between two dates
var diffYesterday = Math.round((yesterDay - now) / miiliPerDay);
console.log(`${diffYesterday} days ago`);
// Get tomorrow's date and time as a string value
let tomorrowString = new Date(
  new Date().getTime() + miiliPerDay
).toLocaleDateString("en-US");
console.log(tomorrowString);
// Get yesterday's date and time as a string value
let yesterdayString = new Date(
  new Date().getTime() - miiliPerDay
).toLocaleDateString("en-US");
console.log(yesterdayString);
// -----------------------
console.log("Date.js file is connected");

let date2 = new Date();
// To get current date obj
console.log(date);

// date, month, hours, seconds... ETC
date.getHours();
date.getDate();
date.getDay();
date.getFullYear();
date.getSeconds();
date.getMinutes();

// How to add  1 day extra into cuurent datetime
// const miiliPerDay = 1000 * 60 * 60 * 24;
// const dateOfDayAfterToday = new Date(
//   date.setTime(date.getTime() + miiliPerDay)
// );

// Formatted date (date-month-year)
date = new Date();
// "20 Nov 2023"
let day = date.getDay();
let tarik = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// let forMattedDate = `${tarik} ${months[month]} ${year}`;
// forMattedDate;

let formattedday = `${daysOfWeek[date1.getDay()]} ${tarik} ${
  months[month]
} ${year}`;
console.log(formattedday);
