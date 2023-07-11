const user = function (Sequelize, Database) {
  return Sequelize.define(
    "user",
    {
      id: {
        type: Database.BIGINT,
        allowNull: true,
        primaryKey: true,
        autoIncreament: true,
      },
      password: {
        type: Database.STRING(255),
        allowNull: true,
      },
      username: {
        type: Database.STRING(20),
        allowNull: true,
      },
      nickname: {
        type: Database.STRING(30),
        allowNull: true,
      },
      email: {
        type: Database.STRING(50),
        allowNull: true,
      },
    },
    {
      tablename: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = user;
