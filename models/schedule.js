// Model for Schedule
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("schedule", {
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
    Schedule.belongsTo(models.business);
    Schedule.belongsTo(models.schedule_req);

//schedule has a 1-N relationship with the shift table. Recommend adding the following code. MH
  //Schedule.hasMany(models.shift);

  }

  return Schedule;
};


