/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("group_user", function (table) {
    table
      .integer("user_id")
      .unsigned()
      .index()
      .references("user_id")
      .inTable("ms_user");
    table
      .integer("group_id")
      .unsigned()
      .index()
      .references("group_id")
      .inTable("ms_group");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("group_user");
};
