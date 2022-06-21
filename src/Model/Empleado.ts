import sequelize from "sequelize";
import Database from "../Database/Mysql";

const Empleados = Database.define('empleados',{
    id:{
        type: sequelize.INTEGER,
        primaryKey:true
    },
    nombres:{
        type: sequelize.TEXT('tiny'),
        allowNull:false
    },
    apellidos:{
        type: sequelize.TEXT('tiny'),
        allowNull:false
    },
    tipoIdentificacion:{
        type: sequelize.ENUM('nit','cc'),
        allowNull:false
    },
    identificacion:{
        type: sequelize.STRING(20),
        allowNull:false,
        unique:true
    },
    fecha_ingreso:{
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull:false,
    }
},{
    timestamps:false
});

export default Empleados;