// ENV Variables
require("dotenv").config();

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// DB
import db from "../config/db";

// Routes
import router from "./router";

app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();

    console.log(`Aplicação está funcionando na porta: ${port}`);
});
