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

### Propriedades opcionais

-   Para usar, devemos colocar uma interrogação da seguinte forma:

    ```jsx
    {nome: string, sobrenome?:string}
    ```

-   A primeira propriedade será sempre obrigatória!

### Validação de propriedades opcionais

-   Utilizar condicional if

### Union types

-   Alternativa melhor que any
-   Exclusivo do TS
-   Sintaxe:
    ```jsx
    number | string;
    ```

### Avançando com Union Types

-   Podemos utilizar condicionais para validação do tipo de union types
-   Utilizar o typeof para a checagem
-   Com isso é possível trilhar rumos diferentes, baseados no tipo de dado

### Type alias

-   Recurso que permite criar um tipo e determinar o que ele verifica
-   Assim temos uma maneira mais fácil de chamá-lo em vez de criar expressões complexas com Union Types, por exemplo

### Introdução às interfaces

-   Uma outra maneira de nomear um tipo de objeto
-   Determinar um nome para o tipo
-   "Simular" ao type alias
-   Escolher quais propriedades e seus tipos

### Diferença entre type alias e interfaces

-   Na maioria das vezes podemos optar entre qualquer um dos recursos
-   A diferença é que a interface pode ser alterada ao longo do código, o alias não
-   Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a interface
-   type é similar à const e interface similar à let

### Literal types

-   É um recurso que permite colocar valores como tipos
-   Isso restringe o uso a não só tipos, como também os próprios valores
-   Este recurso é muito utilizado com Union types

### Non-null Assertion Operator

-   Às vezes o TypeScript pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponível
-   Mas se sabemos que este valor será preenchido, podemos evitar o erro;
-   Utilizamos o caractere !

### Bigint

-   Com o tipo bigint podemos declarar números com valores muito altos
-   Podemos utilizar a notação literal, exemplo: 100n
-   Para este recurso precisamos mudar a configuração do TS, para a versão de ES2020

### Symbol

-   De forma resumida, o Symbol cria uma referência única para um valor
-   Ou seja, mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes

## Narrowing

### O que é?

-   Recurso de TS para identificar o tipo de dados
-   Pode dar uma direção diferente a execução do programa baseada no tipo identificado
-   Existem situações que os tipos podem ser imprevisiveis, e queremos executar algo para cada possibilidade
-   Fundamental para evitar erros do compilador, identificando e resolvendo os possiveis erros na hora do desenvolvimento

### Typeof type guard

-   O type guard é basicamente uma validação do tipo utilizando o typeof
-   Assim podemos comparar o retorno do operador com um possível tipo
-   Todos os dados vem como string, exemplo: "string", "number", "boolean"
-   A partir disso realizamos as bifurcações

### Checando se valor existe

-   Se colocarmos uma variável em um if, se houver algum valor recebemos um true
-   Quando não há valor, recebemos false
-   Assim conseguimos realizar o narrowing também, é uma estratégia bem utilizada

### Operador instanceof

-   Além dos tipos primitivos, podemos trabalhar com instanceof
-   Checamos se um dado pertence a uma determinada classe
-   E ele vai servir até para as nossas próprias classes

### Operador in

-   Utilizado para checar se existe uma propriedade no objeto
-   Recurso interessante para o narrowing pois propriedades também podem ser opcionais

## Aprofundando em Funções

### Funções sem retorno

-   Podemos ter funções que não retornam valores
-   Nesse caso usamos o tipo de retorno, "tipo de dado": void
-   Ele vai dizer ao TS que não temos um valor de retorno

### Callback como argumento

-   Podemos inserir uma função de callback como argumento de função
-   Nela conseguimos definir o tipo de argumento aceito pela callback
-   E também o tipo de retorno da mesma

### Generic functions

-   Estratégia para quando o tipo de retorno é relacionado ao tipo de argumento
-   Por exemplo: um item de um array, pode ser string, boolean ou number
-   Normalmente são utilizadas letras como T ou U (convenção) para definir generics

### Constraints nas Generic Functions

-   As Generic Functions podem ter seu escopo reduzido por constraints
-   Basicamente limitamos os tipos que podem ser utilizados no Generic
-   Isso faz com que nosso escopo seja menos abrangente

### Definindo tipo de parâmetros

-   Em generic functions temos que utilizar parâmetros de tipos semelhantes, se não recebemos um erro
-   Porémhá possibilidade de determinar o tipo também dos parâmetros aceitos, com uma sintaxe especial
-   Isso faz com que a validação do TS aceite os tipos escolhidos

### Parâmetros opcionais

-   Nem sempre utilizamos todos os parâmetros de uma função
-   Mas se ele for opcional, precisamos declarar isso para o TS
-   E ainda deixar ele no fim da lista de parâmetros

### Parâmetros default

-   São os que já possuem um valor definido
-   Se não passarmos para a função, é utilizado esse valor
-   Para este recurso, a aplicação em TS é igual JS

### Unknown

-   É utilizado de forma semelhante ao any, ele aceita qualquer tipo de dado
-   Porém a diferença é que ele não deixa algo ser executado se não houver validação de tipo
-   Ou seja, adiciona uma trava de segurança

### O tipo never

-   É um tipo de retorno semelhante ao void
-   Porém é utilizado quando a função não retorna nada
-   Um exemplo: retorno de erros

### Rest parameters

-   Em JavaScript ES6 podemos utilizar o Rest Operator
-   Para aplicá-lo em parâmetros em TS é fácil, basta definir o tipo de dado com a sintaxe de Rest(...)

### Destructuring em parâmetros

-   Outr recurso de ES6, também pode ser aplicado com TS
-   Precisamos apenas determinar o tipo de cada dado que será desestruturado
-   Desta maneira o TS valida o Destructuring

## Object types

### O que são?

-   São os dados que tem como o tipo de objeto, por exemplo: object literals e arrays
-   Temos diversos recursos para explorar sobre estes tipos
-   Como: Interfaces, readonly, tupla e outros
-   Isso nos dá possibilidades a mais para o JavaScript

### De tipo para interface

-   Um caso de uso para interfaces é simplificar os parâmetros de objeto de funções
-   Ou seja, em vez de passar parâmetros de um objeto longo para n funções, passamos apenas a interface

### Propriedades opcionais em interfaces

-   As interfaces podem conter propriedaes de objetos opcionais
-   Basta adicionar a interrogação no nome da propriedade
-   Exemplo: nome?:string

### Propriedades readonly

-   As propriedades readonly podem ser alteradas apenas uma vez, na criação do novo dado
-   É uma forma de criar um valor constante em um objeto
-   Podemos adicionar as interfaces

### Index signature

-   Utilizamos o Index Signature quando não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array
-   Isso restringe a tipos que não devem ser utilizados
-   Uma barreira de segurança a mais na nossa variável

### Extendind Types

-   Utilizamos Extending Types como uma herança para criar tipos mais complexos por meio de uma interface
-   Ou seja, uma interface pode herdar as propriedades e tipos já definidos de outra
-   Isso acontece por meio da instrução extends

### Intersection Types

-   São utilizados para criar tipos mais complexos a partir de duas interfaces, por exemplo
-   Podemos concatenar os tipos com &

### ReadOnlyArray

-   É um tipo para arrays, que deixa os itens como readonly
-   Podemos aplicar um tipo para os itens do array, além desta propriedade especial
-   A modificação de itens pode ser feita através de método, mas não podemos aumentar o array, por exemplo

### Tuplas

-   É um tipo de array, podemos definir a quantidade e o tipo de elementos
-   Basicamente criamos um novo type, e nele inserimos um array com os tipos necessários
-   Cada tipo conta também como um elemento

### Tuplas com readonly

-   Podemos criar tuplas com a propriedade de readonly
-   É um tipo de dado super restrito pois:
-   Limita quantos itens teremos, qual o tipo de cada um e também não são modificáveis

##
