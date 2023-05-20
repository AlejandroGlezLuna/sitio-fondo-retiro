import { Sequelize } from "sequelize";

const db = new Sequelize("database_clientes", "root", "password",{
    host: "localhost",
    dialect: "mysql"
});

export default db