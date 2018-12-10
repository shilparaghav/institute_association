'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Admissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fatherName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      admissionDate: {
        type: Sequelize.DATE
      },
      enqId: {
        type: Sequelize.INTEGER,

        references: {
          // This is a reference to another model
          model: "Enquiries",   ///name of referenced table in database

          // This is the column name of the referenced model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      courseId: {
        type: Sequelize.INTEGER,

        references: {
          // This is a reference to another model
          model: "Courses",

          // This is the column name of the referenced model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('Admissions');
  }
};