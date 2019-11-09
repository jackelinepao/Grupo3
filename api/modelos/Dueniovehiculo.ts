import {Sequelize, Model} from 'sequelize';


export var  duenioVehiculo_model = (sequelize:Sequelize, type:any)=>{

    class duenioVehiculo_model extends Model {}

   

   duenioVehiculo_model.init ({
         dve_id:{

            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
       
           



        },
        {
            sequelize,
            modelName: 't_duenioVehiculo',
            timestamps:false

        
        

    });
    
    return duenioVehiculo_model;
}