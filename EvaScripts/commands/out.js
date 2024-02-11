module.exports.config = {
    name: "انقلعي",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "DRIDI-RAYEN",
    description: "مالك دخل🐢",
    usePrefix: true,
    commandCategory: "〘 المطور 〙",
    usages: "مالك دخل كمان🐢",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
  }