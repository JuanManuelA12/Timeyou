const { Function, Watch } = require("../db");

const getAllFunctions = async () => {
  const allFunctions = await Function.findAll();

  if (!allFunctions) throw new Error("Functions not found");
  return allFunctions;
<<<<<<< HEAD
};
=======
}


>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

const getFunctions = async (functionName) => {
  const functions = await Function.findOne({
    where: { name: functionName },
    include: [
      {
<<<<<<< HEAD
        model: Watch,
      },
    ], // Incluir la relación de los relojes asociados al color
=======
        model: Watch
      }
    ] // Incluir la relación de los relojes asociados al color
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  });
  return functions;
};

<<<<<<< HEAD
module.exports = { getFunctions, getAllFunctions };
=======

module.exports = { getFunctions, getAllFunctions };
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
