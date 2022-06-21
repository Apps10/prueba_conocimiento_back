import sequelize from "sequelize";
import Database  from "../Database/Mysql";

const telefono  = Database.define('telefonos',{
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
    },
    Tipo:{
        type: sequelize.ENUM('tel','cel'),
        allowNull:false
    },
    numero:{
        type: sequelize.STRING(20),
        allowNull:false,
        unique:true
    },
    indicativo:{
        type: sequelize.STRING(20),
        allowNull:true
    },
    personaId:{
        type: sequelize.INTEGER,
        allowNull:false
    }
},{
    timestamps:false
});

export default telefono;