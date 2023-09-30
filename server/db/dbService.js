const config = require("config");

const ENVIRONMENT = config.get("NODE_ENV");

const connectToDb = () => {
  if (ENVIRONMENT === "development")
    require("./mongodb/connectToMongo");
  if (ENVIRONMENT === "production") require("./mongodb/connectToAtlas");
};

module.exports = connectToDb;