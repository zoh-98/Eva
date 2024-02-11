const gradient = require("gradient-string");
const co1 = gradient("#12a626", "#0eed19", "#27f231"); // hacker
const co2 = gradient("#0a658a", "#0a7f8a", "#0db5aa"); // ghost
const co3 = gradient("blue", "purple", "yellow", "#81ff6e"); // flower
const co4 = gradient("#fcff4d", "#4de1ff"); // summer
const co5 = gradient("#00a9c7", "#853858"); // teen
const co6 = gradient("orange", "#ffff00", "#ffe600"); // sunlight
const co7 = gradient("#d94fff", "purple"); // retro
const co8 = gradient("#243aff", "#4687f0", "#5800d4"); // blue
const co9 = gradient("#fc2803", "#fc6f03", "#fcba03"); // fiery
const co10 = gradient("red", "orange"); // red
const co11 = gradient("#0030ff", "#4e6cf2"); // aqua
const co12 = gradient("purple", "pink"); // pink 1
const co13 = gradient("#d94fff", "purple"); // pink 2
const co14 = gradient("#bf3939", "#fa0404", "#bf3939"); // red
const co15 = gradient("#252525", "#252525"); // gris
const co16 = gradient("#FFCD00", "#FFAA00");
const co17 = gradient("red", "cyan");

function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  var dateTime =
    year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
  return dateTime;
}
module.exports.logger = {
  hacker: (type, msg) =>
    console.log(`${co17.multiline(`[${type}]`)} ${msg}`),
  error: (type, msg) =>
    console.log(`${co14.multiline(`[${type}]`)} ${msg}`),
  fcaError: (msg) =>
    console.log(
      "\n" + `${co14(`[FCA]`)} ${msg}` + "\n"
    ),
  fcaWarn: (msg) => {
    console.log(`${co15(`[${getDateTime()}]`)} ${co16(`[FCA]`)} ${msg}`);
  }
};
