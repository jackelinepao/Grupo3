import { alquiler_model } from '../modelos/Alquiler';
import { color_model } from '../modelos/Color';
import { departamento_model } from '../modelos/Departamento';
import { distrito_model } from '../modelos/Distrito';
import { dueniovehiculo_model } from '../modelos/Dueniovehiculo';
import { imagen_model } from '../modelos/Imagen';
import { marca_model } from '../modelos/Marca';
import { modelo_model } from '../modelos/Modelo';
import { persona_model } from './../modelos/Persona';
import { provincia_model } from '../modelos/Provincia';
import { tusuario_model } from './../modelos/Tipousuario';
import { tvehiculo_model } from './../modelos/Tipovehiculo';
import { usuario_model } from './../modelos/Usuario';
import { valoracion_model } from '../modelos/Valoracion';
import { vehiculo_model } from '../modelos/Vehiculo';
const Sequelize = require("sequelize");

export const conexion = new Sequelize(
  'alquilerautos', // DATABASE NAME
  'root',  // USERNAME
  'root',  // PASSWORD
  {
  host: 'localhost', // SERVER NAME: remotemysql.com:3306
  dialect: 'mysql',
  timezone: '-05:00',
  // configuración para lectura de fechas en la base de datos
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  }
});
// Otra forma de conectarse por Sequelize
// export const conexion2 = new Sequelize('mysql://root:root@localhost:3306/aulas')

export const Alquiler:any = alquiler_model(conexion);
export const Color:any = color_model(conexion);
export const Departamento:any = departamento_model( conexion);
export const Distrito:any = distrito_model(conexion);
export const Dueniovehiculo:any = dueniovehiculo_model(conexion);
export const Imagenvehiculo:any = imagen_model(conexion);
export const Marca:any = marca_model(conexion);
export const Modelo:any = modelo_model(conexion);
export const Persona:any = persona_model(conexion);
export const Provincia:any = provincia_model(conexion);
export const Tusuario:any = tusuario_model(conexion);
export const Tipovehiculo:any = tvehiculo_model(conexion);
export const Usuario:any = usuario_model(conexion);
export const Valoracion:any = valoracion_model(conexion);
export const Vehiculo:any = vehiculo_model(conexion);

Tusuario.hasMany( Usuario, { foreignKey: "tusu_id" });
Usuario.belongsTo(Tusuario, { foreignKey: "tusu_id" });








