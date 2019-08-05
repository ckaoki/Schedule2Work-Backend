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
        allowNull: true
      }, 
      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      startdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      minimum_hours: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      maximum_hours: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      food_certification_expiration_date: {
        type: DataTypes.DATEONLY
      }
    });
  
    Employee.associate = function(models) {
      Employee.belongsToMany(models.Role, {
        through: 'employee_roles',
        as: 'roles',
        foreignKey: 'employee_id',
        onDelete: 'cascade'
      });
    };  
  
    return Employee;
  };
  
  
  