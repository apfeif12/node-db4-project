const express = require("express");
const recipesModel = require("./recipes-model.js");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
    try {
        const recipe = await recipesModel.getRecipeById(req.params.id);
        res.status(200).json(recipe);
    } catch (err) {
        next(err);
    }
});
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
