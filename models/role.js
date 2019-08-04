// Model for role
module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      role: {
        type: DataTypes.ENUM('grill','fry','counter','trainer','supervisor','manager','owner'),
      }
    });
  
    Role.associate = function(models) {
      Role.belongsToMany(models.Employee, {
        through: "Employee_role",
        // as: 'employee', TODO: delete if not needed
        foreignKey: 'employee_id',
        onDelete: "cascade"
      });
    };  
  
    return Role;
  };
  
  
  