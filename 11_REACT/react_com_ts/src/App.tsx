import React, { createContext } from "react";

// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructing, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 10 - utilizando contexto
import Context from "./components/Context";

// 8 - Type
type textOrNull = string | null;
type fixed = "isso" | "Ou" | "Aquilo";

// 9 - Context
interface IAppContext {
    language: string;
    framework: string;
    projects: number;
}
export const AppContext = createContext<IAppContext | null>(null);

function App() {
    // 1 - variáveis
    const name: string = "Diego";
    const age: number = 31;
    const isWorking: boolean = true;
    // const isWorking: boolean = false;

    // 2 - Funções
    const userGreeting = (name: string): string => {
        return `Olá, ${name}`;
    };

    // 8 - Type
    const myText: textOrNull = "Tem algum texto aqui";
    let mySecondText: textOrNull = null;
    // mySecondText = "opa";
    // const testandoFixed: fixed = "Algum texto";
    const testandoFixed: fixed = "Aquilo";

    // 9 - Context
    const contextValue: IAppContext = {
        language: "JavaScript",
        framework: "Express",
        projects: 5,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div className="App">
                <h1>TypeScript com TS</h1>
                <h2>Nome: {name}</h2>
                <p>Idade: {age}</p>
                {isWorking && (
                    <div>
                        <p>Está trabalhando!</p>
                    </div>
                )}
                <h3>{userGreeting(name)}</h3>
                {/* <h3>{userGreeting(age)}</h3> */}
                <FirstComponent />
                <SecondComponent name="Segundo" />
                <Destructing
                    title="Primeiro post"
                    content="Algum conteúdo"
                    commentsQty={10}
                    tags={["ts", "js"]}
                    category={Category.TS}
                />
                <Destructing
                    title="Segundo post"
                    content="Outro conteúdo"
                    commentsQty={5}
                    tags={["python"]}
                    category={Category.P}
                />
                <State />
                {myText && <p>Tem texto na variável.</p>}
                {mySecondText && <p>Tem texto na variável.</p>}
                <Context />
            </div>
        </AppContext.Provider>
    );
}

export default App;
