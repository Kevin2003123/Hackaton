const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      position: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "user"
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      },
      isReception: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      },
      city:{
        type: DataTypes.STRING,
        allowNull: false,
        default: "Santo Domingo"

      },
      site:{
        type: DataTypes.STRING,
        allowNull: false,
        default: "este"
      },
    },
    {
      timestamps: false,
    }
  );
};