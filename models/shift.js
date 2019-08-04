// Model for shift
module.exports = function(sequelize, DataTypes) {
  var Shift = sequelize.define("Shift", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    begin_time:{
      type: DataTypes.INTEGER,
      allowNull:fale
    },
    end_time:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monday:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    tuesday:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    wednesday:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    thursday:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    friday:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    saturday:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    sunday:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
  });

  // TODO: associate with schedule
  // Shift.associate = function(models) {
  //   Shift.belongsToMany(models.Employee, {
  //     through: "employee_roles",
  //     as: 'employees',
  //     foreignKey: 'role_id',
  //     onDelete: "cascade"
  //   });
  // };  

  return Shift;
};


