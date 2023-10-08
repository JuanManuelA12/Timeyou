const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Buy",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
<<<<<<< HEAD
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "stripe",
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      card: {
        type: DataTypes.JSONB,
        allowNull: false,
=======
        unique: true,
        alloNull: false,
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      },
    },
    { timestamps: false }
  );
};
