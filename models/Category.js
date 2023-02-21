const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
// below creates a new Sequelize model for Category
class Category extends Model {}

Category.init(
  {
    // define columns/fields on model/table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // links db connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
