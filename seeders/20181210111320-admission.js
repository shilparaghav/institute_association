'use strict';
var dated = new Date;
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('Admissions', [{
      firstName: "neha",
      lastName: "negi",
      fatherName: "shivam negi",
      admissionDate: "2018-03-21",
      enqId: "1",
      courseId: "3",
      status: "OPEN",
      createdAt: dated,
      updatedAt: dated
    },
    {
      firstName: "mark",
      lastName: "peter",
      fatherName: "clark mike",
      admissionDate: "2018-05-27",
      enqId: "2",
      courseId: "3",
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
    return queryInterface.bulkDelete('Admissions', null, {});

  }
};
