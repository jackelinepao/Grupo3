import {Sequelize, Model} from 'sequelize';


export var  tipoUsuario_model = (sequelize:Sequelize, type:any)=>{

    class tipoUsuario_model extends Model {}

   

   tipoUsuario_model.init ({
         tusu_id:{

            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        tusu_desc:{
            type:type.STRING(45)
        },
        



        },
        {
            sequelize,
            modelName: 't_usuario',
            timestamps:false

        
        

    });
    
    return tipoUsuario_model;
  
}