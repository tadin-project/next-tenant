/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("group_menu").del();
  await knex("group_menu").insert([
    { menu_id: 1, group_id: 1 },
    { menu_id: 2, group_id: 1 },
    { menu_id: 3, group_id: 1 },
    { menu_id: 4, group_id: 1 },
    { menu_id: 1, group_id: 2 },
    { menu_id: 2, group_id: 2 },
    { menu_id: 3, group_id: 2 },
  ]);
};
