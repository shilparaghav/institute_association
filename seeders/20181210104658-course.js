'use strict';
var dated = new Date;
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('Courses', [{
      courseName: "C",
      fees: "4000",
      duration: "3",
      durationType: "months",
      status: "OPEN",
      createdAt: dated,
      updatedAt: dated
    },
    {
      courseName: "CPP",
      fees: "4000",
      duration: "6",
      durationType: "months",
      status: "OPEN",
      createdAt: dated,
      updatedAt: dated
    },
    {
      courseName: "PHP",
      fees: "8000",
      duration: "3",
      durationType: "months",
      status: "OPEN",
      createdAt: dated,
      updatedAt: dated
    },
    {
      courseName: "JAVA",
      fees: "14000",
      duration: "6",
      durationType: "months",
      status: "OPEN",
      createdAt: dated,
      updatedAt: dated
    },

    {
      courseName: "NODEJs",
      fees: "20000",
      duration: "6",
      durationType: "months",
      status: "OPEN",
      createdAt: dated,
      updatedAt: dated
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkDelete('Courses', null, {});

  }
};
