/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ms_menu", function (table) {
    table.increments("menu_id");
    table.string("menu_kode", 255).notNullable();
    table.string("menu_name", 255).notNullable();
    table.string("menu_url", 255).nullable();
    table.string("menu_ikon", 255).nullable();
    table.boolean("menu_status").defaultTo(true);
    table.integer("menu_parent").unsigned().nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("ms_menu");
};
