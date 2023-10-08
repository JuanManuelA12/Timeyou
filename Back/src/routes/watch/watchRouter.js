const express = require("express");
const createNewWatch = require("../../controllers/postNewWacth");
const getWatches = require("../../controllers/getWatches");
<<<<<<< HEAD
const createNewWatches = require("../../controllers/postBulkWatch");

const watchRouter = express.Router();

watchRouter.post("/", async (req, res) => {
  console.log(req.body);
  const {
    brand,
    model,
    style,
    color,
    image,
    strap,
    price,
    gender,
    review,
    functions,
    description,
    del,
    stock,
  } = req.body;
  try {
    const newWatch = await createNewWatch({
=======
const createNewWatches = require('../../controllers/postBulkWatch');

const watchRouter = express.Router();


watchRouter.post("/", async (req, res) => {
  // console.log(req.body);
  const { brand, model, style, color, image, strap, price, gender, review, functions, description, del} = req.body;
  try {
    const newWatch = await createNewWatch(
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      brand,
      model,
      style,
      color,
      image,
      strap,
      price,
      gender,
      review,
      functions,
      description,
<<<<<<< HEAD
      del,
      stock,
    });
=======
      del
    );
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
    res.status(200).json(newWatch);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
});

watchRouter.post("/bulk", async (req, res) => {
  // console.log(req.body);
  const watchesData = req.body;
  try {
    const newbulk = await createNewWatches(watchesData);
    res.status(200).json(newbulk);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
});

watchRouter.get("/", async (req, res) => {
  try {
<<<<<<< HEAD
    const allWatch = await getWatches();
    res.status(200).json(allWatch);
=======
    const allWatch = await getWatches()
    res.status(200).json(allWatch)

>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
<<<<<<< HEAD
});

watchRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let allWatches = await getWatches();

    if (id || typeof id !== "string" || id.trim() === "") {
      let data = await allWatches.filter((watch) => watch.id == id);
      let dataFinal = await allWatches.filter(
        (watch) => watch.model == data[0].model
      );
      //model = dataValues[0].dataValues.model
      console.log(data[0].model);

      dataFinal.length
        ? res.status(200).send(dataFinal)
        : res.status(404).send("Watch not found!");
    }
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
});

module.exports = watchRouter;
=======
})


watchRouter.get("/:model", async (req, res) => {

  try {

    const {model} = req.params
    
    let allWatches = await getWatches();

    if (model || typeof model !== 'string' || model.trim() === '') {
      let watchByModel = await allWatches.filter(watch => watch.model == model)

      watchByModel.length ?
        res.status(200).send(watchByModel) :
        res.status(404).send('Watch not found!');
    }
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  })

module.exports= watchRouter
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
