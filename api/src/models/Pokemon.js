const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('pokemon', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4,  primaryKey: true,  },
    name: { type: DataTypes.STRING,allowNull: false, },
    hp: { type: DataTypes.INTEGER,allowNull: true, },
    attack: { type: DataTypes.INTEGER,allowNull: true, },
    defense: { type: DataTypes.INTEGER,allowNull: true, },
    speed:{ type: DataTypes.INTEGER,allowNull: true, },
    height: { type: DataTypes.DECIMAL,allowNull: true, },
    weight: { type: DataTypes.DECIMAL,allowNull: true, },
    sprites: {type:DataTypes.STRING,allowNull:true} ,
    
  }, {timeStamps:false},);
};
