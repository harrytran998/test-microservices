import { DataTypes, Model } from 'sequelize'

import sequelize from './connection'

export class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    defaultScope: {
      rawAttributes: { exclude: ['password'] },
    },
    modelName: 'users',
    sequelize,
  },
)

export class UserSession extends Model {}
UserSession.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      allowNull: false,
      references: {
        key: 'id',
        model: 'users',
      },
      type: DataTypes.UUID,
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    modelName: 'user_sessions',
    paranoid: false,
    sequelize,
    updatedAt: false,
  },
)
