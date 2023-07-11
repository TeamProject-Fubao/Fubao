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
        allowNull: false,
      },
      title: {
        type: Database.STRING(500),
        allowNull: true,
      },
      content: {
        type: Database.STRING(500),
        allowNull: false,
      },
      img: {
        type: Database.STRING(500),
        allowNull: false,
      },
      comment: {
        type: Database.STRING(50),
        allowNull: false,
      },
      faviorite_num: {
        type: Database.INTEGER,
        allowNull: false,
      },
      faviorite_id: {
        type: Database.INTEGER,
        allowNull: false,
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
