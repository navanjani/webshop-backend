'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
       name:"Bruce Wayne",
       email:"bruce@wayne.com",
       password: bcrypt.hashSync("Iambatman",10),
         createdAt: new Date(),
         updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});

  }
};
