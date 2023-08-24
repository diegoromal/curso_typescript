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
