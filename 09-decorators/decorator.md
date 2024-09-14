## Decorators

Decorators (ou "decoradores") em TypeScript são uma funcionalidade experimental que permite adicionar metadados, modificar, ou até substituir classes, métodos, propriedades, ou parâmetros de métodos em tempo de execução. Eles são frequentemente usados para aplicar comportamentos transversais (como log, validação, autenticação, etc.) sem modificar o código da própria classe ou método.

Decorators são funções que recebem um ou mais argumentos, dependendo de onde são aplicados (em classes, métodos, propriedades ou parâmetros). Eles podem ser aplicados a:

* Classes
* Propriedades
* Métodos
* Parâmetros de Métodos

Para usar decorators em TypeScript, é necessário habilitar a flag experimentalDecorators no arquivo tsconfig.json:

```json
    {
    "compilerOptions": {
        "experimentalDecorators": true
    }
    }
```

### Decorators de Classe

Um decorator de classe é aplicado à definição de uma classe e pode modificar seu comportamento ou adicionar metadados.

```typescript
    function logClasse(constructor: Function) {
        console.log(`Classe criada: ${constructor.name}`);
    }

    @logClasse
    class Pessoa {
        constructor(public nome: string) {}
    }
```

* O decorator logClasse é uma função que recebe o construtor da classe como argumento.
* O decorator é aplicado à classe Pessoa, imprimindo o nome da classe sempre que ela é definida.

### Decorators de Método

Decorators de método são aplicados a métodos de uma classe e podem ser usados para modificar ou substituir a função do método, bem como adicionar lógica antes ou depois da execução.

```typescript
    function logMetodo(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`Chamando o método ${propertyKey} com os argumentos: ${args}`);
            return originalMethod.apply(this, args);
        };
    }

    class Calculadora {
        @logMetodo
        somar(a: number, b: number): number {
            return a + b;
        }
    }

    const calc = new Calculadora();
    calc.somar(2, 3); // Chamando o método somar com os argumentos: 2,3
```

* O decorator logMetodo intercepta a chamada ao método somar, imprime os argumentos e depois executa o método original.

### Decorators de Propriedade

Decorators de propriedade são aplicados diretamente a propriedades de uma classe. Eles não podem modificar o valor da propriedade diretamente, mas podem adicionar metadados ou alterar a maneira como essas propriedades são manipuladas.

```typescript
    function logPropriedade(target: any, propertyKey: string) {
        console.log(`Propriedade ${propertyKey} foi declarada.`);
    }

    class Produto {
        @logPropriedade
        nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }
    }

    const produto = new Produto("Cadeira");
    // Propriedade nome foi declarada.
```

* O decorator logPropriedade é aplicado à propriedade nome e registra uma mensagem quando a classe é definida.

### Decorators de Parâmetro

Decorators de parâmetro permitem modificar ou adicionar metadados aos parâmetros de um método.

```typescript
    function logParametro(target: any, propertyKey: string, parameterIndex: number) {
        console.log(`O parâmetro no índice ${parameterIndex} da função ${propertyKey} foi decorado.`);
    }

    class Exemplo {
        metodo(@logParametro mensagem: string) {
            console.log(mensagem);
        }
    }

    const exemplo = new Exemplo();
    exemplo.metodo("Olá");
    // O parâmetro no índice 0 da função metodo foi decorado.
```

* O decorator logParametro é aplicado ao primeiro parâmetro do método metodo e registra uma mensagem indicando o índice do parâmetro.

### Decorators de Acesso (Getters e Setters)

Decorators também podem ser aplicados a propriedades que utilizam getters e setters, permitindo a modificação da lógica de leitura e escrita dessas propriedades.

```typescript
    function logAcesso(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalGet = descriptor.get;
        descriptor.get = function () {
            console.log(`Acessando a propriedade ${propertyKey}`);
            return originalGet?.call(this);
        };
    }

    class Pessoa {
        private _idade: number = 25;

        @logAcesso
        get idade(): number {
            return this._idade;
        }
    }

    const pessoa = new Pessoa();
    console.log(pessoa.idade); // Acessando a propriedade idade
```

### Sequência de Execução dos Decorators

A ordem em que os decorators são aplicados segue uma sequência específica:

* Decorators de parâmetros
* Decorators de métodos
* Decorators de propriedades
* Decorators de classe
* Dentro de cada tipo, a execução começa de baixo para cima.