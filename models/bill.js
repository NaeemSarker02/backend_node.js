'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bill.init({
    name: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER,
    Status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};