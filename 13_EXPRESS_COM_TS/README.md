## Express com Typescript

### Inicialização

-   Para iniciar um projeto com Express e TypeScript precisamos criar o projeto com npm init

    ```jsx
    npm init
    ```

-   E também iniciar o TS com npx tsc –init

    ```jsx
    npx tsc –init
    ```

-   Após estes dois passos vamos instalar as dependências, algumas são de de dev (como os tipos) e outras não (como o Express)

    ```jsx
    // dev
    npm install @types/express @types/node ts-node-dev typescript --save-dev
    // prod
    npm install express
    ```

-   E por fim criamos um script e iniciamos a aplicação, no arquivo package.json:

```jsx
"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
```

-   Para rodar:

```jsx
npm run dev
```

### Utilizando o Express

-   Para utilizar o express vamos importar o pacote
-   E criar ativá-lo em uma nova variável, geralmente chamada de app
-   Podemos criar uma rota que retorna uma mensagem
-   Definir uma porta para a aplicação
-   E verificar o resultado no navegador

```jsx
// 2 - init express
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());
```

### Roteamento

-   Podemos utilizar qualquer verbo HTTP nas rotas do Express
-   Vamos criar uma que funciona a base de POST
-   Para isso precisamos trafegar dados em JSON, podemos fazer isso ativando um middleware
-   Iremos realizar os testes com o Postman

```jsx
// 3 - Rota com POST
app.post("/api/product", (req, res) => {
    console.log(req.body);
    return res.send("Produto adicionado!");
});
```

### Rota para qualquer verbo

-   Utilizando o método all, podemos criar uma rota que aceita qualquer verbo
-   É interessante para quando um endpoint precisa realizar várias funções
-   Podemos criar um tratamento para entregar a resposta

```jsx
// 4 - Rota para qualquer verbo
app.all("/api/product/check", (req, res) => {
    // req.method == Verbo HTTP
    if (req.method === "POST") {
        return res.send("Inseriu algum registro!");
    } else if (req.method === "GET") {
        return res.send("Leu algum registro!");
    } else {
        res.send("Não é possível realizar esta operação!");
    }
});
```

### Interfaces do Express

-   Para alinhar nossa aplicação ao TypeScript vamos adicionar novos tipos
-   As request podem utilizar o tipo Request
-   E as respostas o Response

```jsx
// 5 - Interfaces do Express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando interfaces");
});
```

### JSON como respostas

-   Na maioria das vezes enviamos JSON para endpoints de API
-   Para fazer isso com Express é facil!
-   Basta enviar o JSON no método json de response

```jsx
// 6 - JSON como respostas
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "Blue",
        sizes: ["P", "M", "G"],
    });
});
```

### Router parameters

-   Podemos pegar parâmetros de rotas com Express
-   Vamos utilizar req.params
-   A rota a ser criada precisa ser dinâmica
-   Ou seja, os parâmetros que estamos querendo receber precisam estar no padrão: :id

```jsx
// 7 - Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params);

    const id = req.params.id;

    if (id === "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 10,
        };

        return res.json(product);
    } else {
        return res.send("Produto não encontrado");
    }
});
```

### Rotas mais complexas

-   Podemos ter rotas com mais de um parâmetro
-   Todos os dados continuam em req.params
-   O padrão é: /algo/:param1/outracoisa/:param2
-   Teremos então: param1 e param2 em req

```jsx
// 8 - Rotas mais complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);
    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});
```

### Router handler

-   Router handler é um recurso muito interessante para o Express
-   Basicamente retiramos a função anônima de uma rota e externalizamos em uma função
-   Podemos reaproveitar essa função, ou estrutura nossa aplicação desta maneira

```jsx
// 9 - Router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuário com o id: ${req.params.id}`);

    return res.send("O usuário foi encontrado!");
}
app.get("/api/user/:id", getUser);
```

### Middleware

-   Middleware é um recurso para executar uma função entre a execução de uma rota, por exemplo
-   O nosso app.use de json é um middleware
-   Podemos utilizar middleware para validações, por exemplo

```jsx
// 10 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
        console.log("Pode seguir!");
        next();
    } else {
        console.log("Acesso restrito");
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json("Bem-vindo à área administrativa!");
});
```

### Middleware para todas as rotas

-   Para criar um middleware que é executado em todas as rotas vamos utilizar o método use
-   Criamos uma função e atrelamos ao método
-   Desta maneira todas as rotas terão ação do nosso middleware

```jsx
// 11 - Middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

app.use(showPath);
```

### Request e Response generics

-   Podemos estabelecer os argumentos que vem pelo request e vão pela response
-   Para isso vamos utilizar os Generics de Response e Request
-   Que são as Interfaces disponibilizadas pelo Express

```jsx
// 12 - Request e Response generics
app.get(
    "/api/usr/:id/details/:name",
    (
        req: Request<{ id: string, name: string }>,
        res: Response<{ status: boolean }>
    ) => {
        console.log(`ID: ${req.params.id}`);
        console.log(`Name: ${req.params.name}`);

        return res.json({ status: true });
    }
);
```

### Tratando erros

-   Para tratar possíveis erros utilizamos blocos try catch
-   Desta maneira podemos detectar algum problema e retornar uma resposta para o usuário
-   Ou até mesmo criar um log no sistema

```jsx
// 13 - Tratando erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
        // a nossa lógica
        throw new Error("Algo deu errado");
    } catch (error: any) {
        res.status(500).json({ msg: error.message });
    }
});

app.listen(3000, () => {
    console.log("Aplicação de TS + Express funcionando!");
});
```
