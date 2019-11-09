const Sequelize = require("sequelize");

export const sequelize = new Sequelize(
    // 'LDv0pN4uWQ',//database name
    // 'LDv0pN4uWQ',//username
    // 'JGnf7mu1Ya', //password
    'AlquilerAutos',
    'root',
    'root',
    {
    //host: 'remotemysql.com',//server name: remotemysql.com:3306
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    dialectOption: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }
});
//otra forma de conectarse
//export const conexion2 = new Sequelize('mysql://root:root@localhost:3306/aulas)



