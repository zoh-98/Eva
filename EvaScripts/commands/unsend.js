module.exports.config = {
	name: "حذف",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DRIDI-RAYEN",
	description: "حذف رسائل البوت",
    usePrefix: true,
	commandCategory: "〘 المجموعات 〙",
	usages: "رد على رسالة البوت اكتب حذف",
	cooldowns: 0
};

module.exports.run = function({ api, event, getText }) {
	if (!event.messageReply) {
		return api.sendMessage(getText("رد على رسالة ايفا كي يتم حذفها🙃👍"), event.threadID, event.messageID);
	}

	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	
	return api.unsendMessage(event.messageReply.messageID);
}

module.exports.languages = {
	"ar": {
		"returnCant": "Can't remove other people's messages.",
		"missingReply": "You can't unsend a message out of nowhere. Please reply to a message first."
	}
}
