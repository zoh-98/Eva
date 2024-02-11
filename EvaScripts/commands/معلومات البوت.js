module.exports.config = {
    name: "معلومات_البوت",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dridi-rayen",
    description: "معلومات البوت",
    commandCategory: "〘 المجموعات 〙",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`    『𝐄𝐕𝐀-𝐀𝐈-𝐈𝐍𝐅𝐎』
    
⦿←~【البوت】~→⦿

⦿¦✗¦← الـإسـم:【𝙴𝚅𝙰-𝙰𝙸】
⦿¦✗¦← الـنوع:【𝙼𝙸𝚁𝙰𝙸】
⦿¦✗¦← الـنشاط:【24/7☑️】
⦿¦✗¦←الـبـادئـة:【/】
⦿¦✗¦←أكتب(ي) "/الاوامر" للوصول الى الاوامر

⦿←~【المطور】~→⦿
- فيسبوك: Facebook.com/100006241065684
-أنستا:Instagram.com/m.rayen.d00 `);
   var ZiaRein = [
"https://i.imgur.com/voH9gsY.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
