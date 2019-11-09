import { DataTypes} from 'sequelize';


export let  tusuario_model = (sequelize:any)=>{

   let tusuario = sequelize.define('Tipo_usuario',{
         tusu_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        tusu_desc:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        
        },{
          tableName: 'Tipo_usuario',
          timestamps: true
    });
    return tusuario;
}