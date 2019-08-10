// Model for employee
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("employee", {
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
        unique: true,
        allowNull: false,        
        validate: {
          len: {
              args: [6, 128],
              msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
              msg: "Email address must be valid"
          }
        }
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
        type: DataTypes.STRING,
        allowNull: false,
        len:[2, 10]
      }
    },
    );

    //generate a hash for password with bcrypt
    Employee.generateHash = function (Password) {
    return bcrypt.hashSync(Password, bcrypt.genSaltSync(8), null);
    };

    //check if password is valid
    Employee.prototype.validatePassword = function (Password) {
      return bcrypt.compareSync(Password, this.localPassword);
    };
  

    Employee.associate = function(models) {  
    // one-to-many relationships
      Employee.belongsTo(models.business);
      Employee.belongsTo(models.address);
  
    // many-to-many relationships  
      Employee.belongsToMany(models.role, {
        through: 'employee_roles',
        as: 'role',
        foreignKey: 'EmployeeID',
        onDelete: 'cascade'
      });
      Employee.belongsToMany(models.employee_group, {
        through: 'employee_groups',
        as: 'group',
        foreignKey: 'EmployeeID',
        onDelete: 'cascade'
      });
    };  
  
    return Employee;
  };
  
  