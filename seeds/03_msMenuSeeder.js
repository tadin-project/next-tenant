/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ms_menu").del();
  await knex("ms_menu").insert([
    {
      menu_id: 1,
      menu_kode: "01",
      menu_name: "Administrator",
      menu_url: "#",
      menu_ikon: null,
      menu_status: true,
      menu_parent: 0,
    },
    {
      menu_id: 2,
      menu_kode: "01.01",
      menu_name: "Master User",
      menu_url: "ms-user",
      menu_ikon: null,
      menu_status: true,
      menu_parent: 1,
    },
    {
      menu_id: 3,
      menu_kode: "01.02",
      menu_name: "Master Group",
      menu_url: "ms-group",
      menu_ikon: null,
      menu_status: true,
      menu_parent: 1,
    },
    {
      menu_id: 4,
      menu_kode: "99",
      menu_name: "Master Menu",
      menu_url: "ms-menu",
      menu_ikon: null,
      menu_status: true,
      menu_parent: 0,
    },
  ]);
};
