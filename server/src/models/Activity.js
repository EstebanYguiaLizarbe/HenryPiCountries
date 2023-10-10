const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'), //son strings
        allowNull: false
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull: false,
    }
  },
  { timestamps: false });
};