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

//In order to connect the tables associated with Business, I adding the following code(MH):
// Business.associate = function(models){
  // Business.belongsToMany(models.employee);
  // Business.belongsToMany(models.role);
  // Business.belongsToMany(models.group);
  // Business.belongsToMany(models.address);
  // Business.hasOne(models.scheduleReq);
  // Business.belongsToMany(models.schedule);
  // Business.belongsToMany(models.shift);
// }

  return Business;
};


