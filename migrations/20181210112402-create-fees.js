'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paymentDate: {
        type: Sequelize.DATE
      },
      amountPaid: {
        type: Sequelize.INTEGER
      },
      amountPending: {
        type: Sequelize.INTEGER
      },

      admissionId: {
        type: Sequelize.INTEGER,

        references: {
          // This is a reference to another model
          model: "Admissions",   ///name of referenced table in database

          // This is the column name of the referenced model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      status: {
        type: Sequelize.ENUM('OPEN', 'CLOSE', 'DELETED')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fees');
  }
};