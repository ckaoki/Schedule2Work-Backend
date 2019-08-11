// Model for business
module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("business", {
    BusinessID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    BusinessName: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    PayPeriod: {
      type: DataTypes.ENUM('weekly', 'biweekly', 'semi-monthly','monthly'),
      allowNull: false
    },
    PayrollSystem: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

//In order to connect the tables associated with Business, I adding the following code(MH): uncommenting code from lines 24-32
// Business.associate = function(models){
//   Business.belongsToMany(models.employee,{
//     through: 'EmployeeID',
//     as: 'employee',
//     onDelete: 'cascade'
//   });
//   Business.belongsToMany(models.role,{
//     through: 'RoleID',
//     as: 'role',
//     onDelete: 'cascade'
//   });
//   Business.belongsToMany(models.group,{
//     through: 'GroupID',
//     as: 'group',
//     onDelete: 'cascade'
//   });
//   Business.belongsToMany(models.address,{
//     through: 'AddressID',
//     as: 'address',
//     onDelete: 'cascade'
//   });
//   //Business.hasOne(models.scheduleReq);
//   Business.belongsToMany(models.schedule,{
//     through: 'ScheduleID',
//     as: 'schedule',
//     onDelete: 'cascade'
//   });
//   Business.belongsToMany(models.shift,{
//     through: 'ShiftID',
//     as: 'shift',
//     onDelete: 'cascade'
//   });
// }

  return Business;
};


