const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
        }
    },
    updatedAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
        }
    }
  }, {
    freezeTableName: true
  });
}
