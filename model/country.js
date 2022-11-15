const { Model, DataTypes } = require("sequelize");

const seq = require("../database/mySQL.js");
const country = seq.define(
  "country",
  {
    country_id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
    },
    country_name: {
      type: DataTypes.STRING(40),
      defaultValue: null,
    },
    region_id: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
    },
  },
  {
    tableName: "countries",
    timestamps: false,
  }
);

module.exports = country;
