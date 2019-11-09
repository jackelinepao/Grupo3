import {Sequelize, Model} from 'sequelize';


export var  tipoVehiculo_model = (sequelize:Sequelize, type:any)=>{

    class tipoVehiculo_model extends Model {}

   

   tipoVehiculo_model.init ({
         tve_id:{

            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        tve_nom:{
            type:type.STRING(45)
        },
      


        },
        {
            sequelize,
            modelName: 't_vehiculo',
            timestamps:false

        
        

    });
    
    return tipoVehiculo_model;
  
}