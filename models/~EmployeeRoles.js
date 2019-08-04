// employeeRole model
// Used as join table between employee and role
// The '~' in filename "~EmployeeRoles" used so this file is read last so that
// this join table is created after the tables it references are created to avoid errors

module.exports = function(sequelize, DataTypes){
  var EmployeeRole = sequelize.define("Employee_role", {
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Role',
        key: 'id'
      }
    },
    skill_level: {
      type: DataTypes.ENUM('inexperienced','novice','competant'),
      defaultValue: 'inexperienced'
    }
  });
  return EmployeeRole;
};