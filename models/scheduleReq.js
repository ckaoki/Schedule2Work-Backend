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
// scheduleReq has a 1-1 relationship with business. Recommend changing the code to (MH):
//  ScheduleReq.hasOne(models.business);
    ScheduleReq.belongsTo(models.business);
// scheduleReq has a 1-N relationship with the scheudle table. Recommend changing the code to (MH):
    //ScheduleReq.hasMany(models.schedule)

  }
  return ScheduleReq;
};


