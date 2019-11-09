// MODELO provincia
import { DataTypes } from 'sequelize';

export let prov_modelo = (sequelize: any) => {

  let prov = sequelize.define('t_prov', {
    prov_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    prov_nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
  }, {
    tableName: 't_prov',
    timestamps: true
  });

  return prov;

}
