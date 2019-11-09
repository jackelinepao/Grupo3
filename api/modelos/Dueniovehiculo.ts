import { DataTypes } from 'sequelize';


export let  dueniovehiculo_model = (sequelize:any)=>{    

    let dvehi = sequelize.define('t_dueniovehiculo',
    {        
              dve_id:{
                 type:type.INTEGER,
                 primaryKey:true,
                 autoIncrement: true,
                 allowNull:false
             },        
             },
             {
                 tableName: 't_dueniovehiculo',
                 timestamp: true
             });
              
    
    return dvehi;
}