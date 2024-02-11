module.exports.config = {
    name: "قوانين",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DRIDI-",
    description: "important notes",
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
    var ZiaRein3 = (`𝗕𝗢𝗧 𝗥𝗨𝗟𝗘𝗦\nمن فضلك قم بقراءة قوانين البوت📜\n\n『 • 』  يمنع تغيير كنية للبوت❎\n『 • 』يمنع إحداث السبام بالبوت❎\n\n يمنع إستعمال اوامر البحث والرسم في اشياء +18❎\n𝐁𝐘-𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐑𝐀𝐘𝐄𝐍 𝐃𝐑𝐈𝐃𝐈\n \n𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿\nhttps://www.facebook.com/profile.php?id=100006241065684`);
   var ZiaRein = [
"https://i.imgur.com/huumLca.jpg",
"https://i.imgur.com/EcryTGh.jpg",
"https://i.imgur.com/tu12HrQ.jpg",
"https://i.imgur.com/Vx25FHG.jpg",
"https://i.imgur.com/NcbC8Pn.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
