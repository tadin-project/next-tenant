/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ms_group").del();
  await knex("ms_group").insert([
    { group_id: 1, group_name: "Root", group_status: true },
    { group_id: 2, group_name: "Administrator", group_status: true },
    { group_id: 3, group_name: "User", group_status: true },
  ]);
};
