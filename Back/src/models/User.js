const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
<<<<<<< HEAD
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
=======
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
<<<<<<< HEAD
        allowNull: true,
      },
=======
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
      },
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
      },
<<<<<<< HEAD
      provider: {
        type: DataTypes.ENUM("local", "google", "facebook"),
        defaultValue: "local",
      },
      del: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    },
    {
      timestamps: false,
    }
  );
};
