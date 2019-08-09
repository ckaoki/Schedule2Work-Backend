// Model for role
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define("address", {
    AddressID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  
  Address.associate = function(models){
    Address.belongsTo(models.business);
  }  

  return Address;
};
