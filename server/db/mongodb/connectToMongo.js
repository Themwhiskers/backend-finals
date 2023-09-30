const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose
    .connect("mongodb+srv://root:root@finalsapp.rnkpzjb.mongodb.net/")
    .then(() => console.log(chalk.magentaBright("Connected to MongoDB! 🥳")))
    .catch((err) => console.log(chalk.redBright.bold(`Failed to connect to MongoDB! 😥, ${err}`)));