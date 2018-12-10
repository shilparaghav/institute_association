'use strict';
var dated = new Date;
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('Fees', [{
      paymentDate: "2017-4-24",
      amountPaid: "8000",
      amountPending: "6000",
      admissionId: "2",
      status: "OPEN",
      createdAt: dated,
      updatedAt: dated

    },
    {
      paymentDate: "2014-3-23",
      amountPaid: "12000",
      amountPending: "8000",
      admissionId: "1",
      status: "CLOSE",
      createdAt: dated,
      updatedAt: dated
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete('Fees', null, {});

  }
};
