/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ms_user", function (table) {
    table.increments("user_id");
    table.string("user_name", 255).notNullable();
    table.string("user_email", 255).notNullable();
    table.text("user_fullname");
    table.text("password");
    table.boolean("user_status").defaultTo(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("ms_user");
};
