// MODELO MODELO
import { DataTypes } from 'sequelize';

export let nodelo_model = (sequelize: any) => {

  let nodelo = sequelize.define('t_nodelo', {
    mod_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    mod_nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
    
  }, {
    tableName: 't_modelo',
    timestamps: true
  });

  return modelo;

}
