require('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: process.env.NODE_ENV === 'development' ? true : false ,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    subscribers: [],
})
