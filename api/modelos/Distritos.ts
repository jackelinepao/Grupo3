// MODELO distrito
import { DataTypes } from 'sequelize';

export let dist_model = (sequelize: any) => {

  let dist = sequelize.define('t_distrito', {
    dist_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    dist_nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
  }, {
    tableName: 't_distrito',
    timestamps: true
  });

  return dist;

}
