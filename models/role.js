// Model for role
module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("role", {
      RoleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      RoleName: {
        type: DataTypes.STRING,
        unique: true
      },
    });
  
    Role.associate = function(models) {
      Role.belongsToMany(models.employee, {
        through: 'employee_roles',
        as: 'employee',
        foreignKey: 'RoleID',
        onDelete: 'cascade'
      });

    Role.belongsToMany(models.shift, {
      through: 'shift_roles',
      as: 'shift',
      foreignKey: 'RoleID'
      //commenting out the onDelete as it is keeping the data from loading. "Cannot add or update a child row: a foreigh key constraint fails"
      // onDelete: 'cascade'
    });

      Role.belongsTo(models.business);
    };
   
    return Role;


  };
