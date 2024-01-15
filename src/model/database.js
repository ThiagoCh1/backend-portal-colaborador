var Sequelize = require("sequelize");
const sequelize = new Sequelize("BDPI4ATT", "postgres", "thiago9645", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
  timestamps: false,
});

sequelize.sync().then(() => {
  console.log("Database synchronized");
});

module.exports = sequelize;
