const { Model, DataTypes } = require("sequelize");

const seq = require("../database/mySQL.js");
const region = seq.define(
  "regions",
  {
    region_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,  
    },
    region_name: DataTypes.STRING(25),
  },
  {
    tableName: "regions",
    timestamps: false,
  }
);

(async function () {
  const res = await region.sync();
  if (res) {
    console.log("同步情况", res);
  }
});
module.exports = region;
