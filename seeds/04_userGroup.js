/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("group_user").del();
  await knex("group_user").insert([
    { user_id: 1, group_id: 1 },
    { user_id: 2, group_id: 2 },
    { user_id: 3, group_id: 3 },
  ]);
};
