const axios = require("axios");
const commandName = "ايفا";
const xv = `
Ai character info :

you're Eva, you're an ai assistant, you're the best and the best, use emojies in u're answers, you're creator is "Mohammad rayen dridi" don't say that if no one ask, you speak just arabic`;
module.exports = {
    config: {
        name: commandName,
        version: "1.0",
        author: "Gry KJ",
        cooldowns: 5,
        hasPermission: 0,
        description: "AI",
        prefix: true,
        commandCategory: "العاب",
    },
    run: async function ({ event, api, args }) {
        const prompt = args.join(" ");
        if (!prompt) {
            const stickers = [
                "1423060718590978",
                "7032766843508951",
                "749434063847827",
                "2098383580533435",
                "3008741299257782",
                "357993953645848",
                "333128836219631",
            ];

            const random = Math.floor(Math.random() * stickers.length);
            const randomSticker = stickers[random];
            return api.sendMessage(
                { sticker: randomSticker },
                event.threadID,
                (err, info) => {
                    global.client.handleReply.push({
                        name: commandName,
                        author: event.senderID,
                        messageID: info.messageID,
                        type: "gptHerBaby",
                    });
                },
                event.messageID
            );
        } else {
            const userAnswer = prompt;
            const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(
                userAnswer
            )}\n\n${xv}&model=v3`;
            const res = await axios.get(url2);
            const message = res.data.reply;
            return api.sendMessage(message, event.threadID, event.messageID);
        }
    },
    handleReply: async function ({ api, event, handleReply }) {
        const { messageID, type } = handleReply;
        const userAnswer = event.body.trim().toLowerCase();
        const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(
            userAnswer
        )}\n\n${xv}&model=v3`;
        const res = await axios.get(url2);
        const message = res.data.reply;
        return api.sendMessage(
            message,
            event.threadID,
            (error, info) => {
                global.client.handleReply.push({
                    name: commandName,
                    author: event.senderID,
                    messageID: info.messageID,
                });
            },
            event.messageID
        );
    },
};
