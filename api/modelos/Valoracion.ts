// MODELO valoracion
import { DataTypes } from 'sequelize';

export let valo_modelo = (sequelize: any) => {

  let valo = sequelize.define('t_valo', {
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
    tableName: 't_valo',
    timestamps: true
  });

  return valo;

}
