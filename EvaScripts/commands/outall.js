module.exports.config = {
  name: "غادري_الكل",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DRIDI-RAYEN",
  description: "يغادر البوت من كل المجموعات",
  commandCategory: "〘 المطور 〙",
  usages: "مالك دخل🐸",
  cooldowns: 5,
  info: [
    {
      key: "Text",
      prompt: "The text you want to send to everyone",
      type: 'Document',
      example: 'Hello Em'
    }
  ]
};

module.exports.run = async ({ api, event, args }) => {
  return api.getThreadList(100, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage('تمت☑️ مغادرة كل المجموعات بنجاح ☺️💗', event.threadID);
  });
}