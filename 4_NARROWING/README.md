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
