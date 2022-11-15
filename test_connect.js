const seq = require("./database/mySQL.js");
const country = require("./model/country.js");
const region = require("./model/regions.js");
const { Op } = require("sequelize");

// 关联需的hasMany/hasOne 需和belongsTo配套使用
region.hasMany(country, {
  foreignKey: {
    name: "region_id",
  },
});
country.belongsTo(region, {
  foreignKey: {
    name: "region_id",
  },
});

// 示例 查询 countries表中region_id为2的所有国家名称,并将region_id转换为region_name(region表中)
country
  .findAll({
    where: {
      region_id: 2,
    },
    include: region,
  })
  .then((value) => {
    console.log("地区:", value[0].dataValues.region.dataValues.region_name);
    value.forEach((item) => {
      console.log("国家:", item.dataValues.country_name);
    });
  });
