// shiftRoles model
// Used as join table between shift and role
// The '~' in filename "~EmployeeRoles" used so this file is read last so that
// this join table is created after the tables it references are created to avoid errors

module.exports = function(sequelize, DataTypes){
  var ShiftRoles = sequelize.define("shift_roles", {
    ShiftRoleID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    ShiftID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shifts',
        key: 'ShiftID'
      }
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'RoleID'
      }
    }
  });

  
  return ShiftRoles;
};