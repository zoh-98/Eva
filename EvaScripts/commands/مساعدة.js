module.exports.config = {
    name: "مساعدة",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dridi-rayen",
    description: "طريقة استخدام البوت",
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
    var ZiaRein3 = (`𝗘𝗩𝗔 𝗛𝗘𝗟𝗣🌐\nطريقة إستخدام البوت:\n\n『 • 』   اكتب "البادئة" للوصول إلى بادئة البوت \n『 • 』أكتب ( / )لاوامر للوصول الى قائمة الاوامر \n\n  『 • 』شكرا لإستعمالك 𝗘𝗩𝗔 𝗕𝗢𝗧 \n
    𝐜𝐫𝐞𝐝𝐢𝐭𝐬:𝐦𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐫𝐚𝐲𝐞𝐧 𝐝𝐫𝐢𝐝𝐢\n \n𝐨𝐰𝐧𝐞𝐫 𝐚𝐜𝐜:\nhttps://www.facebook.com/profile.php?id=100006241065684`);
   var ZiaRein = [
"https://i.imgur.com/OM2L7ea.gif",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
