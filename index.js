const env = require("dotenv");
const db = require("./models/index");
env.config();

const main = async () => {
  try {
    await db.sequelize.sync();
    return console.log("DB SYNCED");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
main();
