module.exports.config = {
	name: "تقرير",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DRIDI-RAYEN",
	description: "ابلاغ المطور عند حصول مشاكل📝⛔",
  usePrefix: true,
	commandCategory: "〘 المجموعات 〙",
	usages: "اكتب /تقرير وبعدها رسالتك للمطور",
	cooldowns: 5
},
  
module.exports.handleReply = async function({
	api: e,
	args: n,
	event: a,
	Users: s,
	handleReply: o
}) {
	var i = await s.getNameUser(a.senderID);
	switch (o.type) {
		case "رد":
			var t = global.config.ADMINBOT;
			for (let n of t) e.sendMessage({
				body: "📄بلاغ من عند" + i + ":\n" + a.body,
				mentions: [{
					id: a.senderID,
					tag: i
				}]
			}, n, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				messageID: n.messageID,
				messID: a.messageID,
				author: a.senderID,
				id: a.threadID,
				type: "ابلاغ"
			})));
			break;
		case "ابلاغ":
			e.sendMessage({
				body: `📍📌رسالة من المطور  ${i} إليك:\n--------\n${a.body}\n--------\n»💬قم بالرد على هذه الرسالة ليصل بلاغك الى المطور☑️`,
				mentions: [{
					tag: i,
					id: a.senderID
				}]
			}, o.id, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				author: a.senderID,
				messageID: n.messageID,
				type: "reply"
			})), o.messID)
	}
}, module.exports.run = async function({
	api: e,
	event: n,
	args: a,
	Users: s,
	Threads: o
}) {
	if (!a[0]) return e.sendMessage("❎لم تقم بإدخال محتوى للابلاغ عنه", n.threadID, n.messageID);
	let i = await s.getNameUser(n.senderID);
	var t = n.senderID,
		d = n.threadID;
	let r = (await o.getData(n.threadID)).threadInfo;
	var l = require("moment-timezone").tz("Asia/Manila").format("HH:mm:ss D/MM/YYYY");
	e.sendMessage(`عند: ${l}\nتم ارسال بلاغك الى المطور☑️`, n.threadID, (() => {
		var s = global.config.ADMINBOT;
		for (let o of s) {
			let s = r.threadName;
			e.sendMessage(`👤بلاغ من: ${i}\n👨‍👩‍👧‍👧المجموعة: ${s}\n🔰ايدي المجموعة: ${d}\n🔷ايدي المستخدم: ${t}\n-----------------\n⚠️محتوى البلاغ: ${a.join(" ")}\n-----------------\nالوقت🕙: ${l}`, o, ((e, a) => global.client.handleReply.push({
				name: this.config.name,
				messageID: a.messageID,
				author: n.senderID,
				messID: n.messageID,
				id: d,
				type: "ابلاغ"
			})))
		}
	}))
};