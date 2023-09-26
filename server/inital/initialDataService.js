const chalk = require('chalk');
const normalizeUser = require('../users/helpers/normalizeUser');
const data = require('./initialData.json');

const generateInitialUsers = async () => {
    const { users } = data;

    users.forEach(async user => {
        try {
            user = await normalizeUser(user);
        } catch (error) {
            return console.log(chalk.bgRedBright.white(error.message));
        }
    })
};

exports.generateInitialUsers = generateInitialUsers;