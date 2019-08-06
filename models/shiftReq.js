// Model for shiftReq
module.exports = function(sequelize, DataTypes) {
  var ShiftReq = sequelize.define("Shift_Req", {
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
    ShiftReq.belongsTo(models.Business);
    ShiftReq.hasMany(models.Schedule);
    }; 

  return ShiftReq;
};
