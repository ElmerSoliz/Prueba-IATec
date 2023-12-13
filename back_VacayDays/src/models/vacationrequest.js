'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VacationRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      VacationRequest.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user' // nombre del alias
      });
    }
  }
  VacationRequest.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    totalDays: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VacationRequest',
  });
  return VacationRequest;
};