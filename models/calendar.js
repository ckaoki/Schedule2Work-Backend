module.exports = function(sequelize, DataTypes){
  var Date = sequelize.define("date",{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    full_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quarter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_of_week: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weekend: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Date;
}