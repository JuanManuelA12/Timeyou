require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

//const sequelize = new Sequelize( 
//`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/timeyou`,
//    {
//       logging: false,
//       native: false, 
//    }
// );

const sequelize = new Sequelize(
  DB_DEPLOY,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Para relacionarlos hacemos un destructuring
const { Watch, User, Brand, Color, Buy, Function, Strap, Style } = sequelize.models;



//Product.-
Watch.belongsTo(Brand);
Brand.hasMany(Watch);
Color.belongsTo(Watch);
Watch.hasMany(Color);
Style.belongsTo(Watch);
Watch.hasMany(Style);
Strap.belongsTo(Watch);
Watch.hasMany(Strap);

Function.belongsToMany(Watch, { through: "FunctionWatch" });
Watch.belongsToMany(Function, { through: "FunctionWatch" });

User.hasMany(Buy);
Buy.belongsTo(User);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};