## Entendendo os Object Types

Em TypeScript, os object types (tipos de objeto) são uma forma de descrever a estrutura de objetos e as propriedades que eles podem ter. Eles são uma parte fundamental do sistema de tipos do TypeScript, permitindo que você defina e restrinja a forma de dados que um objeto deve ter.

### Características dos Object Types

* Definição de Estrutura:

Tipos de objeto permitem definir a estrutura dos objetos, especificando quais propriedades devem estar presentes e quais são seus tipos.

* Interface e Type Alias:

Tipos de objeto podem ser definidos usando interface ou type. Ambos têm propósitos semelhantes, mas têm diferenças sutis em suas funcionalidades e usos.

### Interface como parâmetro

Em TypeScript, uma interface pode ser usada como tipo de parâmetro em funções, o que permite definir e garantir a estrutura esperada dos objetos que são passados como argumentos. Isso é extremamente útil para assegurar que os dados estejam no formato correto e para aproveitar o sistema de tipos do TypeScript para fornecer dicas de autocompletar e validação de tipos em tempo de compilação.

```typescript
    interface Pessoa {
        nome: string;
        idade: number;
        cpf: string;
    }

    function mostrarDetalhes(pessoa: Pessoa): void {
        console.log(`Nome: ${pessoa.nome}`);
        console.log(`Idade: ${pessoa.idade}`);
        console.log(`CPF: ${pessoa.cpf}`);
    }

    const lucas: Pessoa = {
        nome: "Lucas",
        idade: 26,
        cpf: "07386996322"
    };

    mostrarDetalhes(lucas);
```

* **Definição da Interface:**

A interface Pessoa define que qualquer objeto do tipo Pessoa deve ter as propriedades nome (string), idade (number) e cpf (string).

* **Função com Interface como Parâmetro:**

A função mostrarDetalhes aceita um argumento do tipo Pessoa. Isso significa que você só pode passar para essa função objetos que seguem a estrutura definida pela interface Pessoa.

* **Chamada da Função:**

Ao passar o objeto lucas para a função mostrarDetalhes, o TypeScript verifica se lucas está em conformidade com a interface Pessoa. Como lucas segue a estrutura da interface, a função funciona corretamente e exibe os detalhes da pessoa.

#### Exemplo com Propriedades Opcionais

Você também pode usar uma interface com propriedades opcionais como parâmetro de uma função:

```typescript
    interface Produto {
        nome: string;
        preco: number;
        descricao?: string; // Propriedade opcional
    }

    function mostrarProduto(produto: Produto): void {
        console.log(`Nome: ${produto.nome}`);
        console.log(`Preço: ${produto.preco}`);
        if (produto.descricao) {
            console.log(`Descrição: ${produto.descricao}`);
        } else {
            console.log("Descrição: N/A");
        }
    }

    const produto1: Produto = {
        nome: "Notebook",
        preco: 3000
    };

    const produto2: Produto = {
        nome: "Smartphone",
        preco: 1500,
        descricao: "Tela de 6.5 polegadas"
    };

    mostrarProduto(produto1);
    mostrarProduto(produto2);
```

Nesse exemplo, a função mostrarProduto aceita objetos do tipo Produto, onde a propriedade descricao é opcional. A função verifica se a descrição existe antes de tentar exibi-la.

#### Vantagens

* **Validação de Tipos:** O TypeScript garantirá que o objeto passado para a função tenha todas as propriedades exigidas pela interface, ajudando a evitar erros de tempo de execução.

* **Dicas de Código:** Ferramentas de desenvolvimento (como o VS Code) fornecem autocompletar e validação de código em tempo real com base na interface, o que acelera o desenvolvimento e reduz a probabilidade de erros.

* **Reutilização de Código:** Definir uma interface permite reutilizar o mesmo tipo em várias funções, mantendo a consistência e reduzindo a repetição.

### Propriedades readonly

Em TypeScript, a palavra-chave readonly é usada para tornar as propriedades de um objeto imutáveis, ou seja, uma vez que a propriedade é inicializada, seu valor não pode ser alterado. Isso é útil para garantir que certos valores permaneçam constantes ao longo da vida útil do objeto, fornecendo uma camada adicional de segurança e previsibilidade no código.

Para definir uma propriedade como readonly, basta prefixá-la com a palavra-chave readonly na declaração da interface ou do tipo.

```typescript
    interface Produto {
        readonly id: number;
        nome: string;
        preco: number;
    }

    const produto: Produto = {
        id: 123,
        nome: "Laptop",
        preco: 4500
    };

    // Isso é permitido
    produto.nome = "Laptop Gamer";
    produto.preco = 5000;

    // Isso gera um erro de compilação
    // produto.id = 456; // Error: Cannot assign to 'id' because it is a read-only property.
```


```typescript
    type Ponto2D = {
        readonly x: number;
        readonly y: number;
    }

    const ponto: Ponto2D = { x: 10, y: 20 };

    // Isso gera um erro de compilação
    // ponto.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
```


```typescript
    let lista: readonly number[] = [1, 2, 3, 4];

    // Isso gera um erro de compilação
    // lista.push(5); // Error: Property 'push' does not exist on type 'readonly number[]'.
    // lista[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.
```

* **Imutabilidade Parcial:** readonly não impede que o valor de um objeto inteiro seja alterado, mas apenas as propriedades específicas marcadas com readonly. Se uma propriedade readonly for um objeto ou array, você ainda pode modificar suas propriedades internas ou elementos, a menos que essas também sejam readonly.

* **Somente Leitura, Não Constante:** readonly impede a modificação da propriedade após a inicialização, mas não a impede de ser diferente em diferentes instâncias de um objeto. Ou seja, cada instância pode ter valores diferentes para a propriedade readonly.

```typescript
class Carro {
    readonly marca: string;
    readonly modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarDetalhes(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.mostrarDetalhes();

// Isso gera um erro de compilação
// meuCarro.marca = "Honda"; // Error: Cannot assign to 'marca' because it is a read-only property.
```

Nesse exemplo, as propriedades marca e modelo da classe Carro são marcadas como readonly, e seus valores são definidos no construtor. Após isso, elas não podem ser alteradas.

### Index Signature

Em TypeScript, uma index signature (assinatura de índice) é um recurso que permite que você defina tipos para as propriedades de um objeto cujas chaves não são conhecidas em tempo de compilação ou podem variar dinamicamente. Isso é útil quando você precisa trabalhar com objetos que podem ter um número indefinido de propriedades, todas do mesmo tipo.

Uma index signature é definida na interface ou no tipo literal, especificando o tipo da chave (geralmente string ou number) e o tipo dos valores associados.

```typescript
    interface Dicionario {
        [chave: string]: string;
    }

    const traducoes: Dicionario = {
        "hello": "olá",
        "world": "mundo"
    };

    console.log(traducoes["hello"]); // "olá"
```

Neste exemplo:

* A interface Dicionario usa uma index signature para definir que qualquer propriedade com uma chave do tipo string terá um valor do tipo string.

* O objeto traducoes pode ter qualquer número de propriedades, desde que as chaves sejam do tipo string e os valores também sejam string.

```typescript
    interface Pontuacao {
        [nome: string]: number;
    }

    const pontuacaoJogadores: Pontuacao = {
        "Lucas": 10,
        "Ana": 15,
        "João": 7
    };

    console.log(pontuacaoJogadores["Ana"]); // 15
```

Aqui, a interface Pontuacao define que as chaves são strings (nomes dos jogadores) e os valores são números (pontuação).

#### Index Signatures com number

Você também pode usar number como tipo de chave. Isso é comum em objetos que se comportam como arrays associativos:

```typescript
    interface Arr {
        [indice: number]: string;
    }

    const meuArr: Arr = ["um", "dois", "três"];

    console.log(meuArr[1]); // "dois"
```

Neste exemplo, o índice é numérico e os valores são strings. Note que, na prática, arrays em TypeScript já possuem assinaturas de índice number, então essa abordagem é mais comum em casos onde você define seu próprio tipo de array-like.

#### Index Signatures e Propriedades Declaradas

Você pode combinar uma index signature com propriedades declaradas explicitamente:

```typescript
    interface Configuracao {
        modo: string;
        [config: string]: string | number;
    }

    const configApp: Configuracao = {
        modo: "produção",
        porta: 8080,
        host: "localhost"
    };
```

Aqui, a interface Configuracao define explicitamente uma propriedade modo, mas permite que outras propriedades com chaves do tipo string sejam adicionadas, desde que seus valores sejam do tipo string ou number.

* **Tipo das Chaves:** Geralmente, as chaves de uma index signature são do tipo string ou number, mas você pode restringir ainda mais, se necessário.

* **Compatibilidade com Outras Propriedades:** Ao combinar index signatures com propriedades explicitamente definidas, o tipo dos valores da index signature deve ser compatível com as propriedades declaradas.

* **Uso em Arrays e Objetos Associativos:** Index signatures são muito úteis para trabalhar com estruturas que simulam arrays ou mapas (objetos associativos).

### Herança de interfaces

Em TypeScript, as interfaces podem herdar de outras interfaces, o que permite a criação de hierarquias de tipos e a reutilização de definições de tipos de maneira estruturada. Esse recurso é útil quando você deseja criar uma interface que expande ou estende outra, adicionando novas propriedades ou métodos.

Quando uma interface herda de outra, ela adquire todas as propriedades e métodos da interface pai (ou interfaces pais, no caso de herança múltipla) e pode adicionar suas próprias definições.

```typescript
    interface Animal {
        nome: string;
        idade: number;
    }

    interface Cachorro extends Animal {
        raca: string;
    }

    const meuCachorro: Cachorro = {
        nome: "Rex",
        idade: 5,
        raca: "Labrador"
    };
```

* A interface Animal define as propriedades nome e idade.

* A interface Cachorro herda de Animal e adiciona uma nova propriedade raca.

* A variável meuCachorro precisa ter todas as propriedades de Animal (nome, idade) e também a propriedade raca definida em Cachorro.

#### Herança Múltipla

Uma interface pode herdar de várias outras interfaces, combinando todas as suas propriedades e métodos:

```typescript
    interface Canino {
        uivar(): void;
    }

    interface Felino {
        miar(): void;
    }

    interface Lobo extends Canino, Felino {
        nome: string;
    }

    const loboMisterioso: Lobo = {
        nome: "Ghost",
        uivar: () => console.log("Auuu!"),
        miar: () => console.log("Miau?") // Não é típico, mas possível neste contexto.
    };

    loboMisterioso.uivar(); // "Auuu!"
    loboMisterioso.miar(); // "Miau?"
```

Neste exemplo:

* Lobo herda de Canino e Felino.
* Lobo deve implementar o método uivar de Canino e miar de Felino, além de possuir a propriedade nome.

#### Interfaces e Tipos Literais

Além de herdar de outras interfaces, uma interface pode combinar tipos literais junto com herança:

```typescript
    interface Veiculo {
        marca: string;
    }

    interface Carro extends Veiculo {
        modelo: string;
        ano: number;
    }

    const meuCarro: Carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020
    };
```

Aqui, Carro herda de Veiculo e expande com as propriedades modelo e ano.

#### Regras e Considerações

* **Herança Múltipla:** TypeScript permite herança de várias interfaces. Se houver propriedades ou métodos com o mesmo nome, elas devem ser compatíveis.

* **Tipos Compatíveis:** Quando uma interface filha redefine uma propriedade herdada, o tipo deve ser compatível ou igual ao tipo definido na interface pai.

* **Extensibilidade:** A herança de interfaces promove a reutilização e extensão de tipos, facilitando a manutenção do código.

* **Polimorfismo:** Interfaces herdadas podem ser usadas para implementar polimorfismo em funções ou classes, onde diferentes tipos de objetos podem ser tratados de maneira uniforme.

```typescript
    interface Pessoa {
        nome: string;
        idade: number;
    }

    interface Funcionario extends Pessoa {
        cargo: string;
        salario: number;
    }

    interface Desenvolvedor extends Funcionario {
        linguagemPreferida: string;
    }

    const dev: Desenvolvedor = {
        nome: "Alice",
        idade: 30,
        cargo: "Desenvolvedora",
        salario: 80000,
        linguagemPreferida: "TypeScript"
    };
```

Aqui, Desenvolvedor herda de Funcionario, que por sua vez herda de Pessoa. Desenvolvedor então inclui uma nova propriedade linguagemPreferida, além de todas as propriedades herdadas de Funcionario e Pessoa.