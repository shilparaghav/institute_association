'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enquiries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      fatherName: {
        type: Sequelize.STRING
      },
      enqDate: {
        type: Sequelize.DATE
      },
      courseId: {
        type: Sequelize.INTEGER,

        references: {
          // This is a reference to another model
          model: "Courses",   ///name of referenced table in database

          // This is the column name of the referenced model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      remarks: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Enquiries');
  }
};