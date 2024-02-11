const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "تخيلي",
  version: "2.7",
  hasPermssion: 0,
  credits: "hzay",
  description: "تخيل ماتريد مع ايفا",
  commandCategory: "〘 الخدمات 〙",
  usages: "اكتب تخيل وبعدها محتوى الرسمة",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("تخيل") === 0 || event.body.indexOf("تخيلي") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  const prompt = args.join(" ");  

  api.setMessageReaction("⚙️", event.messageID, (err) => {}, true);

  if (!prompt) {
    api.sendMessage("📝 ︙قم بإدخال محتوى الرسمة رجاءا..", event.threadID);
    return;
  }

  api.sendMessage("🕟︙جاري تجهيز تخيلك", event.threadID);

  try {
    const response = await axios.get('https://code-merge-api-hazeyy01.replit.app/kandinsky/api', {
      params: {
        prompt: prompt,  
      },
    });

    console.log('🤖:', response.data);

    if (response.data.output) {
      const imageData = response.data.output;

      if (imageData && Array.isArray(imageData)) {
        const item = imageData[0];
        const image = await axios.get(item, { responseType: "arraybuffer" });
        const path = __dirname + "/cache/" + Math.floor(Math.random() * 999999) + ".jpg";

        const promptMessage = `🤖︙𝐸𝑉𝐴 𝐴𝑅𝑇\n\n📝︙البرومبت: '${prompt}'\n\n 🎨︙رسمتك:`;

        fs.writeFileSync(path, image.data);

        api.sendMessage({ body: promptMessage, attachment: fs.createReadStream(path) }, event.threadID, () => {
          fs.unlinkSync(path);
        });
      }
    } else {
      api.sendMessage('🚫︙حدث خطأ', event.threadID);
    }
  } catch (error) {
    console.error('🚫︙حدث خطأ', error);
    api.sendMessage('🚫︙حدث خطأ', event.threadID);
  }
};

module.exports.run = async function({ api, event }) {};