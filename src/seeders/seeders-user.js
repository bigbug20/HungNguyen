'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'bigbug0942@gmail.com',
      password: '123456',
      firstName: 'Nguyen',
      lastName: 'Tuan Hung',
      address: 'Mai Dich',
      phoneNumber: '0589977004',
      gender: 1,
      Image: null,
      roleId: 'R1',
      positionId: null,

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
