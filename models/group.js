// Model for group
module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
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

  Group.associate = function(models) {  
      Group.belongsTo(models.Business);
      Group.belongsToMany(models.Employee_Group, {
        through: 'employee_groups',
        as: 'Employee',
        foreignKey: 'GroupID',
        onDelete: 'cascade'
      });
  }; 

  return Group;
};
