// Model for role
module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
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
      Role.belongsToMany(models.Employee, {
        through: 'employee_roles',
        as: 'employee',
        foreignKey: 'RoleID',
        onDelete: 'cascade'
      });

      Role.belongsTo(models.Business);
    };
    return Role;
  };
  