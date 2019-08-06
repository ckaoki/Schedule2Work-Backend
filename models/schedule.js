// Model for Schedule
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    ScheduleID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    StartDate:{
      type: DataTypes.DATE,
      allowNull:false
    },
    EndDate:{
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Schedule.associate = function(models){
    Schedule.belongsTo(models.Business);
    Schedule.belongsTo(models.Schedule_Req);
  }

  return Schedule;
};


