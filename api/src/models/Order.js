const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date:{
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },

      charged: {
        type: DataTypes.DECIMAL,
        allowNull: false,
       
      },
      status:{
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending"
      }
     
    },
    {
      timestamps: false,
    }
  );
};