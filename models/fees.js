'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fees = sequelize.define('Fees', {
    paymentDate: DataTypes.DATE,
    amountPaid: DataTypes.INTEGER,
    amountPending: DataTypes.INTEGER,
    status: DataTypes.ENUM('OPEN', 'CLOSE', 'DELETED'),
    admissionId: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to another model
        model: "Admissions",   ///name of referenced table in database

        // This is the column name of the referenced model
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },

  }, {});
  Fees.associate = function (models) {
    // associations can be defined here




  };
  return Fees;
};