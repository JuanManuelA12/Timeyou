<<<<<<< HEAD
const { Strap, Watch } = require("../db");
=======
const { Strap, Watch} = require("../db");


>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

const getAllStraps = async () => {
  const allStraps = await Strap.findAll();
  if (!allStraps) throw new Error("That strap does not exist");
  return allStraps;
};

<<<<<<< HEAD
const getStraps = async (strapName) => {
  const Straps = await Strap.findOne({
    where: { name: strapName },
    include: Watch, // Incluir la relación de los relojes asociados al color
  });
  return Straps;
};

=======




const getStraps = async (strapName) => {
    const Straps= await Strap.findOne({
        where: { name: strapName },
        include: Watch // Incluir la relación de los relojes asociados al color
      });
    return Straps;
    };
    
    
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
module.exports = { getStraps, getAllStraps };
