# API RestFul com TS e Express

## Iniciando o projeto

```bash
npm init
tsc --init
```

### Dependências principais

```bash
npm install config dotenv express express-validator mongoose morgan winston
```

### Dependências de desencolvimento

```bash
npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev
```

### Criar o script em package.json:

```json
"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
```

## Integrando o express

### Criar o arquivo config/default.ts com o conteúdo:

```ts
export default {
    port: 3000,
};
```

### Inserir dentro de src/app.ts:

```ts
import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
    console.log(`Aplicação está funcionando na porta: ${port}`);
});
```

## Criando rota de teste

### Criar o arquivo src/router.ts com o conteúdo:

```ts
import { Router, Request, Response } from "express";

const router = Router();

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!");
});
```

### Importar em src/app.ts a rota:

```ts
// Routes
import router from "./router";

app.use("/api/", router);
```

## Configurando banco de dados mongodb

### Adicionar a linha no config/default.ts

```ts
dbUri: "mongodb://mongodb:ee6Caiche3ti9ko@localhost:27017/curso_typescript",
```

### Criar o arquivo config/db.ts com o conteúdo:

```ts
import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        console.log("Conectou ao banco de dados!");
    } catch (error) {
        console.log("Não foi possível conectar!");
        console.log(`Erro: ${error}`);
    }
}

export default connect;
```

### Importar em src/app.ts:

```ts
// DB
import db from "../config/db";
```

### Ajustar a inicialização da aplicação para aguardar a conexão do db:

```ts
app.listen(port, async () => {
    await db();

    console.log(`Aplicação está funcionando na porta: ${port}`);
});
```

## Criando variáveis de ambiente

### Criar o arquivo .env com o conteúdo:

```bash
DB_USER=mongodb
DB_PASS=ee6Caiche3ti9ko
```

### Criar o arquivo .gitignore para não versionar alguns arquivos:

```bash
.env
node_modules
```

### Ajustar o arquivo config/default.ts para pegar as variáveis:

```ts
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

export default {
    port: 3000,
    dbUri: `mongodb://${dbUser}:${dbPassword}@localhost:27017/curso_typescript`,
};
```

### Adicionar na primeira linha do src/app.ts:

```ts
// ENV Variables
require("dotenv").config();
```
