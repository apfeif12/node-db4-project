exports.up = function (knex) {
    return knex.schema
        .createTable("steps_ingredients", (tbl) => {
            tbl.increments("step_ingredient_id");
            tbl.integer("recipe_id", 128)
                .notNullable()
                .references("recipe_id")
                .inTable("recipes");
            tbl.integer("step_id", 128)
                .notNullable()
                .references("step_id")
                .inTable("steps");
            tbl.integer("ingredient_id", 128)
                .notNullable()
                .references("ingredient_id")
                .inTable("ingredients");
            tbl.integer("quantity", 128).notNullable();
        })

        .createTable("steps", (tbl) => {
            tbl.increments("step_id");
            tbl.integer("step_number", 128).notNullable().unique();
            tbl.string("step_instructions", 128).notNullable();
            tbl.integer("recipe_id", 128)
                .notNullable()
                .references("recipe_id")
                .inTable("recipes");
        })

        .createTable("recipes", (tbl) => {
            tbl.increments("recipe_id");
            tbl.string("recipe_name", 128).notNullable().unique();
            tbl.timestamp("timestamp", 128);
        })

        .createTable("ingredients", (tbl) => {
            tbl.increments("ingredient_id");
            tbl.string("ingredient_name", 128).notNullable().unique();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
        .dropTableIfExists("steps")
        .dropTableIfExists("steps_ingredients");
};
