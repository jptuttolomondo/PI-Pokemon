const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4,  primaryKey: true,  },
    //idPoke: { type: DataTypes.INTEGER, autoIncrement: true,  },
    name: { type: DataTypes.STRING,allowNull: false, },
    life: { type: DataTypes.INTEGER,allowNull: false, },
    strenght: { type: DataTypes.INTEGER,allowNull: false, },
    fender: { type: DataTypes.INTEGER,allowNull: false, },
    speed:{ type: DataTypes.INTEGER,allowNull: false, },
    height: { type: DataTypes.DECIMAL,allowNull: false, },
    wheight: { type: DataTypes.DECIMAL,allowNull: false, },
    sprites: {type:DataTypes.STRING,allowNull:false} ,
    
  }, {timeStamps:false},);
};
