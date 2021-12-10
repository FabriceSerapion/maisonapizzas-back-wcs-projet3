module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'role',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      authorized_routes: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: '(DC2Type:array)',
      },
    },
    {
      sequelize,
      tableName: 'role',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
      ],
    },
  );
};
