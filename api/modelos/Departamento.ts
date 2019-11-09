// MODELO departamento
import { DataTypes } from 'sequelize';

export let departamento_model = (sequelize: any) => {

  let dpto = sequelize.define('t_departamento', {
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
    tableName: 't_departamento',
    timestamps: true
  });

  return dpto;

}
