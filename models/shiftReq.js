// Model for shiftReq
module.exports = function(sequelize, DataTypes) {
  var ShiftReq = sequelize.define("shift_req", {
    // BusinessID: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   references: {
    //     model: 'businesses',
    //     key: 'BusinessID'
    //   }
    // },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ChildRules: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  
  ShiftReq.associate = function(models) {  
    ShiftReq.belongsTo(models.business);
    ShiftReq.hasMany(models.schedule);
    }; 

  return ShiftReq;
};
