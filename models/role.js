// Model for role
module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      role: {
        // type: DataTypes.ENUM('grill','fry','counter','trainer','supervisor','manager','owner')
        type: DataTypes.STRING,
        unique: true
      }
    });
  
    Role.associate = function(models) {
      Role.belongsToMany(models.Employee, {
        through: "employee_roles",
        as: 'employees',
        foreignKey: 'role_id',
        onDelete: "cascade"
      });
    };  
  
    return Role;
  };
  
  
  