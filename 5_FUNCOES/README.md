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
