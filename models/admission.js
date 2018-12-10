'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admission = sequelize.define('Admission', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fatherName: DataTypes.STRING,

    // course: {
    //   type: DataTypes.ENUM('C', 'CPP', 'JAVA', 'NOSEJS', 'PHP'),
    //   allowNull: false
    // },
    admissionDate: {
      type: DataTypes.DATE
    },
    enqId: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to another model
        model: "Enqiries",   ///name of referenced table in database

        // This is the column name of the referenced model
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
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
    status: DataTypes.ENUM('OPEN', 'CLOSE', 'DELETED'),
  }, {});
  Admission.associate = function (models) {
    // associations can be defined here
    Admission.hasOne(models.Course);  //each admission has one course
    Admission.hasOne(models.Fees); // each admission one has one fees


  };
  return Admission;
};