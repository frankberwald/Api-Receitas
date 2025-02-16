require('dotenv').config()

import "reflect-metadata"
import express from "express"
import cors from "cors"
import { AppDataSource } from "./data-source"

const app = express()

app.use(cors())
app.use(express.json())

AppDataSource.initialize().then(async () => {
    AppDataSource.initialize().then(() => {
        app.listen(3000, () => {
            console.log("O servidor está rodando em http://localhost:3000")
        })
    }).catch(error => console.log(error))



})