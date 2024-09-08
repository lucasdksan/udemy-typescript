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

### Tipo Any

Em TypeScript, o tipo any é um tipo especial que pode representar qualquer valor. Quando uma variável é declarada com o tipo any, o TypeScript desabilita a verificação de tipo para essa variável, permitindo que ela armazene valores de qualquer tipo, seja primitivo (como number, string, boolean) ou complexo (como object, array, function).

#### Flexibilidade

O tipo any é extremamente flexível e permite que você atribua qualquer valor a uma variável, sem restrições.

```typescript
    let valor: any = 5; 
    valor = "Uma string";
    valor = { chave: "valor" };
```

#### Desvantagem

**Perda de Verificação de Tipo:** Ao usar any, você perde a segurança e as vantagens que o TypeScript oferece com a verificação de tipos. 
Isso pode levar a erros em tempo de execução que poderiam ter sido evitados em tempo de compilação.

**Perda de IntelliSense:** Em ambientes de desenvolvimento que suportam IntelliSense (como VSCode), o uso de any pode reduzir a assistência do editor, pois ele não consegue inferir os métodos e propriedades disponíveis para a variável.

#### Uso Cauteloso

Embora any possa ser útil em situações onde o tipo de uma variável é incerto ou em migrações de código JavaScript para TypeScript, é importante usar any com moderação. Em vez disso, é recomendado usar tipos mais específicos ou mesmo unknown, que é um tipo mais seguro que any.

### Tipo de Parâmetro

Em TypeScript, os tipos de parâmetros são usados para definir as expectativas de tipos de argumentos que uma função deve receber. Isso ajuda a garantir que a função seja usada corretamente e previne erros em tempo de compilação.

#### Parâmetros Tipados

Em TypeScript, você pode definir explicitamente o tipo de cada parâmetro de uma função. Isso assegura que a função só aceite valores do tipo especificado.

```typescript
    function soma(a: number, b: number): number {
        return a + b;
    }

    soma(5, 3);  // Ok, ambos os parâmetros são números
    // soma(5, "3"); // Erro, o segundo parâmetro deve ser um número
```

#### Parâmetros Opcionais

Parâmetros opcionais são aqueles que podem ou não ser passados para a função. Eles são definidos adicionando um ? após o nome do parâmetro.

```typescript
    function saudar(nome: string, saudacao?: string): string {
        if (saudacao) {
            return `${saudacao}, ${nome}!`;
        }
        return `Olá, ${nome}!`;
    }

    console.log(saudar("Maria"));            // Saída: Olá, Maria!
    console.log(saudar("Maria", "Bom dia")); // Saída: Bom dia, Maria!
```

#### Parâmetros com Valor Padrão

Você pode definir valores padrão para os parâmetros de uma função. Se nenhum valor for fornecido para um parâmetro com valor padrão, o valor padrão será usado.

```typescript
    function multiplicar(a: number, b: number = 1): number {
        return a * b;
    }

    console.log(multiplicar(5));   // Saída: 5 (b usa o valor padrão 1)
    console.log(multiplicar(5, 2)); // Saída: 10
```

#### Parâmetros Rest (Rest Parameters)

O rest parameter (...) permite que uma função aceite um número indefinido de argumentos como um array. Isso é útil quando você não sabe quantos argumentos serão passados para a função.

```typescript
    function somaTodos(...numeros: number[]): number {
        return numeros.reduce((acc, cur) => acc + cur, 0);
    }

    console.log(somaTodos(1, 2, 3));   // Saída: 6
    console.log(somaTodos(10, 20, 30, 40)); // Saída: 100
```

#### Parâmetros de Funções de Callback

Em funções que aceitam callbacks como parâmetros, é importante definir o tipo dos parâmetros que a função callback deve receber.

```typescript
   function processarArray(arr: number[], callback: (item: number) => number): number[] {
        return arr.map(callback);
    }

    const result = processarArray([1, 2, 3], (num) => num * 2);
    console.log(result);  // Saída: [2, 4, 6]
```

#### Parâmetros Tipados em Objetos

Em funções que aceitam objetos como parâmetros, você pode definir o tipo esperado de cada propriedade do objeto.

```typescript
   interface Usuario {
        nome: string;
        idade: number;
    }

    function exibirUsuario(usuario: Usuario): string {
        return `Nome: ${usuario.nome}, Idade: ${usuario.idade}`;
    }

    const usuario = { nome: "João", idade: 30 };
    console.log(exibirUsuario(usuario));  // Saída: Nome: João, Idade: 30
```

#### Parâmetros de Tipo (Type Parameters)

Com generics, você pode criar funções que são flexíveis e podem funcionar com diferentes tipos sem sacrificar a verificação de tipo.

```typescript
   function identidade<T>(valor: T): T {
        return valor;
    }

    console.log(identidade<string>("Olá")); // Saída: Olá
    console.log(identidade<number>(42));    // Saída: 42
```

Entender os diferentes tipos de parâmetros em TypeScript ajuda a escrever funções mais robustas e seguras, garantindo que o código seja utilizado corretamente e reduzindo a possibilidade de erros. A flexibilidade fornecida por tipos opcionais, valores padrão, rest parameters e generics, por exemplo, permite que você crie funções que sejam tanto seguras quanto adaptáveis às necessidades do seu código.

### Tipo de Retorno

Em TypeScript, o tipo de retorno de uma função define o tipo do valor que a função deve retornar. Especificar o tipo de retorno ajuda a garantir que a função se comporte conforme esperado e que o valor retornado seja do tipo correto.

#### Especificando o Tipo de Retorno

Você pode definir explicitamente o tipo de retorno de uma função logo após os parênteses dos parâmetros, usando uma sintaxe de : seguido do tipo esperado.

```typescript
   function somar(a: number, b: number): number {
        return a + b;
    }
```

#### Tipo de Retorno Implícito

TypeScript é capaz de inferir o tipo de retorno de uma função com base no valor retornado. Isso significa que você pode não precisar especificar o tipo de retorno explicitamente, embora seja uma boa prática fazê-lo para aumentar a clareza do código.

```typescript
  function multiplicar(a: number, b: number) {
        return a * b;  // TypeScript infere que o tipo de retorno é `number`
    }
```

Embora a inferência de tipos seja útil, declarar explicitamente o tipo de retorno pode ajudar a evitar surpresas caso o código mude e o retorno acabe sendo diferente do que você esperava.

#### Funções que Retornam void

O tipo void é usado para funções que não retornam nenhum valor. Essas funções executam uma ação e, em seguida, terminam sem retornar nada.

```typescript
    function exibirMensagem(mensagem: string): void {
        console.log(mensagem);
    }
```

#### Funções que Retornam never

O tipo never é usado para funções que nunca retornam. Isso geralmente é o caso de funções que lançam exceções ou entram em um loop infinito.

```typescript
    function erro(message: string): never {
        throw new Error(message);
    }
```

O tipo never indica que a função não chegará a um ponto onde retorne um valor. Qualquer código após um retorno never é considerado inalcançável.

#### Funções Assíncronas

Em funções assíncronas, o tipo de retorno é automaticamente envolto em uma Promise. Você pode especificar o tipo do valor que a Promise resolverá.

```typescript
    async function buscarDados(url: string): Promise<string> {
        const response = await fetch(url);
        return response.text();
    }

```

Neste exemplo, a função buscarDados retorna uma Promise que, quando resolvida, retorna uma string.

#### Tipo de Retorno em Funções de Callback

Funções de callback também podem ter tipos de retorno definidos, especialmente quando são passadas para outras funções.

```typescript
    function processarArray(arr: number[], callback: (item: number) => string): string[] {
        return arr.map(callback);
    }

    const resultado = processarArray([1, 2, 3], (num) => `Número: ${num}`);
    console.log(resultado);  // Saída: ["Número: 1", "Número: 2", "Número: 3"]
```

Aqui, a função callback tem um tipo de retorno string, e isso é especificado na assinatura da função processarArray.

#### Tipo de Retorno Genérico

Quando você não sabe de antemão qual será o tipo de retorno, pode usar tipos genéricos para criar funções que são flexíveis e adaptáveis a diferentes tipos de dados.

```typescript
    function identidade<T>(valor: T): T {
        return valor;
    }

    const texto = identidade<string>("Olá");
    const numero = identidade<number>(123);
```

A função identidade pode retornar qualquer tipo, dependendo de como ela é chamada, mantendo a segurança de tipo.

Definir o tipo de retorno de funções em TypeScript é uma prática importante para garantir que o código seja consistente e livre de erros. TypeScript oferece uma variedade de opções para especificar tipos de retorno, desde tipos simples como number e string, até tipos mais complexos como void, never, e tipos genéricos. Com a verificação de tipos em tempo de compilação, você pode evitar muitos erros comuns e escrever código mais seguro e legível.

### Funções anônimas

Funções anônimas em TypeScript são funções que não possuem um nome explícito. Elas são usadas frequentemente como argumentos para outras funções, em callbacks, ou em expressões de função. Por serem anônimas, essas funções são definidas no lugar onde são usadas e geralmente são armazenadas em variáveis ou passadas diretamente como parâmetros.

#### Sintaxe Básica

Uma função anônima é simplesmente uma função que não tem nome

```typescript
    const somar = function(a: number, b: number): number {
        return a + b;
    };
```

Neste exemplo, a função anônima é atribuída à constante somar, que pode ser chamada como uma função normal.

#### Funções de Callback

Um dos usos mais comuns de funções anônimas é como callbacks, ou seja, funções passadas como argumentos para outras funções e executadas posteriormente.

```typescript
    const numeros = [1, 2, 3];
    const quadrados = numeros.map(function(num: number): number {
        return num * num;
    });
    console.log(quadrados); // Saída: [1, 4, 9]
```

Aqui, uma função anônima é passada para o método map, que aplica a função a cada elemento do array numeros.

#### Funções Anônimas e Inferência de Tipo

Quando uma função anônima é usada como callback ou atribuída a uma variável que já tem um tipo definido, TypeScript pode inferir os tipos dos parâmetros automaticamente.

```typescript
    const dobro = numeros.map(num => num * 2);
```

Nesse caso, TypeScript infere que num é um number com base no contexto, sem necessidade de uma anotação explícita.

#### Arrow Functions

Uma forma concisa de escrever funções anônimas em TypeScript é utilizando arrow functions (=>). Elas têm uma sintaxe simplificada e não vinculam seu próprio this.

```typescript
    const somar = (a: number, b: number): number => a + b;
```

Essa expressão é funcionalmente equivalente ao exemplo de função anônima anterior, mas usa uma sintaxe mais curta e limpa.

#### Vantagens das Funções Anônimas

**Brevidade:** Funções anônimas permitem que você defina rapidamente uma função para ser usada em um contexto específico, sem a necessidade de dar um nome a ela.

**Encapsulamento:** Elas podem ser úteis para encapsular lógica que só precisa ser usada uma vez, evitando a poluição do escopo global com funções nomeadas desnecessárias.

**Contexto do this:** Arrow functions capturam o contexto this da função de onde são criadas, o que pode evitar confusões quando se trabalha com métodos de classe ou objetos.

#### Limitações

**Depuração:** Como funções anônimas não têm nome, pode ser mais difícil rastrear erros no código, já que as mensagens de erro e stack traces podem ser menos informativas.

**Reutilização:** Funções anônimas não podem ser reutilizadas diretamente, a menos que sejam atribuídas a uma variável ou passada como referência, o que pode levar a um código menos modular.

#### Exemplos de Uso

* Eventos DOM:

```typescript
    document.addEventListener('click', function(event) {
        console.log('Elemento clicado!', event);
    });
```

* Funções Imediatamente Invocadas (IIFE):

```typescript
    (function() {
        console.log('Esta função foi executada imediatamente!');
    })();
```

* Expressões de Função:

```typescript
    const multiplicar = function(x: number, y: number): number {
        return x * y;
    };
```

Funções anônimas em TypeScript são uma ferramenta poderosa para escrever código conciso e encapsulado. Elas são especialmente úteis em callbacks, manipulação de eventos e em situações onde uma função temporária é necessária. A utilização de arrow functions é uma forma popular e eficiente de escrever funções anônimas em TypeScript, trazendo simplicidade e clareza ao código.

### Tipos de objetos

Em TypeScript, objetos são usados para representar coleções de pares chave-valor, onde cada chave é uma string (ou symbol), e os valores podem ser de qualquer tipo. TypeScript permite que você defina a forma exata que esses objetos devem ter, oferecendo uma tipagem segura e estruturada.

#### Definição Básica de Objetos

Um objeto é uma coleção de propriedades, onde cada propriedade tem uma chave e um valor associado.

```typescript
    const pessoa = {
        nome: "João",
        idade: 30,
        casado: true
    };
```

Neste caso, pessoa é um objeto com três propriedades: nome, idade e casado.

#### Tipagem Explícita para Objetos

Para definir o tipo de um objeto em TypeScript, você pode usar uma anotação de tipo que descreve a estrutura esperada.

```typescript
    let pessoa: { nome: string; idade: number; casado: boolean };
    pessoa = {
        nome: "João",
        idade: 30,
        casado: true
    };
```

Aqui, o objeto pessoa deve ter uma propriedade nome do tipo string, uma propriedade idade do tipo number, e uma propriedade casado do tipo boolean.

#### Tipos Opcionais em Objetos

Propriedades em um objeto podem ser marcadas como opcionais usando o operador ?.

```typescript
    let pessoa: { nome: string; idade: number; casado?: boolean };

    pessoa = {
        nome: "João",
        idade: 30
    };
```

A propriedade casado é opcional, então o objeto ainda é válido mesmo sem essa propriedade.

#### Tipos Index Signatures

Às vezes, você pode não saber todas as chaves de um objeto com antecedência, mas sabe o tipo dos valores. Nesses casos, você pode usar uma index signature.

```typescript
    let notas: { [key: string]: number };
    
    notas = {
        matematica: 95,
        fisica: 85,
        quimica: 92
    };
```

Aqui, notas é um objeto onde todas as chaves são strings, e todos os valores são números.

#### Tipos de Objetos Complexos

Objetos podem conter outros objetos ou arrays como propriedades, permitindo a criação de estruturas complexas.

```typescript
    let empresa: {
        nome: string;
        fundacao: number;
        funcionarios: { nome: string; cargo: string }[];
    };

    empresa = {
        nome: "TechCorp",
        fundacao: 2001,
        funcionarios: [
            { nome: "Ana", cargo: "Desenvolvedora" },
            { nome: "Carlos", cargo: "Designer" }
        ]
    };
```

Neste exemplo, empresa tem uma propriedade funcionarios que é um array de objetos, cada um com propriedades nome e cargo.

#### Type Aliases para Objetos

Para evitar repetir longas definições de tipos de objetos, você pode usar type aliases.

```typescript
    type Funcionario = { nome: string; cargo: string };
    type Empresa = {
        nome: string;
        fundacao: number;
        funcionarios: Funcionario[];
    };

    const empresa: Empresa = {
        nome: "TechCorp",
        fundacao: 2001,
        funcionarios: [
            { nome: "Ana", cargo: "Desenvolvedora" },
            { nome: "Carlos", cargo: "Designer" }
        ]
    };
```

Aqui, Funcionario e Empresa são aliases de tipos, tornando o código mais legível e fácil de manter.

#### Intersection Types e Union Types em Objetos

TypeScript permite a criação de tipos que são a combinação (intersecção) ou a escolha entre múltiplos tipos.

**Intersection Types:** combinam vários tipos de objetos

```typescript
    type Endereco = { rua: string; cidade: string };
    type Contato = { email: string; telefone: string };

    type PessoaComEndereco = Endereco & Contato;

    const pessoa: PessoaComEndereco = {
        rua: "Rua A",
        cidade: "Cidade B",
        email: "exemplo@email.com",
        telefone: "1234-5678"
    };
```

**Union Types:** permitem que uma propriedade possa ter diferentes tipos.

```typescript
   type Resposta = string | number | boolean;

    let resposta: Resposta;
    resposta = "Sim";
    resposta = 42;
    resposta = true;
```
#### Objetos como Parametros e Retornos de Funções

Objetos são frequentemente usados como parâmetros e retornos de funções.

```typescript
    type Usuario = { nome: string; idade: number };

    function criarUsuario(nome: string, idade: number): Usuario {
        return { nome, idade };
    }

    const usuario = criarUsuario("João", 30);
```

O uso de tipos de objetos em TypeScript proporciona uma tipagem rigorosa e flexível, permitindo a definição precisa das estruturas de dados. Isso resulta em código mais seguro e fácil de entender, especialmente em aplicações complexas, onde a organização e a clareza dos tipos são cruciais.

### Union type

Union Types em TypeScript permitem que uma variável, propriedade, ou parâmetro aceite valores de múltiplos tipos. Isso é útil quando você deseja que algo possa ter mais de um tipo, proporcionando maior flexibilidade ao seu código, enquanto ainda mantém a segurança de tipos.

#### Definição de Union Type

Um Union Type é definido usando o símbolo | entre os tipos permitidos.

```typescript
    let id: number | string;
    id = 101;   // Válido
    id = "abc"; // Válido
```

#### Uso com Funções

Union Types podem ser usados em parâmetros de funções para aceitar diferentes tipos de argumentos.

```typescript
    function imprimirId(id: number | string) {
        console.log(`O ID é: ${id}`);
    }

    imprimirId(101);   // Output: O ID é: 101
    imprimirId("abc"); // Output: O ID é: abc
```

#### Union Types em Arrays

Você pode criar arrays que aceitem múltiplos tipos de valores usando Union Types.

```typescript
    let dados: (number | string)[];
    dados = [1, "dois", 3, "quatro"];
```

#### Union Types com Objetos

Union Types também podem ser usados em propriedades de objetos.

```typescript
    type Resposta = { sucesso: true; dados: string } | { sucesso: false; erro: string };

    function handleResponse(resposta: Resposta) {
        if (resposta.sucesso) {
            console.log(`Dados: ${resposta.dados}`);
        } else {
            console.log(`Erro: ${resposta.erro}`);
        }
    }
```

#### Union Types e Funções de Retorno

Uma função pode retornar diferentes tipos, dependendo da lógica implementada, e você pode usar Union Types para especificar esses retornos.

```typescript
    function obterValor(valor: number): number | string {
        if (valor > 10) {
            return "Valor alto";
        } else {
            return valor;
        }
    }
```

#### Restrições e Boas Práticas

Embora Union Types sejam poderosos, é importante usá-los de forma a manter o código claro e compreensível. Evite exagerar no uso de muitos tipos dentro de um Union Type, pois isso pode dificultar a manutenção do código.

Union Types são uma ferramenta essencial no TypeScript, proporcionando a flexibilidade de aceitar múltiplos tipos de dados, enquanto ainda se beneficia da tipagem estática. Eles são especialmente úteis quando você precisa manipular diferentes tipos de entradas ou quando o comportamento de uma função varia de acordo com o tipo dos dados fornecidos.

### Type alias

Type Alias é uma funcionalidade do TypeScript que permite dar um nome a um tipo, facilitando a reutilização e leitura do código. Isso é especialmente útil quando você tem tipos complexos que são repetidos em vários lugares ou quando você deseja nomear um Union Type, um Object Type, ou qualquer outro tipo.

####  Definição de Type Alias

Você define um Type Alias usando a palavra-chave type seguida pelo nome do alias e pelo tipo ao qual ele se refere.

```typescript
    type ID = number | string;
```

Agora, você pode usar ID em vez de repetir number | string em todo o seu código.

#### Alias para Tipos Primitivos e Union Types

Você pode criar alias para qualquer tipo, incluindo tipos primitivos, Union Types, e mais.

```typescript
    type Status = "sucesso" | "erro" | "carregando";

    let estadoAtual: Status;
    estadoAtual = "sucesso";  // Válido
    estadoAtual = "erro";      // Válido
    estadoAtual = "falha";     // Erro: 'falha' não faz parte do tipo 'Status'
```

####  Alias para Objetos

Type Alias é frequentemente usado para definir tipos de objetos, facilitando a reutilização e a clareza do código.

```typescript
    type Usuario = {
        id: number;
        nome: string;
        email: string;
    };

    const novoUsuario: Usuario = {
        id: 1,
        nome: "João",
        email: "joao@example.com",
    };
```

#### Alias para Funções

Você pode definir alias para tipos de funções, o que é útil para garantir consistência quando várias funções compartilham a mesma assinatura.

```typescript
    type Operacao = (x: number, y: number) => number;

    const somar: Operacao = (a, b) => a + b;
    const subtrair: Operacao = (a, b) => a - b;
```

#### Alias para Arrays

Alias também podem ser usados para definir tipos de arrays, particularmente se os elementos têm um tipo complexo.

```typescript
    type ListaDeNomes = string[];

    const nomes: ListaDeNomes = ["Alice", "Bob", "Carlos"];
```

#### Alias para Tuplas

Da mesma forma, você pode criar alias para tuplas, o que é útil quando as tuplas têm vários elementos de diferentes tipos.


```typescript
    type Coordenadas = [number, number];

    const ponto: Coordenadas = [10, 20];
```

#### Alias Aninhados

Você pode aninhar alias, usando um alias dentro de outro, o que pode ser útil para construir tipos mais complexos.

```typescript
    type ID = number | string;
    type Usuario = {
        id: ID;
        nome: string;
        email: string;
    };
```

#### Vantagens de Usar Type Alias

**Reutilização:** Você pode reutilizar tipos complexos facilmente em diferentes partes do código.

**Legibilidade:** Nomes de alias podem tornar o código mais legível e mais fácil de entender.

**Manutenção:** Se você precisar mudar a definição de um tipo, basta atualizar o alias em um único lugar.

Type Alias é uma ferramenta poderosa no TypeScript que ajuda a organizar e simplificar o código, tornando-o mais modular e fácil de manter. Eles permitem que você crie nomes descritivos para tipos complexos, melhorando a clareza e a legibilidade do código.

### Introdução as Interfaces

No TypeScript, interfaces são uma poderosa ferramenta que permite definir a forma que objetos, classes e funções devem seguir. Elas são uma maneira de definir contratos para as estruturas de dados, assegurando que um determinado conjunto de propriedades e métodos exista em um objeto ou classe, sem se preocupar com a implementação exata.

#### Definição Básica

Uma interface é definida usando a palavra-chave interface seguida do nome da interface e do corpo da interface, que contém as propriedades e métodos que devem ser implementados.

```typescript
    interface Usuario {
        id: number;
        nome: string;
        email: string;
    }

    const novoUsuario: Usuario = {
        id: 1,
        nome: "João",
        email: "joao@example.com",
    };
```

No exemplo acima, a interface Usuario define que um objeto do tipo Usuario deve ter as propriedades id, nome e email.

#### Propriedades Opcionais

As interfaces podem definir propriedades opcionais usando o caractere ?.

```typescript
    interface Usuario {
        id: number;
        nome: string;
        email: string;
        idade?: number;
    }

    const novoUsuario: Usuario = {
        id: 1,
        nome: "João",
        email: "joao@example.com",
        // idade é opcional
    };
```

Aqui, a propriedade idade é opcional, então objetos que implementam essa interface não precisam obrigatoriamente incluir essa propriedade.

#### Métodos em Interfaces

Interfaces podem também definir métodos, especificando a assinatura do método que as classes ou objetos devem seguir.

```typescript
    interface Usuario {
        id: number;
        nome: string;
        email: string;
        saudar(): string;
    }

    const novoUsuario: Usuario = {
        id: 1,
        nome: "João",
        email: "joao@example.com",
        saudar() {
            return `Olá, meu nome é ${this.nome}`;
        }
    };
```

Nesse exemplo, Usuario define um método saudar que deve ser implementado e retornar uma string.

#### Interfaces e Classes

Interfaces são frequentemente usadas com classes para garantir que uma classe siga uma estrutura específica.

```typescript
    interface Animal {
        nome: string;
        mover(distancia: number): void;
    }

    class Cachorro implements Animal {
        nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }

        mover(distancia: number) {
            console.log(`${this.nome} se moveu ${distancia} metros.`);
        }
    }

    const meuCachorro = new Cachorro("Rex");
    meuCachorro.mover(10); // Output: "Rex se moveu 10 metros."
```

A classe Cachorro implementa a interface Animal, garantindo que tenha uma propriedade nome e um método mover.

#### Extensão de Interfaces

Assim como as classes, interfaces também podem ser estendidas para criar novas interfaces baseadas em outras, permitindo reutilização e composição.

```typescript
    interface Pessoa {
        nome: string;
        idade: number;
    }

    interface Funcionario extends Pessoa {
        salario: number;
    }

    const funcionario: Funcionario = {
        nome: "Carlos",
        idade: 30,
        salario: 50000,
    };
```

Aqui, a interface Funcionario estende Pessoa, herdando suas propriedades e adicionando a nova propriedade salario.

#### Diferença entre Interfaces e Type Alias

Interfaces e Type Aliases podem parecer similares, mas têm diferenças sutis:

* Interfaces podem ser estendidas e implementadas por classes.
* Type Aliases são mais flexíveis, permitindo que você use todos os tipos, inclusive tipos primitivos.
* Em casos onde você precise de herança múltipla, interfaces são a escolha adequada, enquanto type aliases são mais utilizados para definir tipos simples ou complexos de forma rápida.

#### Interfaces vs Classes

* As interfaces são puramente descritivas, enquanto as classes podem conter implementação.

* Interfaces são usadas para definir a "forma" de um objeto, enquanto classes podem também definir comportamento.

Interfaces no TypeScript são uma ferramenta essencial para definir contratos em código, assegurando que os objetos, funções e classes sigam uma estrutura específica. Elas melhoram a legibilidade, a manutenção e a segurança do código, tornando mais fácil trabalhar com grandes projetos em TypeScript.

### Literal types

Literal Types no TypeScript são um recurso que permite especificar valores literais como tipos. Eles restringem o valor de uma variável ou propriedade a um valor específico, ou a um conjunto específico de valores, em vez de permitir qualquer valor do tipo base (como string, number ou boolean).

#### Tipos Literais de String

Com tipos literais de string, você pode restringir uma variável para conter apenas um conjunto específico de valores de string.

```typescript
    type DiaDaSemana = "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta";

    let hoje: DiaDaSemana;

    hoje = "Segunda"; // válido
    hoje = "Domingo"; // Erro: Tipo '"Domingo"' não pode ser atribuído ao tipo 'DiaDaSemana'
```

No exemplo acima, a variável hoje só pode receber um dos valores especificados no tipo DiaDaSemana.

#### Tipos Literais Numéricos

Tipos literais também podem ser usados com números, restringindo uma variável a um valor numérico específico ou a um conjunto de valores.

```typescript
    type UmOuDois = 1 | 2;

    let valor: UmOuDois;

    valor = 1; // válido
    valor = 3; // Erro: Tipo '3' não pode ser atribuído ao tipo 'UmOuDois'
```

Aqui, a variável valor só pode ter os valores 1 ou 2.

#### Tipos Literais de Boolean

Embora o uso de tipos literais booleanos seja menos comum, ele permite restringir uma variável para ser sempre true ou sempre false.

```typescript
    type Verdadeiro = true;

    let estaCerto: Verdadeiro;

    estaCerto = true; // válido
    estaCerto = false; // Erro: Tipo 'false' não pode ser atribuído ao tipo 'Verdadeiro'
```

#### Combinação de Tipos Literais e Union Types

Você pode combinar tipos literais com Union Types para criar tipos mais complexos que permitem uma seleção de valores.

```typescript
    type Resposta = "sim" | "não" | "talvez";

    function responder(pergunta: string, resposta: Resposta) {
        console.log(`Você respondeu "${resposta}" à pergunta: ${pergunta}`);
    }

    responder("Você gosta de TypeScript?", "sim"); // válido
    responder("Você gosta de TypeScript?", "não"); // válido
    responder("Você gosta de TypeScript?", "talvez"); // válido
    responder("Você gosta de TypeScript?", "não sei"); // Erro: Tipo '"não sei"' não pode ser atribuído ao tipo 'Resposta'
```

Neste exemplo, a função responder só aceita três respostas possíveis, garantindo que qualquer valor passado para a função seja estritamente controlado.

#### Uso em Objetos

Tipos literais podem ser usados em conjunto com objetos para definir propriedades específicas que devem ter valores fixos.

```typescript
    interface Configuracao {
        modo: "desenvolvimento" | "producao";
        nivelLog: 0 | 1 | 2;
    }

    const config: Configuracao = {
        modo: "desenvolvimento",
        nivelLog: 1,
    };
```

Aqui, a interface Configuracao define que a propriedade modo só pode ser "desenvolvimento" ou "producao", e nivelLog deve ser 0, 1, ou 2.

#### Literal Types e Funções

Ao usar tipos literais como parâmetros de função, você pode restringir os argumentos para valores específicos

```typescript
    function imprimirStatus(status: "ativo" | "inativo" | "pendente") {
        console.log(`O status atual é: ${status}`);
    }

    imprimirStatus("ativo"); // válido
    imprimirStatus("inativo"); // válido
    imprimirStatus("cancelado"); // Erro: Tipo '"cancelado"' não pode ser atribuído ao tipo '"ativo" | "inativo" | "pendente"'
```

####  Literal Types com const
Usando const, você pode criar uma variável com um tipo literal. O valor da variável é inferido como um tipo literal em vez de um tipo mais geral.

```typescript
    const status = "ativo";
    // O tipo de 'status' é inferido como "ativo", não 'string'
```

Tipos literais no TypeScript são uma forma poderosa de restringir valores possíveis de variáveis, propriedades, parâmetros de funções, entre outros. Eles ajudam a criar APIs e contratos de código mais seguros e previsíveis, pois garantem que apenas valores específicos sejam utilizados, reduzindo a possibilidade de erros.

### Non null assertion operator

O Non-Null Assertion Operator (!) no TypeScript é uma ferramenta poderosa que permite a você dizer ao compilador que uma expressão não é null nem undefined, mesmo que o TypeScript não consiga deduzir isso por conta própria.

#### Uso Básico

Em TypeScript, ao trabalhar com variáveis que podem ser null ou undefined, o compilador normalmente gera um erro se você tentar acessar propriedades ou chamar métodos nessas variáveis sem primeiro verificar se elas são null ou undefined. Isso faz parte do sistema de tipos de segurança para evitar exceções de tempo de execução.

No entanto, em algumas situações, você como desenvolvedor sabe que uma determinada expressão não pode ser null ou undefined, mas o TypeScript não consegue inferir isso. Nesses casos, você pode usar o operador ! para informar ao TypeScript que o valor é garantidamente não nulo.

```typescript
    function processaTexto(texto?: string) {
        // Aqui TypeScript infere que 'texto' pode ser 'undefined'
        console.log(texto!.length); // Non-Null Assertion: Garante que 'texto' não é 'null' ou 'undefined'
    }
```

Neste exemplo, texto é opcional (string?), então poderia ser string ou undefined. Se tentarmos acessar texto.length diretamente, TypeScript emitiria um erro, pois texto pode ser undefined. O operador ! após texto diz ao compilador para tratar texto como string, garantindo que não será null ou undefined.

#### Quando Usar

* **Condições Garantidas:** Use o operador ! quando você tem certeza absoluta de que uma variável não pode ser null ou undefined em um determinado ponto do código, mesmo que o TypeScript não consiga deduzir isso.

* **Desenvolvimento Rápido:** Pode ser usado em protótipos ou código onde você deseja contornar rapidamente as verificações do TypeScript para concentrar-se na lógica principal, mas tenha cuidado, pois isso pode introduzir bugs se usado sem cautela.'

### BigInt

BigInt é um tipo de dado em JavaScript e TypeScript que permite representar e manipular números inteiros que são maiores do que o máximo valor representável com o tipo Number, que é 2^53 - 1. O BigInt é útil quando você precisa trabalhar com inteiros muito grandes, como em cálculos financeiros de alta precisão, algoritmos criptográficos, ou para trabalhar com dados que excedem o limite dos números padrão.

#### Criação de BigInt

* Usando o sufixo n: Adicione n no final do número literal.

```typescript
    const grandeNumero = 1234567890123456789012345678901234567890n;
```

* Usando o construtor BigInt: Converta uma string ou número para BigInt com o construtor.

```typescript
    const numeroDeString = BigInt("1234567890123456789012345678901234567890");
    const numeroDeNumero = BigInt(1234567890);
```

#### Operações com BigInt

Você pode realizar operações matemáticas comuns com BigInt, assim como com números normais. No entanto, algumas operações podem ser restritas e você precisa garantir que os operandos também sejam BigInt.

* Adição, Subtração, Multiplicação e Divisão:

```typescript
    const a = 123456789012345678901234567890n;
    const b = 987654321098765432109876543210n;
    const soma = a + b;
    const diferenca = a - b;
    const produto = a * b;
    const divisao = a / b; // divisão inteira
```

* Módulo:

```typescript
    const modulo = a % b;
```

* Comparação:

```typescript
    const x = 100n;
    const y = 200n;

    console.log(x < y); // true
    console.log(x === 100n); // true
```

#### Restrições e Considerações

* Não pode ser misturado com Number diretamente: Não é possível realizar operações entre BigInt e Number diretamente. Você deve converter ambos para o mesmo tipo antes de operar.

```typescript
    const bigIntValue = 10n;
    const numberValue = 10;

    // const resultado = bigIntValue + numberValue; // Erro
    const resultado = bigIntValue + BigInt(numberValue); // Correto
```

* Não é suportado em métodos de objetos Number: Métodos e funções que operam com o tipo Number não são compatíveis com BigInt. Você deve usar funções que lidam especificamente com BigInt.

#### Usos Comuns

* Cálculos Financeiros: Quando os cálculos envolvem valores monetários que podem ser muito grandes, como o valor total de transações ou moedas digitais.
* Algoritmos Criptográficos: Operações que exigem precisão de grandes números, como na criptografia e segurança de dados.
* Trabalhar com Dados Externos: Ao interagir com APIs ou sistemas que usam grandes identificadores numéricos, como IDs de objetos ou registros.

#### Exemplo de Uso

```typescript
    function calcularFatorial(n: BigInt): BigInt {
        let resultado = 1n;
        for (let i = 1n; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

    const fatorialDe20 = calcularFatorial(20n);
    console.log(fatorialDe20);
```

#### Observações

* **Compatibilidade:** BigInt foi introduzido no ECMAScript 2020 e pode não ser suportado em todos os ambientes ou navegadores mais antigos. Verifique a compatibilidade se você estiver visando ambientes variados.

* **Performance:** Operações com BigInt podem ser mais lentas do que com Number, especialmente quando lidam com valores extremamente grandes.

### Symbol

Symbol é um tipo de dado primitivo em JavaScript (e TypeScript) que representa identificadores únicos e imutáveis. Ele foi introduzido no ECMAScript 2015 (ES6) e é usado para criar propriedades de objetos que são garantidas para serem únicas e não colidirem com outras propriedades, mesmo que o nome da propriedade seja o mesmo.

#### Criação de Symbols

Você pode criar um Symbol usando a função global Symbol(). Cada chamada para Symbol() gera um novo valor único.

```typescript
    const simbolo1 = Symbol();
    const simbolo2 = Symbol();
    console.log(simbolo1 === simbolo2); // false, cada Symbol é único
```

#### Descrição Opcional

Você pode fornecer uma descrição opcional para um Symbol, que pode ser útil para depuração, mas não afeta a unicidade do Symbol.

```typescript
    const simboloDescricao = Symbol("descricao");
    console.log(simboloDescricao.toString()); // "Symbol(descricao)"
```

#### Uso com Propriedades de Objetos

Symbol é frequentemente usado como chaves de propriedades de objetos, garantindo que essas propriedades não sejam sobrescritas acidentalmente.

```typescript
    const id = Symbol("id");

    const usuario = {
        nome: "João",
        [id]: 12345
    };

    console.log(usuario[id]); // 12345
```

#### Propriedades de Objetos com Symbol

Propriedades que usam Symbol são completamente distintas de outras propriedades e não aparecem em iterações comuns sobre o objeto.

```typescript
    const chave = Symbol("chave");

    const objeto = {
        [chave]: "valor"
    };

    console.log(Object.keys(objeto)); // []
    console.log(Object.getOwnPropertyNames(objeto)); // []
    console.log(Object.getOwnPropertySymbols(objeto)); // [Symbol(chave)]
```

#### Symbols Globais

Existem alguns Symbols globais bem conhecidos que são usados para criar comportamentos personalizados em objetos. Esses Symbols são propriedades da global Symbol e têm nomes específicos.

* **Symbol.iterator:** Usado para definir o comportamento de iteração de um objeto.

* **Symbol.toStringTag:** Usado para personalizar a saída de Object.prototype.toString.

* **Symbol.hasInstance:** Usado para personalizar o operador instanceof.

```typescript
    class MinhaClasse {
        [Symbol.hasInstance](instancia: any) {
            return instancia instanceof MinhaClasse;
        }
    }

    const obj = {};
    console.log(obj instanceof MinhaClasse); // false, porque o método [Symbol.hasInstance] está personalizado
```

#### Uso com Iteradores

Você pode usar o Symbol.iterator para definir o comportamento de iteração de um objeto.

```typescript
    const iteradorSimples = {
        [Symbol.iterator]() {
            let passo = 0;
            return {
                next() {
                    passo += 1;
                    return { value: passo, done: passo > 3 };
                }
            };
        }
    };

    for (const valor of iteradorSimples) {
        console.log(valor); // 1, 2, 3
    }
```

#### Imutabilidade e Unicidade

* **Imutabilidade:** Symbols são imutáveis, uma vez criados, eles não podem ser alterados.

* **Unicidade:** Cada Symbol é garantido ser único. Mesmo que você crie dois Symbols com a mesma descrição, eles ainda serão distintos.

#### Exemplo Prático

Um uso prático para Symbols pode ser na implementação de métodos privados 
ou propriedades exclusivas em um objeto:

```typescript
    const logSymbol = Symbol("log");

    class Logger {
        [logSymbol](message: string) {
            console.log(message);
        }
        
        public log(message: string) {
            this[logSymbol](message);
        }
    }

    const logger = new Logger();
    logger.log("Mensagem pública"); // Mensagem pública
    // logger[logSymbol]("Mensagem privada"); // Erro: Propriedade não visível
```

O tipo Symbol é uma ferramenta poderosa para criar identificadores únicos e imutáveis em JavaScript e TypeScript. Ele é frequentemente usado para criar propriedades de objetos que não colidam com outras e para personalizar comportamentos de objetos. Com seu uso, você pode criar APIs mais seguras e evitar conflitos de nomes em grandes aplicações.