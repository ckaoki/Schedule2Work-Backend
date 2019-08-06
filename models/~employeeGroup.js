// Model for employee group join
module.exports = function(sequelize, DataTypes) {
  var EmployeeGroup = sequelize.define("Employee_Group", {
    GroupID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    GroupName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  EmployeeGroup.associate = function(models) {
    EmployeeGroup.belongsTo(models.Business);
  };
  
  return EmployeeGroup;
};
