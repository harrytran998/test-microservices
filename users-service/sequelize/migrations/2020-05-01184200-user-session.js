module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() =>
      queryInterface.createTable(
        'user_sessions',
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
          },
          userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          expiresAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Date.now(),
          },
          updatedAt: {
            allowNull: true,
            type: DataTypes.DATE,
            defaultValue: Date.now(),
          },
          deletedAt: {
            allowNull: true,
            type: DataTypes.DATE,
            defaultValue: Date.now(),
          },
        },
        {
          charset: 'utf8',
          timestamps: true,
        },
      ),
    )
  },
  down: queryInterface => queryInterface.dropTable('user_sessions'),
}
