module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() =>
      queryInterface.createTable(
        'users',
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.literal('uuid_generate_v4()'),
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
          },
          // Ignore hash password => Demo!
          password: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Date.now(),
          },
          updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          deleted_at: {
            allowNull: true,
            type: DataTypes.DATE,
          },
        },
        {
          charset: 'utf8',
          timestamps: true,
        },
      ),
    )
  },
  down: queryInterface => queryInterface.dropTable('users'),
}
