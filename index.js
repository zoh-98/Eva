const chalk = require('chalk');
const { readdirSync, readFileSync, writeFileSync } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("./includes/Login");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;
console.log(chalk.bold.hex("#1390f0")(`──LOADING SETTINGS─●`));
const cv = chalk.bold.hex("#1390f0");
logger.log([
  {
    message: "[ SETTINGS ]: ",
    color: ["red", "cyan"],
  },
  {
    message: `Eva Is Ready`,
    color: "white",
  },
]);

logger.log([
  {
    message: "[ SETTINGS ]: ",
    color: ["red", "cyan"],
  },
  {
    message: `This Bot Is By Rayen`,
    color: "white",
  },
]);

global.client = new Object({
  commands: new Map(),
  events: new Map(),
  cooldowns: new Map(),
  eventRegistered: new Array(),
  handleSchedule: new Array(),
  handleReaction: new Array(),
  handleReply: new Array(),
  mainPath: process.cwd(),
  configPath: new String()
});
global.YukiBot = {};
global.YukiBot.logger = logger;
global.data = new Object({
  threadInfo: new Map(),
  threadData: new Map(),
  userName: new Map(),
  userBanned: new Map(),
  threadBanned: new Map(),
  commandBanned: new Map(),
  threadAllowNSFW: new Array(),
  allUserID: new Array(),
  allCurrenciesID: new Array(),
  allThreadID: new Array()
});

global.utils = require("./utils");
global.utils.createQueue = function createQueue(callback) {
	const queue = [];
	const queueObj = {
		push: function (task) {
			queue.push(task);
			if (queue.length == 1)
				queueObj.next();
		},
		running: null,
		length: function () {
			return queue.length;
		},
		next: function () {
			if (queue.length > 0) {
				const task = queue[0];
				queueObj.running = task;
				callback(task, async function (err, result) {
					queueObj.running = null;
					queue.shift();
					queueObj.next();
				});
			}
		}
	};
	return queueObj;
}

//by allou 
global.DBYUKI = {
	database: {
		creatingThreadData: [],
		creatingUserData: [],
		creatingDashBoardData: [],
		creatingGlobalData: []
	}
};
//by allou 👽
global.db = {
	allThreadData: [],
	allUserData: [],
  allGlobalData: [],
	threadModel: null,
	userModel: null,
  globalModel: null,
	threadsData: null,
	usersData: null,
  globalData: null,
	receivedTheFirstMessage: {}
};

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();


var configValue;
try {
  global.client.configPath = join(global.client.mainPath, "config.json");
  configValue = require(global.client.configPath);
}
catch (e) {
  return logger.log([
    {
      message: "[ SETTINGS ]: ",
      color: ["red", "cyan"],
    },
    {
      message: `Not Found config`,
      color: "white",
    },
  ]);
};


try {
  for (const key in configValue) global.config[key] = configValue[key];
  logger.log([
    {
      message: "[ SETTINGS ]: ",
      color: ["red", "cyan"],
    },
    {
      message: `Loaded config`,
      color: "white",
    },
  ]);
}
catch {
  return logger.log([
    {
      message: "[ SETTINGS ]: ",
      color: ["red", "cyan"],
    },
    {
      message: `Can't Load config`,
      color: "white",
    },
  ]);
}

const { Sequelize, sequelize } = require("./includes/database");


const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
  const getSeparator = item.indexOf('=');
  const itemKey = item.slice(0, getSeparator);
  const itemValue = item.slice(getSeparator + 1, item.length);
  const head = itemKey.slice(0, itemKey.indexOf('.'));
  const key = itemKey.replace(head + '.', '');
  const value = itemValue.replace(/\\n/gi, '\n');
  if (typeof global.language[head] == "undefined") global.language[head] = new Object();
  global.language[head][key] = value;
}

global.getText = function(...args) {
  const langText = global.language;
  if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
  var text = langText[args[0]][args[1]];
  for (var i = args.length - 1; i > 0; i--) {
    const regEx = RegExp(`%${i}`, 'g');
    text = text.replace(regEx, args[i + 1]);
  }
  return text;
}
logger.log([
  {
    message: "[ Login ]: ",
    color: ["red", "cyan"],
  },
  {
    message: `Found AppState`,
    color: "white",
  },
]);

try {
  var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "Evastate.json"));
  var appState = require(appStateFile);

}
catch {
  return logger.log([
    {
      message: "[ Login ]: ",
      color: ["red", "cyan"],
    },
    {
      message: `AppState Not Found`,
      color: "white",
    },
  ]);
}

function onBot({ models: botModel }) {
  const loginData = {};
  loginData['appState'] = appState;
  login(loginData, async (loginError, loginApiData) => {
    if (loginError) return logger(JSON.stringify(loginError), `ERROR`);
//by allou 
const DB_by_allou = await require('./DB/controller/index.js')(loginApiData);

	  const {
		threadModel,
		userModel,
    globalModel,
		threadsData,
		usersData,
    globalData,
		databaseType
	  } = DB_by_allou;
    loginApiData.setOptions(global.config.FCAOption)
    writeFileSync(appStateFile, JSON.stringify(loginApiData.getAppState(), null, '\x09'))
    global.config.version = '1.2.14'
    global.client.timeStart = new Date().getTime(),
      function() {
        const listCommand = readdirSync(global.client.mainPath + '/Scripts/commands').filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));
        for (const command of listCommand) {
          try {
            var module = require(global.client.mainPath + '/EvaScripts/commands/' + command);
            if (!module.config || !module.run || !module.config.commandCategory) throw new Error("Error in cmd format");
            if (global.client.commands.has(module.config.name || '')) throw new Error("Name Is Repeated");

            if (module.config.dependencies && typeof module.config.dependencies == 'object') {
              for (const reqDependencies in module.config.dependencies) {
                const reqDependenciesPath = join(__dirname, 'nodemodules', 'node_modules', reqDependencies);
                try {
                  if (!global.nodemodule.hasOwnProperty(reqDependencies)) {
                    if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global.nodemodule[reqDependencies] = require(reqDependencies);
                    else global.nodemodule[reqDependencies] = require(reqDependenciesPath);
                  } else '';
                } catch {
                  var check = false;
                  var isError;

                  execSync('npm ---package-lock false --save install' + ' ' + reqDependencies + (module.config.dependencies[reqDependencies] == '*' || module.config.dependencies[reqDependencies] == '' ? '' : '@' + module.config.dependencies[reqDependencies]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                  for (let i = 1; i <= 3; i++) {
                    try {
                      require['cache'] = {};
                      if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global['nodemodule'][reqDependencies] = require(reqDependencies);
                      else global['nodemodule'][reqDependencies] = require(reqDependenciesPath);
                      check = true;
                      break;
                    } catch (error) { isError = error; }
                    if (check || !isError) break;
                  }
                  if (!check || isError) throw console.log();
                }
              }

            }
            if (module.config.envConfig) try {
              for (const envConfig in module.config.envConfig) {
                if (typeof global.configModule[module.config.name] == 'undefined') global.configModule[module.config.name] = {};
                if (typeof global.config[module.config.name] == 'undefined') global.config[module.config.name] = {};
                if (typeof global.config[module.config.name][envConfig] !== 'undefined') global['configModule'][module.config.name][envConfig] = global.config[module.config.name][envConfig];
                else global.configModule[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                if (typeof global.config[module.config.name][envConfig] == 'undefined') global.config[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
              }

            } catch (error) {
              throw new Error("Env Error");
            }
            if (module.onLoad) {
              try {
                const moduleData = {};
                moduleData.api = loginApiData;
                moduleData.models = botModel;
                module.onLoad(moduleData);
              } catch (err) {
                throw new Error(`Can't onLoad : ${module.config.name} 👽 ${err}`);
              };
            }
            if (module.handleEvent) global.client.eventRegistered.push(module.config.name);
            global.client.commands.set(module.config.name, module);

          } catch (error) {
            logger.log([
              {
                message: "[ STARTER ]: ",
                color: ["red", "cyan"],
              },
              {
                message: `Can't load module : ${module.config.name} 🙂 ${error}`,
                color: "white",
              },
            ]);
          };
        }
      }(),
      function() {
        const events = readdirSync(global.client.mainPath + '/EvaScripts/events').filter(event => event.endsWith('.js') && !global.config.eventDisabled.includes(event));
        for (const ev of events) {
          try {
            var event = require(global.client.mainPath + '/EvaScripts/events/' + ev);
            if (!event.config || !event.run) throw new Error(global.getText('mirai', 'errorFormat'));
            if (global.client.events.has(event.config.name) || '') throw new Error(global.getText('mirai', 'nameExist'));
            if (event.config.dependencies && typeof event.config.dependencies == 'object') {
              for (const dependency in event.config.dependencies) {
                const reqdep = join(__dirname, 'nodemodules', 'node_modules', dependency);
                try {
                  if (!global.nodemodule.hasOwnProperty(dependency)) {
                    if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                    else global.nodemodule[dependency] = require(reqdep);
                  } else '';
                } catch {
                  let check = false;
                  let isError;

                  execSync('npm --package-lock false --save install' + dependency + (event.config.dependencies[dependency] == '*' || event.config.dependencies[dependency] == '' ? '' : '@' + event.config.dependencies[dependency]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                  for (let i = 1; i <= 3; i++) {
                    try {
                      require['cache'] = {};
                      if (global.nodemodule.includes(dependency)) break;
                      if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                      else global.nodemodule[dependency] = require(reqdep);
                      check = true;
                      break;
                    } catch (error) { isError = error; }
                    if (check || !isError) break;
                  }

                }
              }

            }
            if (event.config.envConfig) try {
              for (const envConfig in event.config.envConfig) {
                if (typeof global.configModule[event.config.name] == 'undefined') global.configModule[event.config.name] = {};
                if (typeof global.config[event.config.name] == 'undefined') global.config[event.config.name] = {};
                if (typeof global.config[event.config.name][envConfig] !== 'undefined') global.configModule[event.config.name][envConfig] = global.config[event.config.name][envConfig];
                else global.configModule[event.config.name][envConfig] = event.config.envConfig[envConfig] || '';
                if (typeof global.config[event.config.name][envConfig] == 'undefined') global.config[event.config.name][envConfig] = event.config.envConfig[envConfig] || '';
              }

            } catch (error) {

            }
            if (event.onLoad) try {
              const eventData = {};
              eventData.api = loginApiData, eventData.models = botModel;
              event.onLoad(eventData);
            } catch (error) {
              logger.log([
                {
                  message: "[ EVENTS ]: ",
                  color: ["red", "cyan"],
                },
                {
                  message: `ERROR on onLoad for : ${event.config.name}`,
                  color: "white",
                },
              ]);
            }
            global.client.events.set(event.config.name, event);
          } catch (error) {
            logger.log([
              {
                message: "[ EVENTS ]: ",
                color: ["red", "cyan"],
              },
              {
                message: `ERROR on Event : ${event.config.name}`,
                color: "white",
              },
            ]);
          }
        }
      }()
    const gradient = require("gradient-string")
    const redToGreen = gradient("red", "cyan");
    console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));
    console.log(cv(`\n` + `──LOADING LOADER─●`));
    logger.log([{
      message: "[ LOADER ]: ",
      color: ["red", "cyan"],
    },
    {
      message: `Loaded ${global.client.commands.size} Command Aand ${global.client.events.size} Events`,
      color: "white"
    }])

    const listenerData = {};
    listenerData.api = loginApiData;
    listenerData.models = botModel;
	  listenerData.globalData = globalData;
	  listenerData.usersData = usersData;
	  listenerData.threadsData = threadsData;
	  
    const listener = require('./includes/listen')(listenerData);

    function listenerCallback(error, message) {
      if (error) return logger(global.getText('mirai', 'handleListenError', JSON.stringify(error)), 'error');
      if (['presence', 'typ', 'read_receipt'].some(data => data == message.type)) return;
      if (global.config.DeveloperMode == !![]) console.log(message);
      return listener(message);
    };
    global.handleListen = loginApiData.listenMqtt(listenerCallback);

    global.client.api = loginApiData


  });
}
console.log(cv(`\n` + `──LOADING DATA─●`));
(async () => {
  try {
    await sequelize.authenticate();
    const authentication = {};
    authentication.Sequelize = Sequelize;
    authentication.sequelize = sequelize;
    const models = require('./includes/database/model')(authentication);
    
    logger.log([
      {
        message: "[ DATABASE ]: ",
        color: ["red", "cyan"],
      },
      {
        message: `Connected to DB `,
        color: "white",
      },
    ]);
    console.log(cv(`\n` + `──LOADING FACEBOOK─●`));
    const botData = {};
    botData.models = models
    onBot(botData);
  } catch (error) {
    logger.log([
      {
        message: "[ DATABASE ]: ",
        color: ["red", "cyan"],
      },
      {
        message: `Can't Connect to DB `,
        color: "white",
      },
    ]);
  }


})();
process.on('unhandledRejection', (err, p) => { });

