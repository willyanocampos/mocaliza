const { DataTypes } = require('sequelize');
const { Database } = require('../configs/sequelize');

const Marca = Database.getInstance().sequelize.define('Marca', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = { Marca };
