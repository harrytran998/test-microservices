module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'listings',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        description: {
          allowNull: false,
          type: DataTypes.TEXT,
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
    )
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('listings')
  },
}
