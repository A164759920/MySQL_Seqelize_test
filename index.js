// const Sequelize = require("sequelize");
// const { DataTypes } = require("sequelize");
// const { getIPAddress } = require("./utils/getIP.js");

// // 动态获取本机当前可用的ipv4地址
// /**
//  * @return {Array}  ipv4 address Array
//  */
// var ip = getIPAddress()[0];

// const db = {
//   database: "wlw2020", // 连接的数据库名称，需根据当前SQL server中已有的数据库填写
//   username: "sa", // 登录用户名
//   password: "123456", //登录密码

//   host: ip, // 动态获取的ip
//   port: "8877", // 配置的端口
//   dialect: "mssql", // 标识为sql server
//   // close log
//   logging: false,
//   // "timestamps: false" fixed Unknown column 'createdAt' in 'field list'
//   timestamps: false,
//   dialectOptions: {
//     multipleStatements: true,
//   },
// };

// const sequelize = new Sequelize(db);

// sequelize.sync();
// // 连通性检测
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// const User = sequelize.define("User", {
//   //id会自动创建 可忽略
//   username: {
//     type: DataTypes.STRING, //类型
//     allowNull: false, //字段是否可以为空
//     unique: true, //字段是否唯一
//     comment: "用户名，唯一", //描述
//   },
//   password: {
//     type: DataTypes.CHAR(64),
//     allowNull: false,
//     comment: "密码",
//   },
//   is_admin: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: 0, //默认值
//     commit: "0为非管理员,1为管理员",
//   },
// });

// User.sync({ force: true });

// // // 进行简单的SQL语句查询测试
// // const query = sequelize.query("SELECT * FROM STUDENT"); // 返回一个promise
// // query.then(
// //   (value) => {
// //     console.log("value", value);
// //   },
// //   (err) => {
// //     console.log("err", err);
// //   }
// // );

// /***
//  *@param {string} SQL
//  *
//  */
// // async function createQuery(SQL) {
// //   const res = await sequelize.query(SQL);
// //   console.log(typeof res[0]);
// //   console.log(res[0]);
// //   res[0].forEach((item) => {
// //     console.log(item.Sname);
// //   });
// //   // console.log(res)
// // }

// // createQuery("SELECT * FROM STUDENT");
// // createQuery("SELECT Sno FROM STUDENT WHERE Sage = 20")

//导入
const { Sequelize } = require("sequelize");
//连接
// const seq = new Sequelize("sys", "root", "Scy20020128", {
//   host: "124.221.249.177",
//   dialect: "mysql",
//   timezone: "+08:00",
// });
const seq = new Sequelize("atguigudb", "root", "12345", {
  host: "127.0.0.1",
  dialect: "mysql",
  timezone: "+08:00",
});
//测试连接是否成功
//seq的authenticate会返回一个promise对象，可用于验证连接是否成功。
seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败", err);
  });

(async function () {
  const res = await seq.sync();
  console.log("同步", res.modelManager);
})();

// (async function () {
//   try {
//     // const res = await seq.query("select * from jobs");
//     const res = await seq.find
//     console.log(res);
//   } catch (error) {
//     console.log("错误", error);
//   }
// })();

//导出数据库实例对象供nodule使用
module.exports = seq;
