<<<<<<< HEAD
const { DataTypes } = require("sequelize");
=======
const { DataTypes } = require('sequelize');
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
<<<<<<< HEAD
  sequelize.define(
    "Watch",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("male", "female", "unisex"),
        defaultValue: "unisex",
      },
      review: {
        type: DataTypes.ENUM("0", "1", "2", "3", "4", "5"),
        defaultValue: "0",
      },
      del: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      timestamps: false, // Desactivar timestamps
    }
  );
};
=======
  sequelize.define('Watch', {

    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('male','female','unisex'),
        defaultValue:'unisex',
    },
    review: {
        type: DataTypes.ENUM('0','1','2','3','4','5'),
        defaultValue:'0',
    },
    del: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
  },{
    timestamps: false, // Desactivar timestamps
  });
};
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
