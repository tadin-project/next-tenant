/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("group_menu", function (table) {
    table
      .integer("menu_id")
      .unsigned()
      .index()
      .references("menu_id")
      .inTable("ms_menu");
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
  return knex.schema.dropTable("group_menu");
};
