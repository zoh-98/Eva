 module.exports.config = {
  name: "المطور",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DRIDI-RAYEN",
  description: "معلومات عن مطور البوت.",
  commandCategory: "〘 المجموعات 〙",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/0eAtz82.gif"
  ];
  var callback = () => api.sendMessage({body:`〘━━━━━━❪المطور❫━━━━━〙\n⦿¦✗¦←الاسم: 𝒎𝒐𝒉𝒂𝒎𝒎𝒂𝒅 𝒓𝒂𝒚𝒆𝒏 𝒅𝒓𝒊𝒅𝒊\n⦿¦✗¦←العمر : 17YO\n⦿¦✗¦←البلد: تونس 🇹🇳\n⦿¦✗¦←حساب الانستا: https://instagram.com/_v_tn?igshid=YWYwM2I1ZDdmOQ==\n⦿¦✗¦←حساب الفيس: https://www.facebook.com/profile.php?id=100006241065684\n〘━━━━━━❪𝔼𝕧𝕒 𝔹𝕠𝕥❫━━━━〙\n`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };