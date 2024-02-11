module.exports.config = {
	name: "ريست",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "DRIDI-RAYEN",
	description: "Restart Bot",
  usePrefix: true,
	commandCategory: "〘 المطور 〙",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`${global.config.BOTNAME} جاري اعادة تشغيل⏳...`, threadID, () => process.exit(1));
}