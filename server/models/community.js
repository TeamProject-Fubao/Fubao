const community = function (Sequelize, Database) {
  return Sequelize.define(
    "community",
    {
      id: {
        type: Database.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Database.BIGINT,
        allowNull: true,
      },
      title: {
        type: Database.STRING(500),
        allowNull: false,
      },
      content: {
        type: Database.STRING(500),
        allowNull: true,
      },
      img: {
        type: Database.STRING(500),
        allowNull: true,
      },
      comment: {
        type: Database.STRING(50),
        allowNull: true,
      },
      faviorite_num: {
        type: Database.INTEGER,
        allowNull: true,
      },
      faviorite_id: {
        type: Database.INTEGER,
        allowNull: true,
      },
    },
    {
      tablename: "community",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = community;
