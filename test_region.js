const region = require("./model/regions");
const seq = require("./database/mySQL");
const { Op } = require("sequelize");
region
  // .findAll({
  //   attributes: [["region_name", "change_name"]],
  // })
  // update操作 返回1表示成功，返回0表示失败
  .update(
    { region_name: "NO.5 region" },
    {
      where: {
        region_name: {
          [Op.eq]: "changed_name",
        },
      },
    }
  )
  .then((value) => {
    console.log(value);
    // value.forEach((item) => {
    //   console.log(item.dataValues);
    // });
  });

// 【save的正确性验证】
// region.create({
//     region_id: "5",
//     region_name: "Africa",
// }).then(value => {
//     // console.log("实例", value)
//     seq.query("select region_name from regions").then(v => {
//         console.log("第1次", v)
//     })
//     return Promise.resolve(value)
// }).then(value => {
//     value.region_name = "changed_Name"
//     return value.save()
// }).then(value => {
//     seq.query("select region_name from regions").then(v => {
//         console.log("第2次",v)
//     })
// })
