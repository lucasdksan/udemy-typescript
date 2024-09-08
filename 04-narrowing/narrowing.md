## Narrowing

No TypeScript, o conceito de Narrowing refere-se ao processo de refinamento de um tipo mais amplo para um tipo mais específico dentro de um escopo. É uma técnica essencial para garantir que o código seja seguro e compreensível, permitindo ao TypeScript aplicar verificações de tipos mais precisas com base no contexto.

### Contextualizando Narrowing

Quando você declara uma variável com um tipo mais genérico (como string | number), o TypeScript inicialmente trata essa variável como qualquer um dos tipos possíveis. Através de narrowing, você pode refinar esse tipo conforme você interage com a variável, reduzindo suas possíveis variantes.

```typescript
    function printId(id: string | number) {
        if (typeof id === "string") {
            // Aqui o TypeScript sabe que 'id' é uma string
            console.log(`O ID é: ${id.toUpperCase()}`);
        } else {
            // Aqui o TypeScript sabe que 'id' é um número
            console.log(`O ID é: ${id.toFixed(2)}`);
        }
    }
```

### typeof Type Guard

No TypeScript, o typeof Type Guard é uma técnica que permite restringir ou refinar o tipo de uma variável dentro de um determinado escopo, utilizando o operador typeof. Ele é particularmente útil quando você está lidando com union types ou tipos amplos e precisa realizar operações seguras com base no tipo específico que a variável representa em determinado contexto.

#### Como Funciona o typeof Type Guard

O operador typeof é utilizado para determinar o tipo de uma variável em tempo de execução. No TypeScript, ele pode ser usado dentro de condicionais para realizar um type guard, que refina o tipo da variável para um tipo mais específico.

```typescript
    function printId(id: string | number) {
        if (typeof id === "string") {
            // TypeScript sabe que 'id' é uma string neste bloco
            console.log(`O ID em letras maiúsculas: ${id.toUpperCase()}`);
        } else {
            // TypeScript sabe que 'id' é um número neste bloco
            console.log(`O ID com duas casas decimais: ${id.toFixed(2)}`);
        }
    }
```

#### Tipos que o typeof Pode Retornar

O typeof pode ser usado para verificar os seguintes tipos primitivos:

* "string"
* "number"
* "boolean"
* "symbol"
* "undefined"
* "object" (note que null é um valor especial que retorna "object")
* "function"

#### typeof em Condicionais

Você pode usar typeof diretamente em condicionais para fazer o type guard. Quando TypeScript encontra uma verificação typeof em um bloco condicional, ele automaticamente refina o tipo dentro desse bloco.

```typescript
    function processInput(input: string | number | boolean | null) {
        if (typeof input === "string") {
            console.log("String input:", input);
        } else if (typeof input === "number") {
            console.log("Number input:", input);
        } else if (typeof input === "boolean") {
            console.log("Boolean input:", input);
        } else if (input === null) {
            console.log("Input is null");
        } else {
            console.log("Unknown type");
        }
    }
```

#### Limitações do typeof Type Guard

O typeof Type Guard é limitado aos tipos que o operador typeof pode retornar. Ele não pode ser usado para distinguir entre tipos complexos ou classes personalizadas.

```typescript
    class Dog {
        bark() { console.log("Woof!"); }
    }

    class Cat {
        meow() { console.log("Meow!"); }
    }

    function interactWithAnimal(animal: Dog | Cat) {
        if (typeof animal === "object") {
            // 'typeof' não pode diferenciar entre Dog e Cat
            animal.bark(); // Erro de compilação: 'animal.bark' não é uma função em 'Cat'
        }
    }
```

### Operador instanceof

O operador instanceof é utilizado em JavaScript e TypeScript para verificar se um objeto é uma instância de uma classe ou de um construtor específico. Em TypeScript, ele funciona como um type guard, permitindo refinar o tipo de uma variável dentro de um determinado escopo, baseado na verificação de sua instância.

O operador instanceof testa se o protótipo de um construtor aparece em algum lugar na cadeia de protótipos de um objeto. Em termos práticos, ele verifica se um objeto foi criado por uma função construtora específica ou por uma classe.

```typescript
    obj instanceof Constructor
```

* obj: O objeto a ser testado.
* Constructor: A função construtora ou classe a ser verificada.

```typescript
    class Dog {
        bark() {
            console.log("Woof!");
        }
    }

    class Cat {
        meow() {
            console.log("Meow!");
        }
    }

    function makeNoise(animal: Dog | Cat) {
        if (animal instanceof Dog) {
            animal.bark(); // TypeScript sabe que 'animal' é um 'Dog'
        } else if (animal instanceof Cat) {
            animal.meow(); // TypeScript sabe que 'animal' é um 'Cat'
        }
    }

    const myDog = new Dog();
    const myCat = new Cat();

    makeNoise(myDog); // Woof!
    makeNoise(myCat); // Meow!
```

#### Como o instanceof Ajuda no Type Guard

No exemplo acima, o operador instanceof é usado para verificar se a variável animal é uma instância de Dog ou Cat. Dependendo do resultado, o TypeScript refina o tipo da variável, permitindo que métodos específicos de cada classe sejam chamados de maneira segura.

#### Trabalhando com Herança

O instanceof também funciona bem em cadeias de herança. Se uma classe herda de outra, o instanceof pode identificar corretamente instâncias das classes pai e filho.

```typescript
    class Animal {
        move() {
            console.log("Moving along!");
        }
    }

    class Bird extends Animal {
        fly() {
            console.log("Flying!");
        }
    }

    function action(creature: Animal) {
        if (creature instanceof Bird) {
            creature.fly(); // TypeScript sabe que 'creature' é um 'Bird'
        } else {
            creature.move(); // TypeScript sabe que 'creature' é um 'Animal'
        }
    }

    const sparrow = new Bird();
    const genericAnimal = new Animal();

    action(sparrow); // Flying!
    action(genericAnimal); // Moving along!
```

#### Limitações do instanceof

Embora instanceof seja poderoso, ele tem algumas limitações:

* **Funções Anônimas:** Se uma função construtora anônima for usada, ou se a cadeia de protótipos for modificada manualmente, instanceof pode não funcionar como esperado.

* **Instâncias Criadas em Contextos Diferentes:** Se um objeto for criado em diferentes contextos de execução (por exemplo, em diferentes iframes), instanceof pode falhar, pois os protótipos entre esses contextos são diferentes.

* **Objetos Literais:** instanceof não pode ser usado para verificar se um objeto é um literal de um tipo de objeto simples, como um literal de objeto ou uma array.

```typescript
   function isDate(input: any): boolean {
        return input instanceof Date;
    }

    console.log(isDate(new Date())); // true
    console.log(isDate({})); // false
    console.log(isDate("2023-09-07")); // false
```

Aqui, instanceof funciona bem para verificar se uma variável é uma instância de Date. No entanto, se Date fosse redefinido em outro contexto (por exemplo, em um iframe), o operador poderia retornar resultados inesperados.

### Operador in

O operador in em TypeScript (assim como em JavaScript) é utilizado para verificar se uma propriedade específica existe em um objeto. Ele é útil para validar a presença de propriedades em objetos, especialmente quando se trabalha com objetos dinâmicos ou quando a estrutura do objeto pode variar.

```typescript
    "property" in object
```

* "property": Uma string que representa o nome da propriedade que você deseja verificar.
* object: O objeto no qual você deseja verificar a existência da propriedade.

```typescript
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2022
    };

    console.log("brand" in car); // true
    console.log("color" in car); // false
```

Neste exemplo:

* "brand" in car retorna true porque a propriedade brand existe no objeto car.
*   "color" in car retorna false porque color não é uma propriedade do objeto car.

#### in como Type Guard

Em TypeScript, o operador in pode ser utilizado como um type guard para refinar o tipo de um objeto dentro de um bloco condicional. Isso é especialmente útil quando você está trabalhando com union types ou com objetos que podem ter diferentes formas.

```typescript
    type Square = {
        size: number;
    };

    type Rectangle = {
        width: number;
        height: number;
    };

    function calculateArea(shape: Square | Rectangle): number {
        if ("size" in shape) {
            // TypeScript sabe que 'shape' é um 'Square'
            return shape.size * shape.size;
        } else if ("width" in shape && "height" in shape) {
            // TypeScript sabe que 'shape' é um 'Rectangle'
            return shape.width * shape.height;
        }
        return 0;
    }

    const square: Square = { size: 5 };
    const rectangle: Rectangle = { width: 10, height: 20 };

    console.log(calculateArea(square));    // 25
    console.log(calculateArea(rectangle)); // 200
```

No exemplo acima, o operador in é usado para verificar se a propriedade size existe no objeto shape. Se existir, o TypeScript entende que shape é do tipo Square e permite o acesso à propriedade size.

Se a propriedade size não existir, o código verifica a existência das propriedades width e height, o que permite ao TypeScript inferir que shape é do tipo Rectangle.

#### Vantagens do Uso do Operador in

* **Verificação Segura:** Permite verificar a presença de propriedades em objetos sem lançar exceções caso a propriedade não exista.
* **Type Guard:** Ajuda na verificação de tipos e na execução de código seguro, especialmente quando se trabalha com objetos de tipos variados.
* **Dinamicidade:** Útil quando se trabalha com objetos dinâmicos ou cujo tipo pode variar em tempo de execução.

#### Limitações

* **Verificação Apenas de Propriedades Enumeráveis:** O operador in verifica apenas propriedades enumeráveis. Propriedades não enumeráveis ou símbolos não serão detectados.
* **Herança:** O operador in também verifica propriedades herdadas na cadeia de protótipos, o que pode não ser desejado em todos os casos.

```typescript
    class Animal {
        species = "Unknown";
    }

    class Dog extends Animal {
        breed = "Labrador";
    }

    let myDog = new Dog();

    console.log("breed" in myDog); // true
    console.log("species" in myDog); // true (herdado de Animal)
```

O operador in é uma ferramenta poderosa em TypeScript para verificar a presença de propriedades em objetos. Quando usado corretamente, ele pode atuar como um tipo de guardião eficaz, ajudando a garantir que o código manipule corretamente objetos de diferentes formas ou tipos. No entanto, deve-se estar ciente de suas limitações, especialmente em relação a propriedades herdadas e não enumeráveis.