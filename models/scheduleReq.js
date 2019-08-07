// Model for shift
module.exports = function(sequelize, DataTypes) {
  var ScheduleReq = sequelize.define("schedule_req", {
    ScheduleReqID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    ChildRules:{
      type: DataTypes.TEXT,
    }
  });
  
  ScheduleReq.associate = function(models) {
    ScheduleReq.belongsTo(models.business);
  }
  return ScheduleReq;
};


