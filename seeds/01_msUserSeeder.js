/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require("bcrypt");

exports.seed = async function (knex) {
  const salt = await bcrypt.genSalt(10);
  // Deletes ALL existing entries
  await knex("ms_user").del();
  await knex("ms_user").insert([
    {
      user_id: 1,
      user_name: "root",
      user_email: "iqbalmuhtadin24@gmail.com",
      user_fullname: "Admin Vendor",
      password: await bcrypt.hash("adminvendor", salt),
      user_status: true,
    },
    {
      user_id: 2,
      user_name: "admin",
      user_email: "admin@gmail.com",
      user_fullname: "Administrator",
      password: await bcrypt.hash("admin", salt),
      user_status: true,
    },
    {
      user_id: 3,
      user_name: "user01",
      user_email: "user01@gmail.com",
      user_fullname: "User 01",
      password: await bcrypt.hash("user01", salt),
      user_status: true,
    },
  ]);
};
