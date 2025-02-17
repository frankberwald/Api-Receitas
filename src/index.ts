require('dotenv').config()

import "reflect-metadata"
import express from "express"
import cors from "cors"
import { connectDatabase } from "./data-source"

const app = express()

app.use(cors())
app.use(express.json())

connectDatabase().then(() => {
    app.listen(3000, () => {
        console.log("🚀 Servidor rodando na porta 3000");
    });
});

