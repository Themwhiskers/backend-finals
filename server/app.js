const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const { generateInitialUsers } = require('./inital/initialDataService');

const app = express();

app.use(cors);
app.use(express.json());

const PORT = 8181;

app.listen(PORT, () => {
    console.log(chalk.bgGreenBright.white(`Business Card App is LIVE at: http://localhost:${PORT}`));
    generateInitialUsers();
})