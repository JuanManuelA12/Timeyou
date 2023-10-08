const { Color, Watch} = require("../db");


const getColors = async (colorName) => {
<<<<<<< HEAD
 
=======
  console.log(colorName);
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    const colors= await Color.findOne({
        where: { name: colorName },
        include: Watch // Incluir la relación de los relojes asociados al color
      });
    return colors;
    };
    
    
    module.exports = getColors;