'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enquiry = sequelize.define('Enquiry', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fatherName: {
      type: DataTypes.STRING
    },
    enqDate: DataTypes.DATE,
    
    courseId: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to another model
        model: "Courses",   ///name of referenced table in database

        // This is the column name of the referenced model
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    remarks: DataTypes.STRING,
    status: DataTypes.ENUM('OPEN', 'CLOSE', 'DELETED'),
  }, {});
  Enquiry.associate = function(models) {
    // associations can be defined here
    Enquiry.hasOne(models.Course);
  };
  return Enquiry;
};