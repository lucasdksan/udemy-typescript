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

