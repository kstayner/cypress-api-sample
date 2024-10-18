'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PasswordRecovery extends Model {
    static associate(models) {
      PasswordRecovery.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }

  PasswordRecovery.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    used: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'PasswordRecovery',
    tableName: 'password_recoveries',
    timestamps: true,
    underscored: true
  });

  return PasswordRecovery;
};