"use strict";

const users = [
  {
    id: "584f459d-5fdc-4955-b0ed-63b8a59dca1a",
    username: "neo_anderson",
    password: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "82bbfc0f-4ff1-4488-bed3-624e53e1053d",
    username: "trinity",
    password: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
