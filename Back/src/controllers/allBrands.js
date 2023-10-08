const { Brand } = require("../db");

const allBrands = async () => {
  const getBrands = await Brand.findAll();

<<<<<<< HEAD
=======

>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  if (!getBrands) throw new Error("That brand does not exist");
  return getBrands;
};

module.exports = allBrands;
