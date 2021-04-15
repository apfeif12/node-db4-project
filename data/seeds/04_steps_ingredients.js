exports.seed = function (knex) {
    return knex("steps_ingredients")
        .then(() => {
            return knex("steps_ingredients").insert([
                {
                    step_ingredient_id: 1,
                    recipe_id: 1,
                    step_id: 1,
                    ingredient_id: 1,
                    quantity: 1,
                },
                {
                    step_ingredient_id: 2,
                    recipe_id: 2,
                    step_id: 2,
                    ingredient_id: 2,
                    quantity: 2,
                },
                {
                    step_ingredient_id: 3,
                    recipe_id: 3,
                    step_id: 3,
                    ingredient_id: 3,
                    quantity: 3,
                },
                {
                    step_ingredient_id: 4,
                    recipe_id: 4,
                    step_id: 4,
                    ingredient_id: 4,
                    quantity: 4,
                },
                {
                    step_ingredient_id: 5,
                    recipe_id: 5,
                    step_id: 5,
                    ingredient_id: 5,
                    quantity: 5,
                },
            ]);
        });
};
