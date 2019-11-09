// MODELO MODELO
import { DataTypes } from 'sequelize';

export let modelo_model = (sequelize: any) => {

  let modelo = sequelize.define('t_modelo', {
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
