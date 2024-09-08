## Funções com TypeScript

Em TypeScript, as funções são um elemento fundamental da linguagem, permitindo a definição de comportamento e lógica reutilizável no código. TypeScript adiciona tipagem estática às funções, o que traz várias vantagens, como detecção de erros em tempo de compilação e melhor documentação do código

Uma função em TypeScript pode ser definida de forma semelhante ao JavaScript, mas com a adição de anotações de tipo para parâmetros e o valor de retorno.


**Sintaxe Básica**

```typescript
    function nomeDaFuncao(param1: Tipo1, param2: Tipo2): TipoRetorno {
        // Corpo da função
        return algumValor; // O valor retornado deve ser do tipo TipoRetorno
    }
```

* param1: Tipo1: Define um parâmetro chamado param1 do tipo Tipo1.
* TipoRetorno: Define o tipo de dado que a função deve retornar. Se a função não retornar nada, o tipo deve ser void.

### Funções sem retorno

Em TypeScript, quando uma função não retorna um valor, o tipo de retorno dela é especificado como void. Esse tipo indica que a função não retorna nenhum valor útil e geralmente é usada para funções que executam operações como logar mensagens no console, alterar o estado de variáveis, ou realizar efeitos colaterais sem retornar um resultado.

```typescript
    function logarMensagem(mensagem: string): void {
        console.log(mensagem);
    }

    logarMensagem("Esta é uma mensagem de log!"); // Esta é uma mensagem de log!
```

Neste exemplo:

A função logarMensagem aceita um parâmetro do tipo string e não retorna nenhum valor, apenas realiza a operação de logar a mensagem no console.

O tipo de retorno da função é void, o que significa que não há nenhum valor retornado.

#### Funções que Não Precisam Declarar o Retorno

Em TypeScript, se uma função não retorna explicitamente um valor (ou seja, não usa a palavra-chave return), o compilador assume automaticamente que o tipo de retorno é void.

```typescript
    function atualizarStatus(status: string): void {
        // Código para atualizar o status de algo
        console.log(`Status atualizado para: ${status}`);
    }

    atualizarStatus("Em progresso"); // Status atualizado para: Em progresso
```

#### Funções Assíncronas com Retorno void

Quando uma função assíncrona não retorna nenhum valor, o tipo de retorno é Promise<void>. Isso indica que a função retorna uma Promise que, ao ser resolvida, não retorna um valor útil.

```typescript
    async function executarTarefa(): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Tarefa executada!");
    }

    executarTarefa(); // Tarefa executada! (após 2 segundos)
```

Neste exemplo:

A função executarTarefa é assíncrona e retorna uma Promise<void>.
Após a execução de uma operação assíncrona (setTimeout), a função loga uma mensagem no console.

#### Retorno void em Arrow Functions

O conceito de void se aplica da mesma maneira em funções de seta (arrow functions).

```typescript
    const logarErro = (erro: string): void => {
        console.error(`Erro: ${erro}`);
    };

    logarErro("Falha na conexão"); // Erro: Falha na conexão
```

### Callback sem argumento

Em TypeScript, um callback sem argumento é uma função que é passada como parâmetro para outra função, mas que não recebe nenhum argumento quando é invocada. Esse tipo de callback é comum em situações onde você deseja executar uma função após a conclusão de uma tarefa, mas não precisa passar dados para essa função.

**Definindo um Callback sem Argumento**

Para definir um callback sem argumento, você simplesmente declara a função callback sem parâmetros. Aqui está um exemplo básico:

```typescript
    function executarComCallback(callback: () => void): void {
        console.log("Executando uma tarefa...");
        callback(); // Chama o callback sem passar nenhum argumento
    }

    executarComCallback(() => {
        console.log("Callback executado!");
    });
```

**Explicação**

* A função executarComCallback aceita um parâmetro callback, que é uma função sem argumentos e sem retorno (() => void).
* Dentro de executarComCallback, uma mensagem é logada e, em seguida, o callback é invocado.
* Quando executarComCallback é chamada, um callback é passado como uma arrow function que loga "Callback executado!" no console.

### Generic function

Funções genéricas em TypeScript permitem criar componentes que funcionam com uma variedade de tipos em vez de um único tipo. Isso possibilita o reuso de código, mantendo a segurança de tipos. As funções genéricas usam parâmetros de tipo, que são placeholders para o tipo real que será utilizado quando a função for chamada.

Para definir uma função genérica, você utiliza um parâmetro de tipo entre colchetes angulares (<T>) após o nome da função. Esse parâmetro de tipo T (ou qualquer outra letra ou nome) pode ser usado como um tipo para parâmetros, retorno ou até mesmo dentro da função.

```typescript
    function identidade<T>(valor: T): T {
        return valor;
    }

    const numero = identidade(10); // tipo inferido como number
    const texto = identidade("Olá!"); // tipo inferido como string
```

* T é o parâmetro de tipo genérico.
* A função identidade simplesmente retorna o valor que recebe, mas o tipo do valor é genérico, definido no momento da chamada da função.
* O TypeScript infere o tipo de T com base no argumento passado para a função, então numero será do tipo number e texto será do tipo string.

#### Vantagens das Funções Genéricas

**Reuso de Código:**

* Com funções genéricas, você pode escrever uma função uma única vez e aplicá-la a diferentes tipos de dados.

**Segurança de Tipos:**

* TypeScript garante que, ao usar funções genéricas, o tipo correto será utilizado, prevenindo erros comuns de tempo de execução relacionados a tipos.

**Inferência de Tipo:**

* TypeScript muitas vezes pode inferir o tipo genérico a partir do contexto, o que reduz a necessidade de especificar o tipo manualmente.

#### Funções Genéricas com Múltiplos Parâmetros de Tipo

Você pode definir uma função genérica que aceita múltiplos parâmetros de tipo:

```typescript
    function pares<K, V>(chave: K, valor: V): [K, V] {
        return [chave, valor];
    }

    const resultado = pares("idade", 30); // tipo inferido como [string, number]
```

* Aqui, K e V são parâmetros de tipo genéricos.
* A função pares cria um par (tupla) de chave-valor onde tanto a chave quanto o valor podem ser de tipos diferentes.

#### Restrições em Tipos Genéricos

Às vezes, você pode querer restringir o que o parâmetro de tipo pode ser. Isso é feito usando o extends para especificar que o tipo genérico deve ser uma subclasse (ou implementar uma interface) de outro tipo.

```typescript
    function obterPropriedade<T, K extends keyof T>(objeto: T, chave: K): T[K] {
        return objeto[chave];
    }

    const obj = { nome: "Alice", idade: 25 };
    const nome = obterPropriedade(obj, "nome"); // tipo inferido como string
```

Aqui, K extends keyof T garante que K seja uma chave válida de T, e T[K] refere-se ao tipo do valor associado à chave K.

### Constraint em generic function

Em TypeScript, "constraints" (restrições) em funções genéricas são usadas para limitar os tipos que podem ser passados para os parâmetros genéricos. Isso é feito usando a palavra-chave extends, que permite especificar que o tipo genérico deve ser uma subclasse (ou implementar uma interface) de outro tipo. As restrições ajudam a garantir que certas operações são seguras para os tipos com os quais a função genérica será utilizada.

Vamos supor que você quer criar uma função que pega a propriedade de um objeto, mas quer garantir que o tipo passado seja sempre um objeto (e não, por exemplo, um número ou string):

```typescript
    function obterPropriedade<T extends object, K extends keyof T>(objeto: T, chave: K): T[K] {
        return objeto[chave];
    }

    const pessoa = { nome: "Alice", idade: 30 };

    const nome = obterPropriedade(pessoa, "nome"); // "Alice", tipo inferido como string
    const idade = obterPropriedade(pessoa, "idade"); // 30, tipo inferido como number
```

* T extends object: Restringe T para que ele seja sempre um objeto.
* K extends keyof T: Restringe K para que ele seja uma chave válida de T.

Isso significa que você não pode usar essa função com tipos que não sejam objetos ou com chaves que não existam no objeto.

#### Restrições em Tipos Genéricos com Interfaces

Você também pode restringir um tipo genérico para que ele tenha certas propriedades, utilizando interfaces:

```typescript
    interface TemNome {
        nome: string;
    }

    function exibirNome<T extends TemNome>(objeto: T): void {
        console.log(objeto.nome);
    }

    const pessoa = { nome: "Alice", idade: 30 };
    const cachorro = { nome: "Rex", raca: "Labrador" };

    exibirNome(pessoa); // "Alice"
    exibirNome(cachorro); // "Rex"
```

* T extends TemNome: Restringe T para qualquer tipo que tenha uma propriedade nome do tipo string.
* Assim, a função exibirNome pode ser utilizada com qualquer objeto que tenha uma propriedade nome.

#### Restrições em Tipos Genéricos com Tipos Primitivos

Você também pode usar extends para restringir um tipo genérico a um tipo primitivo ou a um conjunto de tipos:

```typescript
    function comparar<T extends number | string>(a: T, b: T): boolean {
        return a === b;
    }

    console.log(comparar(10, 20)); // false
    console.log(comparar("a", "b")); // false
    console.log(comparar("a", "a")); // true
```

* T extends number | string: Restringe T para que ele seja apenas number ou string.
* Isso significa que a função comparar não poderá ser utilizada com tipos diferentes de number ou string.

#### Vantagens das Constraints

* Segurança de Tipo: Elas garantem que o código só aceitará tipos que podem realmente ser utilizados com segurança, evitando erros de tempo de execução.

* Reutilização e Flexibilidade: Mesmo com restrições, as funções genéricas ainda oferecem flexibilidade, permitindo o reuso em diferentes contextos, mas dentro de limites seguros.

#### Especificar tipo de argumento

```typescript
    function mergeArrays<T>(arr1: T[], arr2: T[]): T[]{
        return arr1.concat(arr2);
    }

    console.log(mergeArrays([1, 2, 3], [4, 5]));
    // console.log(mergeArrays([1, 2, 3], ["as", "As"])); 
    console.log(mergeArrays<number | string>([1, 2, 3], ["as", "As"])); 
```

Quando é atribuido um tipo, o generico não vai aceitar uma variação na tipagem. Mas, colocando ```<number | string>``` o typescript subentende que o generic pode aceitar mais de um tipo sem precisar alterar o codigo principal.

### Argumentos opcionais

Em TypeScript, argumentos opcionais são parâmetros de função que não são obrigatórios. Eles permitem que uma função seja chamada com ou sem esses parâmetros. Para marcar um argumento como opcional, você usa o símbolo ? após o nome do argumento.

```typescript
    function exemplo(arg1: string, arg2?: number): void {
        console.log("Argumento 1:", arg1);
        if (arg2 !== undefined) {
            console.log("Argumento 2:", arg2);
        } else {
            console.log("Argumento 2 não foi fornecido.");
        }
    }
```

arg2?: number: O ponto de interrogação (?) indica que arg2 é opcional. Isso significa que a função pode ser chamada com apenas arg1 ou com ambos arg1 e arg2.

#### Observações Importantes

1. Ordem dos Argumentos Opcionais:

* Argumentos opcionais devem vir após os obrigatórios. Colocar um argumento opcional antes de um obrigatório não é permitido.

2. Comportamento de Argumentos Opcionais:

* Se um argumento opcional não for fornecido, ele será undefined dentro da função.
* Você pode usar undefined como um valor explícito para um argumento opcional.

3. Valor Padrão em Argumentos Opcionais:

* Em vez de usar argumentos opcionais, você pode definir um valor padrão para um argumento. Isso é útil quando você quer fornecer um valor específico se o argumento não for passado.

### Parâmetro default

Em TypeScript, parâmetros com valores padrão (default parameters) permitem que você defina um valor inicial para um parâmetro em uma função. Se o argumento correspondente não for passado na chamada da função, o valor padrão será usado.

```typescript
    function exemplo(arg1: string, arg2: number = 10): void {
        console.log("Argumento 1:", arg1);
        console.log("Argumento 2:", arg2);
    }
```

#### Observações Importantes Sobre Parâmetro Default

* **Parâmetros Default e Argumentos Opcionais:**

Parâmetros com valores padrão tornam-se automaticamente opcionais. Se um valor não for passado, o parâmetro assume o valor padrão, em vez de ser undefined.

* **Combinação de Parâmetros Default e Opcionais:**

Você pode combinar parâmetros opcionais e com valores padrão, mas a ordem ainda é importante. Parâmetros opcionais que não têm valores padrão devem aparecer após os obrigatórios e os que têm valores padrão.

* **Valor Padrão Complexo:**

O valor padrão pode ser uma expressão mais complexa, não precisa ser uma constante simples.

### O tipo unknown

O tipo unknown em TypeScript é um tipo seguro que foi introduzido para lidar com valores de tipo desconhecido, fornecendo uma alternativa mais restritiva ao tipo any. Diferente de any, o tipo unknown força o desenvolvedor a realizar verificações de tipo (type checks) antes de realizar operações sobre o valor, garantindo maior segurança e evitando potenciais erros.

#### Características do Tipo unknown

1. Mais seguro que any:

Enquanto o tipo any permite que qualquer operação seja realizada sobre um valor sem restrições, unknown impõe uma verificação de tipo antes de qualquer manipulação, promovendo práticas de codificação mais seguras.

2. Atribuição de Valores:

Um valor de tipo unknown pode ser atribuído a variáveis de tipo unknown ou any, mas não pode ser atribuído diretamente a variáveis de tipos específicos, como string, number, ou boolean, sem antes ser verificado ou convertido explicitamente.

3. Uso em Funções:

Funções que retornam valores de tipos incertos podem utilizar unknown para indicar que o valor retornado deve ser verificado antes de ser usado.

```typescript
    let valorDesconhecido: unknown;
    valorDesconhecido = 42;
    valorDesconhecido = "uma string";
    valorDesconhecido = true;
```

Aqui, valorDesconhecido pode receber valores de qualquer tipo, assim como uma variável do tipo any. No entanto, se tentarmos realizar qualquer operação sem uma verificação de tipo, TypeScript gerará um erro.

#### Comparação com any

```typescript
    let valorAny: any;
    valorAny = 42;
    valorAny.toFixed(); // Funciona, mas pode gerar erro em tempo de execução se não for um número.

    let valorUnknown: unknown;
    valorUnknown = 42;
    // valorUnknown.toFixed(); // Erro: O objeto de tipo 'unknown' não tem nenhuma propriedade 'toFixed'.
```

No exemplo acima, a variável valorAny permite chamar o método toFixed() diretamente, mas isso pode levar a erros em tempo de execução se valorAny não for um número. Com unknown, TypeScript impede essa operação sem uma verificação prévia.

#### Verificação de Tipo com unknown

Para usar valores de tipo unknown, você deve realizar uma verificação de tipo:

```typescript
    if (typeof valorUnknown === "number") {
        console.log(valorUnknown.toFixed(2)); // Agora é seguro usar toFixed.
    }
```

#### Usando Type Assertions

Você pode usar "type assertions" (as expressões as) para afirmar um tipo específico para uma variável de tipo unknown:

```typescript
    let valorUnknown: unknown = "uma string";
    let valorString: string = valorUnknown as string;
    console.log(valorString.length); // Agora é seguro usar length.
```

* O tipo unknown é uma alternativa mais segura ao any, promovendo a verificação de tipos antes de operar sobre valores.
* Ele protege o código de erros em tempo de execução, forçando o desenvolvedor a verificar ou afirmar o tipo do valor antes de usá-lo.
* É ideal para cenários onde o tipo exato de um valor não é conhecido ou é dinâmico, mas ainda se deseja manter a segurança e a robustez do código.

### O tipo never

O tipo never em TypeScript é um tipo especial que representa valores que nunca ocorrem. Ele é usado para indicar que uma função, variável, ou expressão não pode produzir um valor válido. Esse tipo é frequentemente utilizado em situações onde o código não deve, sob nenhuma circunstância, retornar um valor, como em funções que lançam erros ou que nunca terminam (loops infinitos).

#### Características do Tipo never

1. Funções que Nunca Retornam:

Uma função que lança uma exceção ou que entra em um loop infinito pode ter o tipo de retorno never, já que essas funções não retornam um valor.

2. Tipos Exauridos:

O tipo never também é útil em "type guards" (verificações de tipo) quando você exauriu todas as possibilidades de tipos, indicando que o código restante nunca será alcançado.

3. Assinatura do Tipo:

O never é um subtipo de todos os outros tipos, o que significa que ele pode ser atribuído a qualquer outro tipo, mas nenhum outro tipo pode ser atribuído a never (exceto never mesmo).

#### Exemplos de Uso

1. Funções que Lançam Exceções

```typescript
    function erroGrave(mensagem: string): never {
        throw new Error(mensagem);
    }
```

Nesta função, o tipo de retorno é never porque ela sempre lança uma exceção e, portanto, nunca retorna um valor.

2. Funções que Entram em Loop Infinito

```typescript
    function loopInfinito(): never {
        while (true) {
            console.log("Looping para sempre...");
        }
    }
```

Aqui, a função entra em um loop infinito e, portanto, nunca retorna um valor.

3. Uso em Type Guards

O never é útil em verificações de tipo exaustivas, especialmente em type guards:

```typescript
    type Forma = "círculo" | "quadrado" | "triângulo";

    function area(forma: Forma) {
        switch (forma) {
            case "círculo":
                // calcular área do círculo
                break;
            case "quadrado":
                // calcular área do quadrado
                break;
            case "triângulo":
                // calcular área do triângulo
                break;
            default:
                const nuncaAcontece: never = forma;
                throw new Error(`Forma desconhecida: ${nuncaAcontece}`);
        }
    }
```

Neste exemplo, o bloco default no switch usa never para garantir que todas as possibilidades de tipos tenham sido tratadas. Se algum dia a união de tipos de Forma mudar e um novo tipo for adicionado sem um caso correspondente no switch, o TypeScript gerará um erro de compilação.

#### Resumo

* Finalidade: O tipo never é usado para funções ou expressões que nunca retornam um valor, como aquelas que lançam exceções ou entram em loops infinitos.

* Segurança: Ele ajuda a garantir que todas as possibilidades de tipo foram cobertas em verificações de tipo (type guards).

* Atribuição: O never pode ser atribuído a qualquer tipo, mas nenhum outro tipo pode ser atribuído a never.

O uso do tipo never ajuda a tornar o código mais seguro e previsível, especialmente em situações onde o comportamento inesperado deve ser evitado ou onde é importante garantir que todas as condições possíveis sejam tratadas.