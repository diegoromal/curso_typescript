// 1 - iniciando o projeto
// console.log("Express + TS!");

// 2 - init express
import express, { NextFunction, Request, Response } from "express";

const app = express();

// 3 - Rota com POST
app.use(express.json());

// 11 - Middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

app.use(showPath);

app.get("/", (req, res) => {
    return res.send("Hello Express");
});

app.post("/api/product", (req, res) => {
    console.log(req.body);
    return res.send("Produto adicionado!");
});

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

// 5 - Interfaces do Express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando interfaces");
});

// 6 - JSON como respostas
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "Blue",
        sizes: ["P", "M", "G"],
    });
});

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

// 8 - Rotas mais complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);
    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// 9 - Router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuário com o id: ${req.params.id}`);

    return res.send("O usuário foi encontrado!");
}
app.get("/api/user/:id", getUser);

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

// 12 - Request e Response generics
app.get(
    "/api/usr/:id/details/:name",
    (
        req: Request<{ id: string; name: string }>,
        res: Response<{ status: boolean }>
    ) => {
        console.log(`ID: ${req.params.id}`);
        console.log(`Name: ${req.params.name}`);

        return res.json({ status: true });
    }
);

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
