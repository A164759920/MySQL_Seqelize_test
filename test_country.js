const seq = require("./database/mySQL.js");
const country = require("./model/country.js");

country
  // SELECT country_name,COUNT(region_id) AS "count"
  // FROM countries
  // GROUP BY region_id
  // ORDER BY count DESC
  // limit 2
  // offset 1 从第一个开始 取两个
  .findAll({
    attributes: [
      "country_name",
      [seq.fn("COUNT", seq.col("region_id")), "count"],
    ],
    group: "region_id",
    order: [["count", "DESC"]], // 最外层有括号
    offset: 1,
    limit: 2,
  })
  .then((value) => {
    value.forEach((item) => {
      console.log(item.dataValues);
    });
  });

country.findByPk("AR").then((value) => {
  console.log("查询结果", value.dataValues);
});
