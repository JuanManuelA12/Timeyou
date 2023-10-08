const { Color } = require("../db");

const allColors = async () => {
  const getColors = await Color.findAll();
<<<<<<< HEAD
  
  if (!getColors) throw new Error("That Color does not exist");
  
  return getColors;
  console.log(getColors)
};

console.log(allColors)
=======

  if (!getColors) throw new Error("That Color does not exist");
  
  return getColors;
};

>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
module.exports = allColors;
