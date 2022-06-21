import sequelize from "sequelize";
import Database from "../Database/Mysql";

const email = Database.define('email',{
    id:{
        type: sequelize.INTEGER,
        primaryKey:true
    },
    email:{
        type: sequelize.TEXT('tiny'),
        allowNull:false
    },
    personaId:{
        type: sequelize.INTEGER,
        allowNull:false

    }
},{
    timestamps:false
});

export default email;