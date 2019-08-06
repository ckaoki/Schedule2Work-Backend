// employeeRoles model
// Used as join table between employee and role
// The '~' in filename "~EmployeeRoles" used so this file is read last so that
// this join table is created after the tables it references are created to avoid errors

module.exports = function(sequelize, DataTypes){
  var EmployeeRoles = sequelize.define("Employee_Role", {
    EmployeeRoleID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'employeeID'
      }
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'roleID'
      }
    },
    ProficiencyLevel: {
      type: DataTypes.ENUM('inexperienced','novice','competent'),
      defaultValue: 'inexperienced'
    }
  });
  return EmployeeRoles;
};