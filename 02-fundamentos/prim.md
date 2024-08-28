## Tipos Primitivos

Os tipos primitivos são os tipos básicos e fundamentais em linguagens de programação. Em TypeScript, que é um superconjunto de JavaScript, os tipos primitivos são bastante similares aos do JavaScript, mas com algumas melhorias e funcionalidades adicionais. Vamos explorar cada tipo primitivo de forma mais aprofundada:

### Number

O tipo number é usado para representar números em TypeScript. Diferente de algumas linguagens que distinguem entre números inteiros e números de ponto flutuante, TypeScript usa o tipo number para ambos. O tipo number é baseado no padrão IEEE 754, que é o padrão de representação de ponto flutuante em muitas linguagens de programação.

**Características:**

* Pode representar números inteiros (como 42) e números de ponto flutuante (como 3.14).
* Suporta a notação científica para números grandes ou pequenos (como 1.23e5 para 123000).
* Suporta a manipulação de números especiais como Infinity, -Infinity, e NaN (Not a Number), que são valores reservados usados para * indicar resultados de operações matemáticas inválidas ou indefinidas.

### String

O tipo string é usado para representar texto. Strings em TypeScript são sequências de caracteres Unicode, o que significa que elas podem representar uma ampla gama de caracteres, incluindo emojis e caracteres de outros idiomas.

**Características:**

* Strings podem ser delimitadas por aspas simples ('), aspas duplas ("), ou backticks (`).
* Aspas simples e duplas são intercambiáveis e não afetam o valor da string.
* Backticks permitem a interpolação de strings e a criação de strings multilinhas. A interpolação de strings é feita usando a sintaxe ${} dentro de uma string delimitada por backticks.

### Boolean

O tipo boolean representa um valor lógico que pode ser true (verdadeiro) ou false (falso). Esse tipo é essencial para expressar condições lógicas e controle de fluxo, como em declarações if, while, e operadores ternários.