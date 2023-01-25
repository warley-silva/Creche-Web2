import {Sequelize} from "sequelize";
import db from "../config/Banco.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();