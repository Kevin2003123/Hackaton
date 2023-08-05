const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dish",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

      },

      price:{
        type: DataTypes.DECIMAL,
        allowNull: false,
      }

     
    },
    {
      timestamps: false,
    }
  );
};