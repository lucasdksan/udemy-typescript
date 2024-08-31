## Avançando em tipos

### Arrays

Arrays são estruturas de dados fundamentais em TypeScript que permitem armazenar e manipular coleções de elementos de mesmo tipo. Em TypeScript, arrays oferecem tipagem estática, o que significa que você pode definir explicitamente o tipo de elementos que o array pode conter, proporcionando segurança e previsibilidade no desenvolvimento de aplicações.

#### Tipos de Arrays em TypeScript

**Array de um Tipo Específico**

Você pode definir arrays que contenham apenas elementos de um tipo específico. Isso é feito utilizando a sintaxe de colchetes [] ou usando o tipo Array<T>.

* Sintaxe com Colchetes []:

```typescript
    let numbers: number[] = [1, 2, 3, 4, 5];
    let fruits: string[] = ['apple', 'banana', 'cherry'];
```

* Sintaxe com Array<T>: 

```typescript
    let numbers: Array<number> = [1, 2, 3, 4, 5];
    let fruits: Array<string> = ['apple', 'banana', 'cherry'];
```

Ambas as sintaxes são equivalentes, e a escolha entre elas é uma questão de preferência pessoal ou de convenção de código.

**Array de Tipos Múltiplos (Union Types)**

TypeScript permite criar arrays que podem conter elementos de múltiplos tipos usando union types. Isso é útil quando você precisa de mais flexibilidade sobre o tipo de dados que seu array pode armazenar.

```typescript
    let mixedArray: (number | string)[] = [1, 'apple', 2, 'banana'];
```

**Arrays de Objetos**

Você também pode definir arrays de objetos especificando o tipo dos objetos que o array conterá.

```typescript
    interface Person {
    name: string;
    age: number;
    }

    let people: Person[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
    ];
```

#### Operações Comuns em Arrays

TypeScript herda todas as operações de arrays do JavaScript, como adicionar, remover e manipular elementos. Aqui estão algumas operações comuns em arrays:


**Adicionar Elementos**

* push: Adiciona um ou mais elementos ao final do array.

```typescript
    let numbers: number[] = [1, 2, 3];
    numbers.push(4);
    console.log(numbers); // [1, 2, 3, 4]
```

* unshift: Adiciona um ou mais elementos ao início do array.

```typescript
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4]

```

**Remover Elementos**

* pop: Remove o último elemento do array e o retorna.

```typescript
    let lastNumber = numbers.pop();
    console.log(lastNumber); // 4
    console.log(numbers); // [0, 1, 2, 3]
```

* shift: Remove o primeiro elemento do array e o retorna.

```typescript
    let firstNumber = numbers.shift();
    console.log(firstNumber); // 0
    console.log(numbers); // [1, 2, 3]
```

**Concatenar Arrays**

concat: Retorna um novo array resultante da concatenação de dois ou mais arrays.

```typescript
    let moreNumbers = [4, 5, 6];
    let combined = numbers.concat(moreNumbers);
    console.log(combined); // [1, 2, 3, 4, 5, 6]
```

**Buscar Elementos**

* indexOf: Retorna o índice da primeira ocorrência de um elemento no array, ou -1 se o elemento não for encontrado.


```typescript
    let index = numbers.indexOf(2);
    console.log(index); // 1
```

* find e findIndex: Procuram por elementos em um array com base em uma função de teste.


```typescript
    let found = numbers.find(num => num > 2);
    console.log(found); // 3

    let foundIndex = numbers.findIndex(num => num > 2);
    console.log(foundIndex); // 2
```

**Transformar Arrays**

* map: Cria um novo array com os resultados da aplicação de uma função a cada elemento do array original.


```typescript
    let doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6]
```

* filter: Cria um novo array com todos os elementos que passaram em uma função de teste.


```typescript
   let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // [2]
```

**Reduzir Arrays**

reduce: Executa uma função redutora sobre cada elemento do array, resultando em um único valor.

```typescript
    let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    console.log(sum); // 6
```

#### Tuplas

TypeScript também oferece suporte a tuplas. Uma tupla é um array com um número fixo de elementos cujo tipo é conhecido, mas pode ser diferente para cada elemento. As tuplas são úteis quando você deseja armazenar uma coleção de valores heterogêneos com um tamanho fixo.

```typescript
    let tuple: [string, number, boolean];
    tuple = ['hello', 42, true]; // Correto
    // tuple = [42, 'hello', true]; // Erro: O tipo 'number' não é atribuível ao tipo 'string' na primeira posição
```

#### Arrays e Tipos Genéricos

Em TypeScript, você pode usar tipos genéricos para criar funções e classes que funcionam com qualquer tipo de array.

**Função Genérica para Arrays**

```typescript
    function getFirstElement<T>(array: T[]): T {
    return array[0];
    }

    let firstNumber = getFirstElement<number>([1, 2, 3]); // Retorna 1
    let firstString = getFirstElement<string>(['a', 'b', 'c']); // Retorna 'a'
```

#### Imutabilidade e Arrays

Embora TypeScript não imponha imutabilidade, é uma prática comum, especialmente em ambientes de desenvolvimento funcional ou ao trabalhar com estados em frameworks como React. Métodos como concat, map, filter, e reduce retornam novos arrays sem modificar o original, promovendo práticas de codificação seguras e previsíveis.

```typescript
    let original = [1, 2, 3];
    let newArray = original.map(num => num * 2);

    console.log(original); // [1, 2, 3]
    console.log(newArray); // [2, 4, 6]
```