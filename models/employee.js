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
        type: DataTypes.STRING,
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
      },
      //the following fields are added to the table for the purpose of generating data with faker
      street: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      city: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      Zipcode: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      wage: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      BusinessName: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      PayPeriod: {
        type: DataTypes.ENUM('weekly', 'biweekly', 'semi-monthly','monthly'),
        allowNull: false
      },
     // Only inexperenced skll set is getting created by Faker
      Skill_level: {
        type: DataTypes.ENUM('inexperienced','novice','competent'),
        // defaultValue: "inexperienced"
        allowNull: false
      },
      
      

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
  
  
  