'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseName: DataTypes.ENUM('C', 'CPP', 'JAVA', 'NODEJs', 'PHP'),
    fees: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    durationType: DataTypes.ENUM('days', 'months', 'years'),
    status: DataTypes.ENUM('OPEN', 'CLOSE', 'DELETED')
  }, {});
  Course.associate = function (models) {
    // associations can be defined here
    Course.hasMany(models.Admission,{ foreignKey: 'courseId' });
    Course.hasMany(models.Enquiry,{ foreignKey: 'courseId' });
  };
  return Course;
};