module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermission: 0,
  credits: "DRIDI-RAYEN",
  description: "هاذا ليس امر فقط تجاهلوه",
  commandCategory: "〘 النظام 〙",
  usages: "[بوت]",
  cooldowns: 5,
  usePrefix: false
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  var { threadID, messageID } = event;

  

  const stickers = [
      "1423060718590978",
      "7032766843508951",
      "749434063847827",
      "2098383580533435",
      "3008741299257782",
      "357993953645848",
      "333128836219631",
    ];

    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];


if (event.body.indexOf("ايفا") == 0)
{
Api.sendMessage("شبدك يا عمي", event.threadID, event.messageID)

  var rand = tl[Math.floor(Math.random() * tl.length)];
  let yan = event.body ? event.body.toLowerCase() : '';

  if (yan.indexOf("بوت") === 0) {
    api.setMessageReaction("💃", event.messageID, (err) => {}, true);
    api.sendTypingIndicator(event.threadID, true);

    let userH = event.senderID;
    const userInfo = global.data.userName.get(userH) || await Users.getUserInfo(userH);
    if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: "@" + userInfo + ", " + rand, 
      mentions: [{
        tag: "@" + userInfo,
        id: userH
      }]
    };

    setTimeout(function() {
      return api.sendMessage(msg, threadID, messageID);
    }, 2000);
  }

  if (
    yan.includes("ههههه") ||
    yan.includes("بوت") ||
    yan.includes("غاضب") ||
    yan.includes("ريان") ||
    yan.includes("كلب") ||
    yan.includes("قطة") ||
    yan.includes("غباء") ||
    yan.includes("😄") ||
    yan.includes("🤣") ||
    yan.includes("😆") ||
    yan.includes("😄") ||
    yan.includes("😅") ||
    yan.includes("xd")
  ) {
    return api.setMessageReaction("😆", event.messageID, (err) => {}, true);
  } 

  if (
    yan.includes("لا أعرف") ||
    yan.includes("حزين") ||
    yan.includes("مكتئب") ||
    yan.includes("مدرسة") ||
    yan.includes("العودة") ||
    yan.includes("أشتاق") ||
    yan.includes("وداعا")
  ) {
    return api.setMessageReaction("🥲", event.messageID, (err) => {}, true);
  }
};

module.exports.run = async function ({ api, event, __GLOBAL }) {};
