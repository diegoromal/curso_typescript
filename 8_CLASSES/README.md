## Classes

### Campos em classes

-   Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar
    a classe com campos para os futuros dados dos objetos
-   Que serão as propriedades dos objetos instanciados
-   Estes campos podem ser tipados também
-   Note que um campo sem valor inicial, deve ser declarado com !

### Constructor

-   Constructor é uma função que nos dá a possibilidade de iniciar um objeto com valores nos seus campos
-   Isso faz com que não precisemos mais da !
-   Provavelmente todos os campos serão preenchidos na hora de instanciar um objeto

### Campos readonly

-   Podemos iniciar o campo com valor e torná-lo readonly

-   Ou seja, será um valor só para consulta
-   Não poderemos alterar este valor ao longo do programa

### Herança e super

-   Para gerar uma herança utilizamos a palavra reservada extends
-   Depois vamos precisar passar as propriedades da classe pai para ela, quando instanciamos um objeto
-   Isso será feito com a função super

### Métodos

-   Métodos são como funções da classe
-   Podemos criá-los junto das classes e os objetos podem utilizá-los
-   É uma maneira de adicionar funcionalidades as classes

### O this

-   A palavra reservada this serve para nos referirmos ao objeto em si
-   Ou seja, conseguimos acessar as suas propriedades
-   Esta funcionalidade funciona da mesma forma que em JavaScript

### Utilizando getters

-   Os getters são uma forma de retornar propriedades do objeto
-   Porém podemos modificá-las neste retorno, isso é muito interessante
-   Ou seja, é um método para ler propriedades

### Utilizando setters

-   Os getters leem propriedades, os setters as modificam/atribuem
-   Logo, podemos fazer validações antes de inserir uma propriedade
-   Os setters também funcionam como métodos

### Herança de interfaces (implements)

-   Podemos herdar de interfaces também com a instrução implements
-   A ideia é bem parecida de extends
-   Porém esta forma é mais utilizada para criar os métodos que várias classes terão em comum

### Override de métodos

-   O override é uma técnica utilizada para substituir um método de uma classe que herdamos algo
-   Basta criar o método com o mesmo nome na classe filha
-   Isso caracteriza o override

### Visibilidade

-   Visibilidade é o conceito de expor nossos métodos de classes
-   public: visibilidade default, pode ser acessado em qualquer lugar
-   protected: acessível apenas a subclasses da classe do método, para acessar uma propriedade precisamos de um método
-   private: apenas a classe que declarou o método pode utilizar

#### Visibilidade: public

-   O public é o modo de visibilidade default
-   Ou seja, já está implícito e não precisamos declarar
-   Basicamente qualquer método ou propriedade de classe pai, estará acessível na classe filha

#### Visibilidade: protected

-   Os itens protected podem ser utilizados apenas em subclasses
-   Uma propriedade só pode ser acessada por um método, por exemplo
-   O mesmo acontece com métodos
-   Adicionando uma camada de segurança ao código criado em uma classe

#### Visibilidade: private

-   Os itens private, propriedades e objetos, só podem ser acessados na classe que os definiu
-   E ainda precisam de métodos para serem acessados
-   Esta é a maior proteção para propriedades e métodos

### Static members

-   Podemos criar propriedades e métodos estáticos em classes
-   Isso faz com que o acesso ou a utilização não dependam de objetos
-   Podemos utilizá-los a partir da própria classe

### Generic class

-   Podemos criar classes com tipos genéricos também
-   Ou seja, as propriedades dos argumentos podem ter os tipos definidos na hora da criação da instância
-   Isso nos permite maior flexibilidade em uma classe

### Parameters properties

-   Parameters properties é um recurso para definir a privacidade, nome e tipo das propriedades no constructor
-   Isso resume um pouco a sintaxe das nossas classes

### Class Expressions

-   Class Expressions é um recurso para criar uma classe anônima
-   Podemos também utilizar generics junto deste recurso
-   Vamos encapsular a classe em uma variável

### Abstract class

-   Abstract Class é um recurso para servir como molde de outra classe
-   Todos os métodos dela devem ser implementados nas classes que a herdam
-   E também não podemos instanciar objetos a partir destas classes

### Relações entre classes

-   Podemos criar um objeto com base em outra classe
-   Quando as classes são idênticas o TS não reclama sobre esta ação
-   Precisamos que as duas sejam exatamente iguais
