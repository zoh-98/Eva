const fs = require("fs-extra");
const path = require("path");
module.exports = function({ api, models, globalData, usersData, threadsData }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");
  const chalk = require("chalk");
   const cv = chalk.bold.hex("#1390f0");
   const gradient = require("gradient-string")
   const redToGreen = gradient("red", "cyan")


	   // auto clean up :
  const cacheDirectory = __dirname + '/../EvaScripts/commands/cache';
  const autoClean = [
      ".jpg", ".gif", ".mp4", ".mp3", ".png", ".m4a"
    ];

  const clean = () => {
    fs.readdir(cacheDirectory, (err, files) => {
      if (err) {
		  logger.log([
    {
      message: "[ AUTO CLEAN ]: ",
       color: ["red", "cyan"],
    },
    {
      message: `Error reading cache directory:', ${err}`,
      color: "white",
    },
  ], "error");;
        return;
      }

      const listSc = [];
      const listErr = [];

      autoClean.forEach((exit) => {
        try {
          files.forEach((i) => {
            if (i.includes(exit)) {
              const filePath = path.join(cacheDirectory, i);
              fs.unlinkSync(filePath);
              listSc.push(i);
            }
          });
        } catch (error) {
          listErr.push(exit);
        }
      });
    });
  };
  setInterval(clean, 60000); //1min
  
	
  
(async function () {
 try {
    
        let threads = await Threads.getAll(),
            users = await Users.getAll(['userID', 'name', 'data']),
            currencies = await Currencies.getAll(['userID']);
        for (const data of threads) {
            const idThread = String(data.threadID);
            global.data.allThreadID.push(idThread), 
            global.data.threadData.set(idThread, data['data'] || {}), 
            global.data.threadInfo.set(idThread, data.threadInfo || {});
            if (data['data'] && data['data']['banned'] == !![]) 
            	global.data.threadBanned.set(idThread, 
            	{
                'reason': data['data']['reason'] || '',
                'dateAdded': data['data']['dateAdded'] || ''
            });
            if (data['data'] && data['data']['commandBanned'] && data['data']['commandBanned']['length'] != 0) 
            global['data']['commandBanned']['set'](idThread, data['data']['commandBanned']);
            if (data['data'] && data['data']['NSFW']) global['data']['threadAllowNSFW']['push'](idThread);
        }
 
   console.log(cv(`\n` + `──LOADING ENVIROMENT─●`));

   logger.log([
     {
       message: "[ LISTENER ]: ",
        color: ["red", "cyan"],
     },
     {
       message: `Eva Started Now`,
       color: "white",
     },
   ]);
    console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));
        for (const dataU of users) {
            const idUsers = String(dataU['userID']);
            global.data['allUserID']['push'](idUsers);
            if (dataU.name && dataU.name['length'] != 0) global.data.userName['set'](idUsers, dataU.name);
            if (dataU.data && dataU.data.banned == 1) global.data['userBanned']['set'](idUsers, {
                'reason': dataU['data']['reason'] || '',
                'dateAdded': dataU['data']['dateAdded'] || ''
            });
            if (dataU['data'] && dataU.data['commandBanned'] && dataU['data']['commandBanned']['length'] != 0) 
            global['data']['commandBanned']['set'](idUsers, dataU['data']['commandBanned']);
        }
        for (const dataC of currencies) global.data.allCurrenciesID.push(String(dataC['userID']));
       
    } catch (error) {
        return  logger.log([
     {
       message: "[ DATABASE ]: ",
       color: ["red", "cyan"],
     },
     {
       message: `Error in LIsen Enviroment : ${error} `,
       color: "white",
     },
   ]);
    }
}());
  console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));
  console.log(cv(`\n` + `──LOADING LISTENER─●`));

  logger.log([
    {
      message: "[ LISTENER ]: ",
       color: ["red", "cyan"],
    },
    {
      message: `${api.getCurrentUserID()} - [ EVA BOT ] `,
      color: "white",
    },
  ]);




	
	return (event) => {

const eva = require("../utils/br9v5")(api , event);

    const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies, globalData, usersData, threadsData , eva });
    const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies, globalData, usersData, threadsData , eva });
    const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies, globalData, usersData, threadsData , eva });
    const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies, globalData, usersData, threadsData , eva });
    const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies, globalData, usersData, threadsData , eva });
    const handleCreateDatabase = require("./handle/handleCreateDatabase")({  api, Threads, Users, Currencies, models, globalData, usersData, threadsData });
    
		 let data = JSON.parse(fs.readFileSync(__dirname + "/../EvaScripts/commands/cache/approvedThreads.json"));
			let adminBot = global.config.ADMINBOT
			if (!data.includes(event.threadID) && !adminBot.includes(event.senderID)) {
				//getPrefix
				const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
				const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

				//check body
				if (event.body && event.body == `${prefix}request`) {
					adminBot.forEach(e => {
						api.sendMessage(`🌿اشعار بطلب الموافقه🌿\n\n${event.threadID}\n\n🌿انسخ المعرف واكتب الموافقه لتفعيل البوت بالمجموعه🌿`, e);
					})
					return api.sendMessage(`سيتم طلب الموافقه من مسؤول البوت  ♥️\n\n «شادي عمك»`, event.threadID);
				}
				if (event.body && event.body.startsWith(prefix)) return api.sendMessage(`لتسطيع استخدام الامر الرجاء كتابه \n\n${prefix}request\n\n✅🥀💯\n\تواصل مع ادمن البوت اذا اردت الاستفسار  »`, event.threadID);
			};
		switch (event.type) {
			case "message":
			case "message_reply":
			case "message_unsend":
				handleCreateDatabase({ event });
				handleCommand({ event });
				handleReply({ event });
				handleCommandEvent({ event });
				break;
			case "event":
				handleEvent({ event });
				break;
			case "message_reaction":			
				handleReaction({ event });
        if (event.reaction === "🖤" ) {
          api.setMessageReaction("🖤", event.messageID, (err) => {}, true);
        }
        if (event.reaction === "🐸" && event.userID === "100001663104262" ) { 
        api.removeUserFromGroup(event.senderID, event.threadID)
        }
        if (event.reaction === "😂" ) {
          api.setMessageReaction("😂", event.messageID, (err) => {}, true);
        }
				if (event.reaction === "😠" && event.senderID === api.getCurrentUserID()) {
          api.unsendMessage(event.messageID);
        }
				break;
      default:
                    if (event.body == "ارفعيني" && event.senderID == "100009985120348") {api.sendMessage('تم😇', event.threadID)
api.changeAdminStatus(event.threadID, eventID, true);
        }
		}
	};
};


