module.exports.config = {
  name: "تفاعلات",
  commandCategory: "〘 النظام 〙",
  hasPermission: 1,
  credits: "Shady Tarek",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!event.body) {
    return;
  }
  let react = event.body.toLowerCase();

  if (!react) {
    return;
  }

  if (
    react.includes("بوت") ||
    react.includes("ريان") ||
    react.includes("المطور") ||
    react.includes("تونسي")
  ) { 
    api.setMessageReaction("💗", event.messageID, (err) => {}, true);
  } 
  if (
    react.includes("زبي") ||
    react.includes("كسمك") ||
    react.includes("نيك") ||
    react.includes("طيز")
  ) { 
    api.setMessageReaction("😾", event.messageID, (err) => {}, true);
  } 
  
};

module.exports.run = async function ({}) {};