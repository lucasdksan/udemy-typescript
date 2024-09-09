## Criação de Tipos

### Keyof type operator

O operador keyof em TypeScript é usado para criar um tipo que representa as chaves (ou propriedades) de um tipo de objeto. Ele é útil quando você deseja referenciar as chaves de um tipo existente em outro contexto, permitindo maior flexibilidade e segurança de tipo em funções, interfaces e classes.

Quando aplicado a um tipo de objeto, o operador keyof retorna um tipo que é uma união dos nomes de todas as propriedades desse objeto.

```typescript
    interface Pessoa {
        nome: string;
        idade: number;
    }

    type ChavesPessoa = keyof Pessoa; // "nome" | "idade"
```

Aqui, ChavesPessoa será um tipo que pode ser "nome" ou "idade" — as chaves da interface Pessoa.

#### Usos Comuns do keyof

Com o keyof, você pode criar funções que aceitam chaves de um objeto como argumentos, garantindo que essas chaves sejam válidas:

```typescript
    function obterPropriedade<T, K extends keyof T>(objeto: T, chave: K): T[K] {
        return objeto[chave];
    }

    const pessoa = {
        nome: "Alice",
        idade: 30,
    };

    const nome = obterPropriedade(pessoa, "nome"); // OK
    const idade = obterPropriedade(pessoa, "idade"); // OK
    // const invalido = obterPropriedade(pessoa, "altura"); // Erro: Argumento não é uma chave válida
```

* A função obterPropriedade recebe um objeto do tipo T e uma chave K que é restrita a keyof T.

* O retorno da função é o valor associado à chave no objeto, garantindo que apenas chaves válidas possam ser usadas.

Você pode usar keyof em combinação com outros recursos de TypeScript, como mapped types, para criar tipos que mapeiam as chaves de um tipo de objeto para novos valores:

```typescript
    type LeituraSomente<T> = {
        readonly [K in keyof T]: T[K];
    };

    interface Livro {
        titulo: string;
        autor: string;
        paginas: number;
    }

    const meuLivro: LeituraSomente<Livro> = {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328,
    };

    // meuLivro.titulo = "Novo Título"; // Erro: Não é possível atribuir a 'titulo' porque é uma propriedade de somente leitura
```

* LeituraSomente<T> é um tipo que torna todas as propriedades de T como readonly.

* keyof T permite iterar sobre as chaves de T para criar o novo tipo.

### Typeof type operator

O operador typeof em TypeScript é utilizado para obter o tipo de uma expressão ou de uma variável em tempo de compilação. Isso permite que você infira e reutilize o tipo de variáveis ou expressões em diferentes partes do seu código. O typeof pode ser usado tanto para verificar o tipo em tempo de execução (como em JavaScript) quanto para capturar o tipo estático de uma variável ou expressão.

Quando você usa typeof em TypeScript, ele retorna o tipo estático de uma variável ou expressão, que pode então ser utilizado para declarar outras variáveis ou tipos.

```typescript
    let nome = "Alice";
    let idade = 30;

    type TipoNome = typeof nome; // string
    type TipoIdade = typeof idade; // number
```

* O tipo de nome é inferido como string e o tipo de idade como number.
* Usando typeof, capturamos esses tipos e os associamos aos type aliases TipoNome e TipoIdade.

Agora, TipoNome será do tipo string e TipoIdade será do tipo number.

Você pode usar typeof em conjunto com outras construções de TypeScript para criar tipos dinâmicos baseados em variáveis ou objetos.

```typescript
    const configuracoes = {
        resolucao: "1080p",
        modoCor: "Vivo",
        brilho: 75,
    };

    type Configuracoes = typeof configuracoes;

    // Agora, 'Configuracoes' tem o mesmo tipo que o objeto 'configuracoes'
    const novaConfig: Configuracoes = {
        resolucao: "4K",
        modoCor: "Cinema",
        brilho: 100,
    };
```

Aqui, Configuracoes será um tipo que corresponde ao tipo inferido para o objeto configuracoes. Isso significa que novaConfig deve ter exatamente as mesmas chaves e tipos de valores que configuracoes.

#### Comparação com keyof

Enquanto typeof é usado para capturar o tipo de uma variável ou expressão, keyof é usado para capturar as chaves de um tipo de objeto. Eles podem ser usados juntos para criar tipos mais complexos e dinâmicos.

```typescript
    const usuario = {
        id: 123,
        nome: "João",
        ativo: true,
    };

    type UsuarioChaves = keyof typeof usuario; // "id" | "nome" | "ativo"
```

* typeof usuario retorna o tipo do objeto usuario.
* keyof typeof usuario cria um tipo que é uma união das chaves do objeto ("id", "nome", "ativo").

#### Uso em Funções

O typeof pode ser útil ao trabalhar com funções que devem aceitar ou retornar tipos baseados em outras variáveis ou expressões.

```typescript
    function duplicarValor(valor: typeof idade): typeof idade {
        return valor * 2;
    }

    const resultado = duplicarValor(45); // resultado é do tipo 'number'
```

Aqui, duplicarValor aceita um parâmetro do tipo de idade e retorna o mesmo tipo, garantindo que o tipo correto seja mantido.