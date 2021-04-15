exports.seed = function (knex) {
  return knex("steps")
    .then(() => {
      return knex("steps").insert([
        { step_id: 1, step_instructions: "spread over evenly", step_number: 1, recipe_id: 1 },
        { step_id: 2, step_instructions: "apply sauce", step_number: 2, recipe_id: 2 },
        { step_id: 3, step_instructions: "add seasoning", step_number: 3, recipe_id: 3 },
        { step_id: 4, step_instructions: "knead dough", step_number: 4, recipe_id: 1 },
        { step_id: 5, step_instructions: "add pepper", step_number: 5, recipe_id: 2 },
        { step_id: 6, step_instructions: "beat for 5 minutes", step_number: 6, recipe_id: 3 },
        { step_id: 7, step_instructions: "cook at 450", step_number: 7, recipe_id: 1 },
        { step_id: 8, step_instructions: "fry to golden", step_number: 8, recipe_id: 2 },
        { step_id: 9, step_instructions: "whip for 5 minutes", step_number: 9, recipe_id: 3 },
      ]);
    });
};