const config = {
  username: process.env.USER_NAME || "postgres",
  password: process.env.PASSWORD || "postgres",
  database: process.env.DATA_BASE || "movie",
  host: process.env.HOST || "127.0.0.1",
  dialect: process.env.DIALECT || "postgres",
};

module.exports = config;
