const db = require("../../data/db-config");

const getRecipeById = (id) => {
    return db("recipes as r")
        .join("steps_ingredients as si", "r.recipe_id", "si.recipe_id")
        .join("ingredients as i", "i.ingredient_id", "si.ingredient_id")
        .where("r.recipe_id", id);
};

module.exports = {
    getRecipeById,
};
