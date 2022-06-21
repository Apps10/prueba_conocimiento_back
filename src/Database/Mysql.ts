import { Sequelize } from 'sequelize';
import { config } from "../config";

const {
  userDB,
  passDB,
  hostDB,
  dbname,
} = config;

const Database = new Sequelize(dbname,userDB,passDB,
{
  host: hostDB,
  dialect: 'mysql',
  logging: false
});

Database.authenticate().then(()=> {
  console.log("Connection has been stablised successfully.");
}).catch(err => {
  console.log("Unable to connect to the database" , err);
});


export default Database;
