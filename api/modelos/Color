// MODELO COLOR
import { DataTypes } from 'sequelize';

export let color_model = (sequelize: any) => {

  let color = sequelize.define('t_color', {
    color_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    color_nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
    
  }, {
    tableName: 't_color',
    timestamps: true
  });

  return color;

}
