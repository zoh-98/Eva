const fs = require("fs");

module.exports.config = {
	name: "البادئة",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DRIDI-RAYEN", 
	description: "الوصول الى بادئة البوت",
    usePrefix: true,
	commandCategory: "〘 بدون بادئة 〙",
	usages: "اكتب فقط البادئة",
    cooldowns: 1,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("البادئة")==0 || (event.body.indexOf("البادئة")==0 || (event.body.indexOf("بادئة")==0 || (event.body.indexOf("بادئة")==0)))) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Manila").format("HH:mm:ss || D/MM/YYYY");
		var msg = {
				body: `أُلَبّأُدِئةَ أُلَخِأُصًةَ بّيْ هي:» ${global.config.PREFIX} «\nأكتب الاوامر للوصول الى القائمة الخاص بالاوامر☑️✨ \n
    𝐦𝐚𝐝𝐞 𝐛𝐲:𝐦𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐫𝐚𝐲𝐞𝐧 𝐝𝐫𝐢𝐝𝐢`
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }