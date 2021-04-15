exports.seed = function (knex) {
    return knex("ingredients")
        .then(() => {
            return knex("ingredients").insert([
                { ingredient_id: 1, ingredient_name: "cheese" },
                { ingredient_id: 2, ingredient_name: "egg" },
                { ingredient_id: 3, ingredient_name: "olive oil" },
                { ingredient_id: 4, ingredient_name: "salt" },
                { ingredient_id: 5, ingredient_name: "pepper" },
                { ingredient_id: 6, ingredient_name: "ham" },
                { ingredient_id: 7, ingredient_name: "pepperoni" },
                { ingredient_id: 8, ingredient_name: "cucumber" },
                { ingredient_id: 9, ingredient_name: "spinach" },
            ]);
        });
};
