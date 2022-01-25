const Sequelize = require("sequelize");
const connection = new Sequelize("giovannaEstetica", "root", "master", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

module.exports = connection;