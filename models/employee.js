// Model for employee
module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
      EmployeeID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      LastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      Startdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      Email: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      MinHours: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      MaxHours: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Wage: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      CertExpDate: {
        type: DataTypes.DATEONLY
      },
      CertType: {
        type: DataTypes.TEXT
      },
      Password: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });

    Employee.associate = function(models) {  
    // one-to-many relationships
      Employee.belongsTo(models.Business);
  
    // many-to-many relationships 
      Employee.belongsToMany(models.Role, {
        through: 'employee_roles',
        as: 'role',
        foreignKey: 'employeeID',
        onDelete: 'cascade'
      });
      Employee.belongsToMany(models.Employee_Group, {
        through: 'employee_groups',
        as: 'employee_group',
        foreignKey: 'employeeID',
        onDelete: 'cascade'
      });
    }; 
 
  
    return Employee;
  };
  
  