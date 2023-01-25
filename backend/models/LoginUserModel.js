import { Sequelize } from "sequelize";
import db from "../config/Banco.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('login_users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Users;