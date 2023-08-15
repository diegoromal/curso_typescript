# curso_typescript

## Instalação

-   Para instalar o typescript é usado o npm
-   Pra instalar de forma global (pra todo o SO), usamos a flag -g:
    ```bash
        sudo npm install -g typescript
    ```
-   Com isso podemos executar/compilar TS em qualquer local da máquina, com o comando tsc, para vermos a versão:
    ```bash
        tsc -v
    ```

## Fundamentos do typescript

-   Principal função é determinar tipos para os dados
-   Usado para garantir a qualidade do código
-   Nos ajuda na hora do desenvolvimento, pois precisamos definir corretamente o tipo das variáveis, dos retornos das funções, das manipulação dos dados (Reforça a questão de qualidade e segurança do código)
-   É como se tivéssemos um "parceiro" nos orientando sempre a corrigir os erros, pois ele não compila enquanto estiver errado
-   O software fica melhor programado, e é este o principal intuito do TS

### Tipos primitivos

-   number, string, boolean (serve para números, textos e booleanos)
-   Todos estes são inseridos no códigos com letras mínusculas

#### Conhecendo o number

-   Garante que o tipo de dado seja um número
-   Pode ser trocado por outro número
-   No ts/js não existe float, tudo é number
-   Possibilita o uso de métodos de números

#### Conhecendo o string

-   Garante que o tipo de dado seja texto
-   Pode ser trocado por outro texto
-   Possibilita o uso de métodos de texto

#### Conhecendo o boolean

-   Garante que o tipo de dado seja boolean (true ou false)
-   Pode ser trocado por outro boolean

### TS e a aplicação

-   Programar com TS é como um pair programming
-   Sempre "alguém" vai avisar se algo é feito errado
-   Depois da compilação o TS não tem mais efeito, por isso há uma trava de compilação com erros
-   Além de erros, o TS também proporciona avisos

### Type annotation e Type inference

-   Os dois conceitos vão nos acompanhar em todo o processo do desenvolvimento
-   Annotation é quando definimos o tipo do dado manualmente:

```jsx
    let a: boolean
    let x: number
    const name: string
```

-   Inference é quando o TS identifica e define o tipo de dados pra nós

### Arquivo de configuração do TS

-   Para criar o arquivo de configuração:
    ```jsx
    tsc --init
    ```

### Compilar TS automáticamente

-   Para gerar a compilação automática:
    ```jsx
    tsc - w;
    ```

## Avançando em Tipos

### Arrays

-   Se temos um array de números:

    ```jsx
    number[]
    ```

-   Se temos um array de string:

    ```jsx
    string[]
    ```

-   Isso acontece porque geralmente os arrays possuem apenas um único tipo de dado entre seus itens

-   Os tipos de arrays possuem outra sintaxe, mais antiga:

    ```jsx
    Array<string>
    ```

### Tipo de parâmetro de funções

-   Podemos definir o tipo de cada parâmetrp de uma função, para condicionar o correto uso
-   Sintaxe:
    ```jsx
    function minhaFuncao(nome: string) {}
    ```

### Tipo de retorno de funções

-   Os retornos também pode ser tipados
-   Sintaxe:

    ```jsx
    <!-- retornar número -->
    function myFunction(): number {}
    ```

### Funções anônimas

-   Neste caso, o TS ajuda fazendo uma validação do código digitado, nos fornecendo dicas de possíveis problemas
-   Exemplo: métodos não existentes

### Tipos de objetos

-   Podemos definir o tipo para objetos também
-   Sintaxe:

    ```jsx
    {prop: tipo, prop2: tipo2}
    ```

-   Ou seja, estamos determinando o tipo das propriedades do objeto
