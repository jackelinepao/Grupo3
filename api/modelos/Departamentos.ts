// MODELO departamento
import { DataTypes } from 'sequelize';

export let dpto_modelo = (sequelize: any) => {

  let dpto = sequelize.define('t_dpto', {
    dpto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    dpto_nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
  }, {
    tableName: 't_dpto',
    timestamps: true
  });

  return dpto;

}
