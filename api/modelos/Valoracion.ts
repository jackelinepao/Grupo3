// MODELO valoracion
import { DataTypes } from 'sequelize';

export let valoracion_modelo = (sequelize: any) => {

  let valoracion = sequelize.define('t_valoracion', {
    valo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    valo_coment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valo_punt: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
  }, {
    tableName: 't_valoracion',
    timestamps: true
  });

  return valoracion;

}
