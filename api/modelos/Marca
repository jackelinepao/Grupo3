// MODELO MARCA
import { DataTypes } from 'sequelize';

export let marca_model = (sequelize: any) => {

  let marca = sequelize.define('t_marca', {
    marca_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    marca_nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
    
  }, {
    tableName: 't_marca',
    timestamps: true
  });

  return marca;

}
