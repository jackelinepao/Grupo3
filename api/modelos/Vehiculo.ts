// MODELO VEHICULO
import { DataTypes } from 'sequelize';

export let vehiculo_model = (sequelize: any) => {

  let vehiculo = sequelize.define('t_vehiculo', {
    ve_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    ve_nrop: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ve_nroa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ve_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
        ve_fechrt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
        ve_prec: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
    },
        ve_fechvs: {
        type: DataTypes.DATE,
        allowNull: true,
    },
        ve_poliza: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
        ve_placa: {
        type: DataTypes.STRING(45),
        allowNull: true,
    }

  }, {
    tableName: 't_vehiculo',
    timestamps: true
  });

  return vehiculo;

}
