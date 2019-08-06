// schedule model
// Used as join table between employee, role, and calendar
// The '~' in filename "~EmployeeRoles" used so this file is read last so that
// this join table is created after the tables it references are created to avoid errors

module.exports = function(sequelize, DataTypes){
  var EmployeeRoles = sequelize.define("Employee_roles", {
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    },
    skill_level: {
      type: DataTypes.ENUM('inexperienced','novice','competent'),
      defaultValue: 'inexperienced'
    }
  });
  return EmployeeRoles;
};