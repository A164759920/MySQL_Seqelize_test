const { Sequelize } = require("sequelize");
const seq = new Sequelize("atguigudb", "root", "12345", {
  host: "127.0.0.1",
  dialect: "mysql",
  timezone: "+08:00",
});
seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败", err);
  });
module.exports = seq;
