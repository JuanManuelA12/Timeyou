const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Function",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        alloNull: false,
      },
    },
    { timestamps: false }
  );
};
