// Model for shift
module.exports = function(sequelize, DataTypes) {
  var Shift = sequelize.define("Shift", {
    ShiftID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    StartTime:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    EndTime:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClockInTime:{
      type: DataTypes.INTEGER,
    },
    ClockOutTime:{
      type: DataTypes.INTEGER,
    }

  });

  Shift.associate = function(models) { 
    Shift.belongsTo(models.Business);
    Shift.belongsTo(models.Employee);
    Shift.hasOne(models.Schedule);
      // many-to-many relationships 
    Shift.belongsToMany(models.Role, {
      through: 'shift_roles',
      as: 'Role',
      foreignKey: 'ShiftRoleID',
      onDelete: 'cascade'
    });
  }  

  return Shift;
};


