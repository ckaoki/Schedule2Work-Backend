// Model for business
module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
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

  return Business;
};


