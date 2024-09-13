## Classes com Typescript

Classes em TypeScript são uma extensão poderosa do conceito de classes em JavaScript, adicionando suporte a tipos estáticos, visibilidade de membros (como public, private, e protected), e outras funcionalidades que facilitam a criação de código orientado a objetos de forma mais segura e robusta. Vamos explorar como usar classes em TypeScript.

Aqui está um exemplo simples de como declarar e usar uma classe em TypeScript:

```typescript
    class Pessoa {
        nome: string;
        idade: number;

        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }

        cumprimentar(): string {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
    }

    const pessoa1 = new Pessoa("Alice", 30);
    console.log(pessoa1.cumprimentar()); // Olá, meu nome é Alice e tenho 30 anos.
```

### Constructor

O constructor em TypeScript é um método especial de uma classe que é automaticamente chamado quando uma nova instância da classe é criada. O propósito principal do constructor é inicializar o estado de um objeto, ou seja, definir os valores iniciais das propriedades da classe.

Aqui está um exemplo básico de um constructor em uma classe TypeScript:

```typescript
    class Pessoa {
        nome: string;
        idade: number;

        // O método constructor é usado para inicializar as propriedades da classe
        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }

        cumprimentar(): string {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
    }

    const pessoa1 = new Pessoa("Alice", 30); // O constructor é chamado aqui
    console.log(pessoa1.cumprimentar()); // Olá, meu nome é Alice e tenho 30 anos.
```

#### Características do constructor

* Inicialização de Propriedades: O constructor é onde as propriedades da classe são inicializadas. No exemplo acima, nome e idade são definidas no momento da criação da instância da classe Pessoa.

* Parâmetros do constructor: O constructor pode aceitar parâmetros, que podem ser usados para inicializar as propriedades da classe.

* Acessibilidade: O constructor pode ter diferentes modificadores de acesso (public, private, protected). Isso define se e como o constructor pode ser chamado.

* super(): Quando uma classe estende outra, o constructor da classe base pode ser chamado usando super(). O super() deve ser chamado antes de acessar this no constructor.

### Propriedades readonly

Em TypeScript, a palavra-chave readonly é usada para marcar uma propriedade de uma classe, interface ou tipo como "somente leitura". Isso significa que, uma vez que essa propriedade foi atribuída, seu valor não pode ser alterado. Esse modificador é útil para garantir que certos valores permaneçam constantes durante a execução do programa.

Vamos começar com um exemplo simples usando classes:

```typescript
    class Carro {
        readonly marca: string;
        readonly modelo: string;

        constructor(marca: string, modelo: string) {
            this.marca = marca;
            this.modelo = modelo;
        }

        exibirInfo(): void {
            console.log(`${this.marca} ${this.modelo}`);
        }
    }

    const carro1 = new Carro("Toyota", "Corolla");
    console.log(carro1.marca); // Toyota
    console.log(carro1.modelo); // Corolla

    // Tentando alterar o valor de uma propriedade readonly resultará em um erro
    // carro1.marca = "Honda"; // Error: Cannot assign to 'marca' because it is a read-only property.
```

As propriedades marca e modelo são declaradas como readonly, ou seja, podem ser atribuídas uma vez (no constructor), mas não podem ser modificadas depois.

### Herança e super

Em TypeScript, a herança permite que uma classe derive características (propriedades e métodos) de outra classe. O super é uma palavra-chave usada para chamar o construtor ou métodos da classe base (a classe da qual a nova classe herda). Esses conceitos são fundamentais para aproveitar ao máximo o reuso de código e a organização em programação orientada a objetos.

Quando uma classe herda outra, ela herda todas as propriedades e métodos da classe base, exceto os construtores. A sintaxe para declarar a herança em TypeScript é com a palavra-chave extends.

```typescript
    class Animal {
        nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }

        mover(distancia: number): void {
            console.log(`${this.nome} se moveu ${distancia} metros.`);
        }
    }

    class Cachorro extends Animal {
        latir(): void {
            console.log("Au Au!");
        }
    }

    const cachorro = new Cachorro("Rex");
    cachorro.latir(); // Au Au!
    cachorro.mover(10); // Rex se moveu 10 metros.
```

A classe Animal é a classe base com uma propriedade nome e um método mover.
A classe Cachorro estende Animal, herdando tanto a propriedade nome quanto o método mover.
Cachorro também tem um método próprio, latir.

A palavra-chave super é usada em duas situações principais:

Para chamar o construtor da classe base: Isso é necessário para inicializar as propriedades da classe base no contexto da classe derivada.
Para acessar métodos da classe base: Isso é útil quando você quer extender ou modificar a funcionalidade de um método herdado.

```typescript
    class Animal {
        nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }

        mover(distancia: number): void {
            console.log(`${this.nome} se moveu ${distancia} metros.`);
        }
    }

    class Cavalo extends Animal {
        constructor(nome: string) {
            super(nome); // Chama o construtor da classe base (Animal)
        }

        mover(distancia = 45): void {
            console.log("Galopando...");
            super.mover(distancia); // Chama o método mover da classe base
        }
    }

    const cavalo = new Cavalo("Spirit");
    cavalo.mover(); // Galopando... Spirit se moveu 45 metros.
```

A classe Cavalo estende Animal e utiliza super para chamar o construtor de Animal, assegurando que a propriedade nome seja inicializada corretamente.
A classe Cavalo também redefine o método mover e, dentro dele, usa super.mover para reutilizar a lógica da classe base, adicionando comportamento específico antes.

### Métodos

Em TypeScript, métodos são funções definidas dentro de uma classe que operam sobre os dados pertencentes à instância da classe. Eles são usados para manipular os dados e definir o comportamento das instâncias da classe. Métodos podem ser públicos, privados ou protegidos, dependendo da visibilidade desejada.

Para definir um método em uma classe TypeScript, basta declarar uma função dentro do corpo da classe. Aqui está um exemplo básico:

```typescript
    class Pessoa {
        nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }

        dizerOla(): void {
            console.log(`Olá, meu nome é ${this.nome}.`);
        }
    }

    const pessoa = new Pessoa("Lucas");
    pessoa.dizerOla(); // Olá, meu nome é Lucas.
```

### This

Em TypeScript, a palavra-chave this em uma classe faz referência à instância da própria classe. Ela é usada para acessar as propriedades e métodos do objeto corrente dentro de uma classe. No contexto de programação orientada a objetos, o this é crucial para manipular os dados da instância em questão e, muitas vezes, sua utilização pode parecer simples, mas pode ser confusa em certos cenários, especialmente em callbacks e funções.


Dentro de uma classe, this é utilizado para se referir a uma instância específica da classe. Sempre que você cria um método ou acessa uma propriedade da instância, você usa this para se referir ao contexto do objeto atual.

```typescript
    class Pessoa {
        nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }

        dizerOla(): void {
            console.log(`Olá, meu nome é ${this.nome}.`);
        }
    }

    const pessoa = new Pessoa("Lucas");
    pessoa.dizerOla(); // Olá, meu nome é Lucas.
```

Neste exemplo:

* this.nome refere-se à propriedade nome da instância da classe Pessoa.
* Quando o método dizerOla é chamado, ele usa this.nome para acessar o nome da instância atual.

#### Cuidados com o contexto de this

Embora o uso de this dentro de métodos de uma classe geralmente funcione como esperado, é importante estar ciente do escopo do this em certos casos, como callbacks e funções passadas como argumentos.

```typescript
    class Carro {
        marca: string;

        constructor(marca: string) {
            this.marca = marca;
        }

        mostrarMarca(): void {
            console.log(`Marca: ${this.marca}`);
        }
    }

    const carro = new Carro("Toyota");

    setTimeout(carro.mostrarMarca, 1000); // undefined
```

Nesse exemplo, a função carro.mostrarMarca é passada como um argumento para o setTimeout. Quando a função é executada, o valor de this é indefinido porque o contexto foi perdido. Isso acontece porque setTimeout não mantém o contexto original de this.

#### Solução com .bind()

Uma solução é usar o método .bind() para garantir que o contexto de this seja mantido:

```typescript
    setTimeout(carro.mostrarMarca.bind(carro), 1000); // Marca: Toyota
```

O método .bind() cria uma nova função que, quando chamada, tem o this configurado para o valor fornecido (neste caso, carro).

#### This em funções de seta (arrow functions)

Funções de seta (arrow functions) em TypeScript não têm seu próprio this. Em vez disso, elas herdam o valor de this do escopo em que foram definidas. Isso ajuda a evitar problemas de perda de contexto.

```typescript
    class Carro {
        marca: string;

        constructor(marca: string) {
            this.marca = marca;
        }

        mostrarMarca = (): void => {
            console.log(`Marca: ${this.marca}`);
        }
    }

    const carro = new Carro("Toyota");
    setTimeout(carro.mostrarMarca, 1000); // Marca: Toyota
```

Neste caso, como mostrarMarca foi definida como uma função de seta, ela mantém o contexto correto de this, e o código funciona como esperado.

### Getters e Setters

Em TypeScript, getters e setters são métodos especiais que permitem acessar e modificar as propriedades de uma classe de maneira controlada. Eles fornecem uma interface mais encapsulada e flexível para trabalhar com os atributos de uma classe, permitindo a validação de dados, execução de lógica adicional e a ocultação da implementação interna.

#### Getters

Um getter é um método que permite "obter" o valor de uma propriedade de um objeto. Eles são úteis quando você quer controlar o acesso ou manipular o valor antes de retornar para o código que o solicitou.

```typescript
    class Pessoa {
        private _nome: string;

        constructor(nome: string) {
            this._nome = nome;
        }

        get nome(): string {
            return this._nome.toUpperCase(); // Sempre retorna o nome em letras maiúsculas
        }
    }

    const pessoa = new Pessoa("Lucas");
    console.log(pessoa.nome); // LUCAS
```

Neste exemplo:

* A propriedade _nome é privada e não pode ser acessada diretamente de fora da classe.
* O getter nome permite que o valor de _nome seja acessado de fora da classe, mas sempre retorna o valor em letras maiúsculas.

#### Setters

Um setter é um método que permite "definir" ou modificar o valor de uma propriedade de um objeto. Ele pode ser útil quando você quer controlar ou validar os dados antes de permitir que uma propriedade seja alterada.

```typescript
    class Pessoa {
        private _nome: string;

        constructor(nome: string) {
            this._nome = nome;
        }

        get nome(): string {
            return this._nome;
        }

        set nome(novoNome: string) {
            if (novoNome.length > 3) {
                this._nome = novoNome;
            } else {
                console.log("O nome deve ter mais de 3 caracteres.");
            }
        }
    }

    const pessoa = new Pessoa("Lucas");
    console.log(pessoa.nome); // Lucas

    pessoa.nome = "Lu"; // O nome deve ter mais de 3 caracteres.
    console.log(pessoa.nome); // Lucas

    pessoa.nome = "Maria";
    console.log(pessoa.nome); // Maria
```

Neste exemplo:

* O setter nome permite alterar o valor da propriedade _nome, mas impõe uma validação para garantir que o novo nome tenha mais de 3 caracteres.
* Quando um nome inválido é atribuído, o setter impede a alteração e exibe uma mensagem.

#### Benefícios de Getters e Setters

* Encapsulamento: Eles permitem esconder detalhes internos da implementação. Você pode manter o controle sobre como as propriedades são acessadas e modificadas.

* Validação e controle: Com setters, você pode validar os valores antes de atribuí-los a uma propriedade, como no exemplo onde o nome precisa ter mais de três caracteres.

* Lógica adicional: Com getters, você pode adicionar lógica adicional ao acessar uma propriedade (por exemplo, formatar um valor antes de retorná-lo).

* Imutabilidade controlada: Através de getters e setters, você pode tornar certas propriedades imutáveis ou controladas.

### Visibilidade

Em TypeScript, assim como em muitas linguagens orientadas a objetos, é possível controlar o nível de acesso a membros de uma classe (propriedades e métodos) usando modificadores de visibilidade. Esses modificadores determinam se um membro da classe pode ser acessado de dentro da classe, de classes derivadas (herdeiras), ou de fora da classe.

Os principais modificadores de visibilidade em TypeScript são:

* public (padrão)
* private
* protected

#### Public (Padrão)

Quando um membro de uma classe é marcado como public, ele pode ser acessado de qualquer lugar: dentro da classe, em instâncias da classe, e em classes derivadas. Em TypeScript, todos os membros de uma classe são public por padrão, mesmo se você não especificar explicitamente o modificador.

```typescript
    class Pessoa {
        public nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }

        public saudar(): void {
            console.log(`Olá, meu nome é ${this.nome}`);
        }
    }

    const pessoa = new Pessoa("Lucas");
    console.log(pessoa.nome); // Acesso permitido, pois 'nome' é público
    pessoa.saudar(); // Acesso permitido, pois 'saudar' é público
```

Aqui, tanto a propriedade nome quanto o método saudar são públicos, e podem ser acessados fora da classe.

#### Private

Quando um membro é marcado como private, ele só pode ser acessado dentro da própria classe. Nem classes derivadas (herdeiras), nem instâncias da classe podem acessar diretamente membros privados.

```typescript
    class ContaBancaria {
        private saldo: number;

        constructor(saldoInicial: number) {
            this.saldo = saldoInicial;
        }

        public consultarSaldo(): number {
            return this.saldo; // Acesso permitido, pois está dentro da própria classe
        }

        public depositar(valor: number): void {
            this.saldo += valor; // Acesso permitido, pois está dentro da própria classe
        }
    }

    const conta = new ContaBancaria(100);
    console.log(conta.consultarSaldo()); // 100
    // console.log(conta.saldo); // Erro: 'saldo' é privado e não pode ser acessado de fora
    conta.depositar(50);
    console.log(conta.consultarSaldo()); // 150
```

Aqui, saldo é uma propriedade privada e só pode ser acessada dentro da classe ContaBancaria. Qualquer tentativa de acessá-la fora da classe resultará em erro.

#### Protected

Quando um membro é marcado como protected, ele pode ser acessado dentro da própria classe e também dentro de classes derivadas (ou seja, classes que herdam da classe base). Porém, assim como no caso de private, ele não pode ser acessado diretamente a partir de uma instância da classe.

```typescript
    class Funcionario {
        protected salario: number;

        constructor(salario: number) {
            this.salario = salario;
        }

        protected mostrarSalario(): number {
            return this.salario;
        }
    }

    class Gerente extends Funcionario {
        public mostrarSalarioGerente(): void {
            console.log(`O salário do gerente é: ${this.mostrarSalario()}`); // Acesso permitido
        }
    }

    const gerente = new Gerente(5000);
    gerente.mostrarSalarioGerente(); // O salário do gerente é: 5000
    // console.log(gerente.salario); // Erro: 'salario' é protegido
```

* A propriedade salario e o método mostrarSalario são protegidos e podem ser acessados na classe Gerente, que herda de Funcionario.
* No entanto, salario não pode ser acessado diretamente a partir de uma instância da classe Gerente.

#### Comparação entre public, private, e protected

| Modificador | Acessível dentro da classe | Acessível em classes derivadas | Acessível fora da classe (instâncias) |
| ----------- | -------------------------- | ------------------------------ | ------------------------------------- |
|   public    | Sim                        | Sim                            | Sim                                   |        
|   private   | Sim                        | Não                            | Não                                   |
|   protected | Sim                        | Sim                            | Não                                   |

#### Outras Considerações

Além dos modificadores de visibilidade, TypeScript também suporta o modificador readonly, que pode ser aplicado a propriedades para garantir que elas não sejam alteradas depois de serem atribuídas. O modificador readonly pode ser combinado com public, private, ou protected.

```typescript
    class Carro {
        public readonly marca: string;

        constructor(marca: string) {
            this.marca = marca;
        }
    }

    const meuCarro = new Carro("Toyota");
    console.log(meuCarro.marca); // Toyota
    // meuCarro.marca = "Honda"; // Erro: 'marca' é readonly e não pode ser modificada
```

### Static Members

Em TypeScript, membros estáticos (static members) são propriedades ou métodos de uma classe que pertencem à própria classe em vez de pertencer a uma instância específica da classe. Isso significa que você pode acessar membros estáticos diretamente na classe, sem precisar criar uma instância dela.

#### Características dos Membros Estáticos:

* Pertencem à classe, e não às instâncias.
* São compartilhados entre todas as instâncias da classe.
* Não podem acessar membros da instância diretamente, pois não estão associados a uma instância específica.

```typescript
    class Contador {
        static total: number = 0;

        constructor() {
            Contador.total += 1;
        }

        static mostrarTotal(): void {
            console.log(`Total de instâncias: ${Contador.total}`);
        }
    }

    const c1 = new Contador();
    const c2 = new Contador();

    console.log(Contador.total); // 2, acessa diretamente pela classe

    Contador.mostrarTotal(); // "Total de instâncias: 2"
```

Aqui:

* A propriedade total é estática e armazena o número total de instâncias da classe Contador.
* O método mostrarTotal também é estático e pode ser chamado diretamente pela classe.

Os métodos estáticos, assim como as propriedades, pertencem à classe e não às instâncias. Eles podem ser úteis quando você quer definir funcionalidades que são relacionadas à classe como um todo e não precisam interagir com os dados de uma instância específica.

```typescript
    class Matematica {
        static somar(a: number, b: number): number {
            return a + b;
        }

        static multiplicar(a: number, b: number): number {
            return a * b;
        }
    }

    console.log(Matematica.somar(5, 3)); // 8
    console.log(Matematica.multiplicar(4, 6)); // 24
```

Aqui:

* somar e multiplicar são métodos estáticos da classe Matematica. Eles podem ser usados sem a necessidade de criar uma instância de Matematica.

#### Acessando membros estáticos dentro da classe

Membros estáticos podem ser acessados dentro de outros métodos estáticos da mesma classe usando o nome da classe. Eles não podem ser acessados diretamente dentro de métodos não estáticos (métodos de instância), porque os métodos de instância pertencem a instâncias da classe, enquanto os membros estáticos pertencem à própria classe.

```typescript
    class Empresa {
        static nome: string = "Tech Corp";

        static mostrarNome(): void {
            console.log(`Nome da empresa: ${Empresa.nome}`); // Acessa o membro estático usando o nome da classe
        }
    }

    Empresa.mostrarNome(); // "Nome da empresa: Tech Corp"
```

#### Diferença entre membros estáticos e de instância

* Membros de instância: Pertencem a uma instância específica da classe e cada instância tem sua própria cópia dessas propriedades.
* Membros estáticos: Pertencem à classe como um todo e não a instâncias específicas, compartilhados por todas as instâncias da classe.

```typescript
    class Usuario {
        static totalUsuarios: number = 0; // Propriedade estática

        nome: string; // Propriedade de instância

        constructor(nome: string) {
            this.nome = nome;
            Usuario.totalUsuarios += 1;
        }

        mostrarNome(): void {
            console.log(`Nome do usuário: ${this.nome}`); // Acessa a propriedade da instância
        }
    }

    const usuario1 = new Usuario("Alice");
    const usuario2 = new Usuario("Bob");

    usuario1.mostrarNome(); // "Nome do usuário: Alice"
    usuario2.mostrarNome(); // "Nome do usuário: Bob"

    console.log(Usuario.totalUsuarios); // 2, acessa a propriedade estática diretamente pela classe
```

Aqui:

* totalUsuarios é uma propriedade estática que é compartilhada entre todas as instâncias de Usuario.
* nome é uma propriedade de instância, e cada instância de Usuario tem seu próprio valor de nome.

### Classe abstrata

Em TypeScript, classes abstratas são modelos para outras classes, permitindo que você defina métodos e propriedades que devem ser implementados pelas subclasses, mas sem fornecer uma implementação completa para alguns (ou todos) os métodos.

Classes abstratas são úteis quando você deseja criar uma classe base que nunca será instanciada diretamente, mas será herdada por outras classes que fornecerão implementações concretas para os métodos abstratos.

#### Características de Classes Abstratas:

* Não podem ser instanciadas diretamente. Só podem ser utilizadas como base para outras classes.
* Podem conter métodos concretos e abstratos. Métodos concretos têm implementações, enquanto métodos abstratos não têm corpo e precisam ser implementados nas classes derivadas.
* Podem conter propriedades, métodos e construtores.

#### Sintaxe para Classes Abstratas

Uma classe abstrata é definida usando a palavra-chave abstract. Métodos abstratos dentro da classe também precisam ser marcados com abstract, e não possuem implementação dentro da classe abstrata.

```typescript
    abstract class Animal {
        constructor(public nome: string) {}

        // Método concreto
        mover(distancia: number): void {
            console.log(`${this.nome} moveu-se ${distancia} metros.`);
        }

        // Método abstrato
        abstract fazerSom(): void; // As subclasses são obrigadas a implementar este método
    }
```

Aqui:

* A classe Animal é abstrata, então não pode ser instanciada diretamente.
* O método mover é um método concreto (tem implementação).
* O método fazerSom é abstrato e deve ser implementado por qualquer classe que herde de Animal.

#### Implementação de Subclasses

Uma classe que herda de uma classe abstrata precisa fornecer implementações para todos os métodos abstratos da classe base.

```typescript
    class Cachorro extends Animal {
        constructor(nome: string) {
            super(nome);
        }

        // Implementando o método abstrato
        fazerSom(): void {
            console.log(`${this.nome} está latindo.`);
        }
    }

    class Gato extends Animal {
        constructor(nome: string) {
            super(nome);
        }

        // Implementando o método abstrato
        fazerSom(): void {
            console.log(`${this.nome} está miando.`);
        }
    }

    const cachorro = new Cachorro("Rex");
    cachorro.fazerSom(); // Rex está latindo.
    cachorro.mover(10); // Rex moveu-se 10 metros.

    const gato = new Gato("Felix");
    gato.fazerSom(); // Felix está miando.
    gato.mover(5); // Felix moveu-se 5 metros.
```

Aqui, as classes Cachorro e Gato herdam de Animal e implementam o método abstrato fazerSom. Ambas também podem usar o método mover, que é um método concreto definido na classe base.

#### Métodos e Propriedades Abstratas

Além de métodos, você também pode declarar propriedades abstratas em uma classe abstrata. Essas propriedades precisam ser implementadas pelas subclasses.

```typescript
    abstract class Forma {
        abstract area(): number;

        abstract cor: string; // Propriedade abstrata
    }

    class Circulo extends Forma {
        constructor(public raio: number, public cor: string) {
            super();
        }

        // Implementando o método abstrato
        area(): number {
            return Math.PI * this.raio ** 2;
        }
    }

    const circulo = new Circulo(5, "vermelho");
    console.log(circulo.area()); // Exibe a área do círculo
    console.log(circulo.cor); // vermelho
```

Aqui:

* A classe Forma possui uma propriedade abstrata cor e um método abstrato area.
* A classe Circulo fornece implementações para ambos.