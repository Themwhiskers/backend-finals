const mongoose = require('mongoose');
const chalk = require('chalk');
const userName = config.get("DB_NAME");
const password = config.get("DB_PASSWORD");
const host = config.get("DB_HOST");
const appDb = config.get("APP_DB");
mongoose
    .connect(`mongodb+srv://${userName}:${password}@${host}/${db}`)
    .then(() => console.log(chalk.magentaBright("Connected to Atlas MongoDB! 🥳")))
    .catch((err) => console.log(chalk.redBright.bold(`Failed to connect to Atlas MongoDB! 😥, ${err}`)));