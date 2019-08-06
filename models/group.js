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
    // one-to-many relationships
      Group.belongsTo(models.Business);
  }; 

  return Group;
};
