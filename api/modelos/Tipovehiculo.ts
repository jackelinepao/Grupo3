import { DataTypes } from 'sequelize';


export let tvehiculo_model = (sequelize: any) => {

    let tvehiculo = sequelize.define('t_tipovehiculo', 
    {
        tve_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tve_nom: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        tableName: 't_tipovehiculo',
        timesstamps: true

    }
    );

    return tvehiculo;

}