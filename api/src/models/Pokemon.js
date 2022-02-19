const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4,  primaryKey: true,  },
    //idPoke: { type: DataTypes.INTEGER, autoIncrement: true,  },
    name: { type: DataTypes.STRING,allowNull: false, },
    life: { type: DataTypes.INTEGER,allowNull: true, },
    strenght: { type: DataTypes.INTEGER,allowNull: true, },
    fender: { type: DataTypes.INTEGER,allowNull: true, },
    speed:{ type: DataTypes.INTEGER,allowNull: true, },
    height: { type: DataTypes.DECIMAL,allowNull: true, },
    wheight: { type: DataTypes.DECIMAL,allowNull: true, },
    sprites: {type:DataTypes.STRING,allowNull:true} ,
    
  }, {timeStamps:false},);
};
