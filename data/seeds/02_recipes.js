exports.seed = function (knex) {
  return knex("recipes")
      .then(() => {
          return knex("recipes").insert([
            { recipe_id: 1, recipe_name: "salad" },
            { recipe_id: 2, recipe_name: "soup" },
            { recipe_id: 3, recipe_name: "shrimp" },
            { recipe_id: 4, recipe_name: "steak" },
            { recipe_id: 5, recipe_name: "meatloaf" },
            { recipe_id: 6, recipe_name: "pancakes" },
            { recipe_id: 7, recipe_name: "waffles" },
            { recipe_id: 8, recipe_name: "pasta" },
            { recipe_id: 9, recipe_name: "Pizza" },
          ]);
      });
};
