const { DataTypes, Sequelize } = require('sequelize');
const sequelize  = require('../config/config.js');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    loginuser: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: false,
});

module.exports = User;