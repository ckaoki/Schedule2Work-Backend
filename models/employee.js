// Model for employee
module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      startdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      minimum_hours: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      maximum_hours: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      food_certification_expiration_date: {
        type: DataTypes.DATEONLY
      }
    });
  
    Employee.associate = function(models) {
      Employee.belongsToMany(models.Role, {
        through: "Employee_role",
        // as: 'role', TODO: delete if not needed
        foreignKey: 'role_id',
        onDelete: "cascade"
      });
    };  
  
    return Employee;
  };
  
  
  