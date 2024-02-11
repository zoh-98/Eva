const chalk = require('chalk');
const gradient = require("gradient-string")

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FFFF").bold('[ 𝐄𝐕𝐀 𝐁𝐎𝐓 ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00FFFF").bold('[ 𝐄𝐕𝐀 𝐁𝐎𝐓 ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF").bold(` [ 𝐄𝐕𝐀 𝐁𝐎𝐓 ] » `) + data);
			break;
	}
	}
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  yellow: "#ffff00",
  blue: "#0000ff",
  magenta: "#ff00ff",
  cyan: "#00ffff",
  white: "#ffffff",
  gray: "#808080",
  ocean: "#00bfff",
};
module.exports.log = async (messages) => {
  const logMessage = messages
    .map(({ message, color }) => {
      if (Array.isArray(color)) {
        const gradientFunction = gradient(...color);
        return gradientFunction(message);
      } else {
        return chalk.hex(colors[color])(message);
      }
    })
    .join("");
  console.log(logMessage, "");
};
