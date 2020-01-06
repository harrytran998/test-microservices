module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'listings',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        description: {
          allowNull: false,
          type: DataTypes.TEXT,
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
      },
    )
  },
  down: queryInterface => queryInterface.dropTable('listings'),
}
