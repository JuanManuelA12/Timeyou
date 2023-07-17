const express = require("express");
const createStrap = require("../../controllers/postStrap");
const getStraps = require("../../controllers/getStraps");
const strapsRouter = express.Router();

strapsRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) res.status(404).json({ Error: error.message });
    const newStrap = await createStrap(name);
    res.status(200).json(newStrap);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

strapsRouter.get("/:strapName", async (req, res) => {
  const {strapName} = req.params;
  try {
    const allFunctions = await getStraps(strapName);
    res.status(200).json(allFunctions);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = strapsRouter;
