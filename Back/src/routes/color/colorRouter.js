
const { Router } = require('express');
const createColor= require("../../controllers/postColor");
const allColor = require("../../controllers/getColors");

const colorRouter = Router();
colorRouter.post("/", async (req, res) => {
    const { name } = req.body;
    try {
    if (!name) res.status(400).json({ Error: error.message });
    const newColor = await createColor(name);
    res.status(200).json(newColor);
    } catch (error) {
    res.status(500).json({ Error: error.message });
    }
});


colorRouter.get("/:colorName", async (req, res) => {
    const {colorName} = req.params;
    console.log(colorName);
    try {
    const allColors = await allColor(colorName);
    res.status(200).json(allColors);
    } catch (error) {
    res.status(500).json({ Error: error.message });
    }
});

module.exports = colorRouter;