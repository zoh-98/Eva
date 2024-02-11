module.exports.config = {
	name: "اضف",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DRIDI-RAYEN",
	description: "اضف عضو الى الشات من خلال الرابط او المعرف",
  usePrefix: true,
	commandCategory: "〘 الخدمات 〙",
	usages: "[args]",
	cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const out = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
	var participantIDs = participantIDs.map(e => parseInt(e));
	if (!args[0]) return out("قم يادخال رابط او معرف حساب الشخص المراد اضافته🌝✨.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			var [id, name, fail] = await getUID(args[0], api);
			if (fail == true && id != null) return out(id);
			else if (fail == true && id == null) return out("لم يتم العثور على المستخدم🔍⚠️")
			else {
				await adduser(id, name || "Facebook users");
			}
		} catch (e) {
			return out(`${e.name}: ${e.message}.`);
		}
	}

	async function adduser(id, name) {
		id = parseInt(id);
		if (participantIDs.includes(id)) return out(`${name ? name : "العضو👤"} 🗿بالفعل داخل المجموعة`);
		else {
			var admins = adminIDs.map(e => parseInt(e.id));
			try {
				await api.addUserToGroup(id, threadID);
			}
			catch {
				return out(`لم اتمكن من اضافة😿${name ? name : "المستخدم"} الى المجموعة🗳️.`);
			}
			if (approvalMode === true && !admins.includes(botID)) return out(`تمت اضافة ${name ? name : "العضو"} الى قائمة الانتظار ⏳!`);
			else return out(`تمت☑️ اضافة ${name ? name : "العضو"} الى المجموعة !`)
		}
	}
}