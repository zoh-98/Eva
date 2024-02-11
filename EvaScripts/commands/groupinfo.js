const fs = require("fs");
const request = require("request");
module.exports.config = {
  name: "مجموعتي",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "DRIDI-RAYEN",
  description: "معلومات المجموعه",
  commandCategory: "〘 الخدمات 〙", 
  usages: " اكتب فقط /مجموعتي", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
  let threadInfo = await api.getThreadInfo(event.threadID);
  var memLength = threadInfo.participantIDs.length;
  let threadMem = threadInfo.participantIDs.length;
  var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
  var nam = gendernam.length;
    var nu = gendernu.length;
  let qtv = threadInfo.adminIDs.length;
  let sl = threadInfo.messageCount;
  let u = threadInfo.nicknames;
  let icon = threadInfo.emoji;
  let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
  let sex = threadInfo.approvalMode;
      var pd = sex == false ? 'غير مفعله' : sex == true ? 'مفعله' : 'Kh';
      var callback = () =>
        api.sendMessage(
          {
            body: `⭐️اسم المجموعة: ${threadName} .\n👨‍💻 ايدي الكروب: ${id} .\n- طلبات الانضمام : ${pd} .\n- الايموجي: ${icon} .\n👇🏻 المعلومات:\n- يوجد ${threadMem} عضو .\n- عدد الذكور : ${nam} \n-عدد الاناث : ${nu} .\n- عدد الادمنية ${qtv} .\n🕵️‍♀️- العدد الإجمالي للرسائل: ${sl} .`,
            attachment: fs.createReadStream(__dirname + '/cache/1.png')
          },
          event.threadID,
          () => fs.unlinkSync(__dirname + '/cache/1.png'),
          event.messageID
        );
      return request(encodeURI(`${threadInfo.imageSrc}`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
      }