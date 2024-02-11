module.exports.config = {
  name: "uid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DRIDI-RAYEN",
  description: "قم على الآيدي الخاص بك",
  commandCategory: "〘 الخدمات 〙",
  usePrefix:false,
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  if (Object.keys(event.mentions) == 0) return api.sendMessage(`〘━━━━━━❪❂❫━━━━━〙\n\n〘𝐵𝑌 𝐷𝑅𝐼𝐷𝐼 𝑅𝐴𝑌𝐸𝑁〙\n❉آيدي المستخدم❉🖋\n${event.senderID}\n\n❉رابط الفيسبوك❉🖋\nwww.facebook.com/${event.senderID} \n\n❉رابط الدردشة❉🖋\nm.me/${event.senderID}\n\n〘━━━━━━❪❂❫━━━━━〙`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
                                                                                                                                          }