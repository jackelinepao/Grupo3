const Sequelize = require("sequelize");

import { usuario_model } from '../modelos/Usuario'
import { alquiler_model } from '../modelos/Alquiler';
import { persona_model } from '../modelos/Persona';

export const sequelize = new Sequelize(
    // 'LDv0pN4uWQ',//database name
    // 'LDv0pN4uWQ',//username
    // 'JGnf7mu1Ya', //password
    'alquilerAutos',
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
export const Usuario = usuario_model(sequelize);
export const Alquiler = alquiler_model(sequelize);
export const Persona = persona_model(sequelize);

Persona.hasMany(Usuario, {foreignKey: "per_id"}),
Usuario.belongsTo(Persona, {foreignKey: "per_id"})

Usuario.hasMany(Alquiler, {foreignKey: "usu_id"}),
Alquiler.belongsTo(Usuario, {foreignKey: "usu_id"})