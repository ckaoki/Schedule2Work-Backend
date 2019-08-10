// Model for group
module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("group", {
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
      Group.belongsTo(models.business);
      Group.belongsToMany(models.employee_group, {
        through: 'employee_groups',
        as: 'Employee',
        foreignKey: 'GroupID',
        onDelete: 'cascade'
      });

  }; 

  return Group;
};
