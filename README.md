# TypeScript do básico ao avançado

Curso TypeScript do básico ao avançado da Udemy.

![TypeScript](/github/javascript-ou-typescript.webp)

## Sumário

* [História](#História)
* [Fundamentos do TypeScript](/02-fundamentos/basic.md#fundamentos-do-typescript)
    1. [O que são tipos?](/02-fundamentos/types.md#o-que-são-tipos)
    2. [Tipos primitivos](/02-fundamentos/prim.md#tipos-primitivos)
        * [Number](/02-fundamentos/prim.md#number)
        * [String](/02-fundamentos/prim.md#string)
        * [Boolean](/02-fundamentos/prim.md#boolean)
    3. [Type inference e Type annotation](/02-fundamentos/TIeTA.md#type-inference-e-type-annotation)
        * [Type Inference](/02-fundamentos/TIeTA.md#type-inference-e-type-annotation)
        * [Type Annotation ](/02-fundamentos/TIeTA.md#type-annotation-anotação-de-tipo)
* [Avançando em tipos](/03-Avan_em_tipos/avan_tipos.md#avançando-em-tipos)
    1. [Arrays](/03-Avan_em_tipos/avan_tipos.md#arrays)
        * [Tipos de Arrays](/03-Avan_em_tipos/avan_tipos.md#tipos-de-arrays-em-typescript)
        * [Operações](/03-Avan_em_tipos/avan_tipos.md#operações-comuns-em-arrays)
        * [Tuplas](/03-Avan_em_tipos/avan_tipos.md#tuplas)
        * [Tipos Genéricos](/03-Avan_em_tipos/avan_tipos.md#arrays-e-tipos-genéricos)
        * [Imutabilidade](/03-Avan_em_tipos/avan_tipos.md#imutabilidade-e-arrays)
    2. [Tipo Any](/03-Avan_em_tipos/avan_tipos.md#tipo-any)
        * [Flexibilidade](/03-Avan_em_tipos/avan_tipos.md#flexibilidade)
        * [Desvantagem](/03-Avan_em_tipos/avan_tipos.md#desvantagem)
        * [Uso Cauteloso](/03-Avan_em_tipos/avan_tipos.md#uso-cauteloso)
    3. [Tipo de Parâmetro](/03-Avan_em_tipos/avan_tipos.md#tipo-de-parâmetro)
        * [Parâmetros Tipados](/03-Avan_em_tipos/avan_tipos.md#parâmetros-tipados)
        * [Parâmetros Opcionais](/03-Avan_em_tipos/avan_tipos.md#parâmetros-opcionais)
        * [Parâmetros com Valor Padrão](/03-Avan_em_tipos/avan_tipos.md#parâmetros-com-valor-padrão)
        * [Parâmetros Rest (Rest Parameters)](/03-Avan_em_tipos/avan_tipos.md#parâmetros-rest-rest-parameters)
        * [Parâmetros de Funções de Callback](/03-Avan_em_tipos/avan_tipos.md#parâmetros-de-funções-de-callback)
        * [Parâmetros Tipados em Objetos](/03-Avan_em_tipos/avan_tipos.md#parâmetros-tipados-em-objetos)
        * [Parâmetros de Tipo (Type Parameters)](/03-Avan_em_tipos/avan_tipos.md#parâmetros-de-tipo-type-parameters)
    4. [Tipo de Retorno](/03-Avan_em_tipos/avan_tipos.md#tipo-de-retorno)
        * [Especificando o Tipo de Retorno](/03-Avan_em_tipos/avan_tipos.md#especificando-o-tipo-de-retorno)
        * [Tipo de Retorno Implícito](/03-Avan_em_tipos/avan_tipos.md#tipo-de-retorno-implícito)
        * [Funções que Retornam void](/03-Avan_em_tipos/avan_tipos.md#funções-que-retornam-void)
        * [Funções que Retornam never](/03-Avan_em_tipos/avan_tipos.md#funções-que-retornam-never)
        * [Funções Assíncronas](/03-Avan_em_tipos/avan_tipos.md#funções-assíncronas)
        * [Tipo de Retorno em Funções de Callback](/03-Avan_em_tipos/avan_tipos.md#tipo-de-retorno-em-funções-de-callback)
        * [Tipo de Retorno Genérico](/03-Avan_em_tipos/avan_tipos.md#tipo-de-retorno-genérico)
    5. [Funções anônimas](/03-Avan_em_tipos/avan_tipos.md#funções-anônimas)
        * [Sintaxe Básica](/03-Avan_em_tipos/avan_tipos.md#sintaxe-básica)
        * [Funções de Callback](/03-Avan_em_tipos/avan_tipos.md#funções-de-callback)
        * [Funções Anônimas e Inferência de Tipo](/03-Avan_em_tipos/avan_tipos.md#funções-anônimas-e-inferência-de-tipo)
        * [Arrow Functions](/03-Avan_em_tipos/avan_tipos.md#arrow-functions)
        * [Vantagens das Funções Anônimas](/03-Avan_em_tipos/avan_tipos.md#vantagens-das-funções-anônimas)
        * [Limitações](/03-Avan_em_tipos/avan_tipos.md#limitações)
        * [Exemplos de Uso](/03-Avan_em_tipos/avan_tipos.md#exemplos-de-uso)
    6. [Tipos de objetos](/03-Avan_em_tipos/avan_tipos.md#tipos-de-objetos)
        * [Definição Básica de Objetos](/03-Avan_em_tipos/avan_tipos.md#definição-básica-de-objetos)
        * [Tipagem Explícita para Objetos](/03-Avan_em_tipos/avan_tipos.md#tipagem-explícita-para-objetos)
        * [Tipos Opcionais em Objetos](/03-Avan_em_tipos/avan_tipos.md#tipos-opcionais-em-objetos)
        * [Tipos Index Signatures](/03-Avan_em_tipos/avan_tipos.md#tipos-index-signatures)
        * [Tipos de Objetos Complexos](/03-Avan_em_tipos/avan_tipos.md#tipos-de-objetos-complexos)
        * [Type Aliases para Objetos](/03-Avan_em_tipos/avan_tipos.md#type-aliases-para-objetos)
        * [Intersection Types e Union Types em Objetos](/03-Avan_em_tipos/avan_tipos.md#intersection-types-e-union-types-em-objetos)
        * [Objetos como Parametros e Retornos de Funções](/03-Avan_em_tipos/avan_tipos.md#objetos-como-parametros-e-retornos-de-funções)
    7. [Union type](/03-Avan_em_tipos/avan_tipos.md#union-type)
        * [Definição de Union Type](/03-Avan_em_tipos/avan_tipos.md#definição-de-union-type)
        * [Uso com Funções](/03-Avan_em_tipos/avan_tipos.md#uso-com-funções)
        * [Union Types em Arrays](/03-Avan_em_tipos/avan_tipos.md#union-types-em-arrays)
        * [Union Types com Objetos](/03-Avan_em_tipos/avan_tipos.md#union-types-com-objetos)
        * [Union Types e Funções de Retorno](/03-Avan_em_tipos/avan_tipos.md#union-types-e-funções-de-retorno)
        * [Restrições e Boas Práticas](/03-Avan_em_tipos/avan_tipos.md#restrições-e-boas-práticas)
    8. [Type Alias](/03-Avan_em_tipos/avan_tipos.md#type-alias)
        * [Definição de Type Alias](/03-Avan_em_tipos/avan_tipos.md#definição-de-type-alias)
        * [Alias para Tipos Primitivos e Union Types](/03-Avan_em_tipos/avan_tipos.md#alias-para-tipos-primitivos-e-union-types)
        * [Alias para Objetos](/03-Avan_em_tipos/avan_tipos.md#alias-para-objetos)
        * [Alias para Funções](/03-Avan_em_tipos/avan_tipos.md#alias-para-funções)
        * [Alias para Arrays](/03-Avan_em_tipos/avan_tipos.md#alias-para-arrays)
        * [Alias para Tuplas](/03-Avan_em_tipos/avan_tipos.md#alias-para-tuplas)
        * [Alias Aninhados](/03-Avan_em_tipos/avan_tipos.md#alias-aninhados)
        * [Vantagens de Usar Type Alias](/03-Avan_em_tipos/avan_tipos.md#vantagens-de-usar-type-alias)
    9. [Introdução as Interfaces](/03-Avan_em_tipos/avan_tipos.md#introdução-as-interfaces)
        * [Definição Básica](/03-Avan_em_tipos/avan_tipos.md#definição-básica)
        * [Propriedades Opcionais](/03-Avan_em_tipos/avan_tipos.md#propriedades-opcionais)
        * [Métodos em Interfaces](/03-Avan_em_tipos/avan_tipos.md#métodos-em-interfaces)
        * [Interfaces e Classes](/03-Avan_em_tipos/avan_tipos.md#extensão-de-interfaces)
        * [Diferença entre Interfaces e Type Alias](/03-Avan_em_tipos/avan_tipos.md#diferença-entre-interfaces-e-type-alias)
        * [Interfaces vs Classes](/03-Avan_em_tipos/avan_tipos.md#interfaces-vs-classes)
    10. [Literal types](/03-Avan_em_tipos/avan_tipos.md#literal-types)
        * [Tipos Literais de String](/03-Avan_em_tipos/avan_tipos.md#tipos-literais-de-string)
        * [Tipos Literais Numéricos](/03-Avan_em_tipos/avan_tipos.md#tipos-literais-numéricos)
        * [Tipos Literais de Boolean](/03-Avan_em_tipos/avan_tipos.md#tipos-literais-de-boolean)
        * [Combinação de Tipos Literais e Union Types](/03-Avan_em_tipos/avan_tipos.md#combinação-de-tipos-literais-e-union-types)
        * [Uso em Objetos](/03-Avan_em_tipos/avan_tipos.md#uso-em-objetos)
        * [Literal Types e Funções](/03-Avan_em_tipos/avan_tipos.md#literal-types-e-funções)
        * [Literal Types com const](/03-Avan_em_tipos/avan_tipos.md#literal-types-com-const)
    11. [Non null assertion operator](/03-Avan_em_tipos/avan_tipos.md#non-null-assertion-operator)
        * [Uso Básico](/03-Avan_em_tipos/avan_tipos.md#uso-básico)
        * [Quando Usar](/03-Avan_em_tipos/avan_tipos.md#quando-usar)
    12. [BigInt](/03-Avan_em_tipos/avan_tipos.md#bigint)
        * [Criação de BigInt](/03-Avan_em_tipos/avan_tipos.md#criação-de-bigint)
        * [Operações com BigInt](/03-Avan_em_tipos/avan_tipos.md#operações-com-bigint)
        * [Restrições e Considerações](/03-Avan_em_tipos/avan_tipos.md#restrições-e-considerações)
        * [Usos Comuns](/03-Avan_em_tipos/avan_tipos.md#usos-comuns)
        * [Exemplo de Uso](/03-Avan_em_tipos/avan_tipos.md#exemplo-de-uso)
        * [Observações](/03-Avan_em_tipos/avan_tipos.md#observações)
    13. [Symbol](/03-Avan_em_tipos/avan_tipos.md#symbol)
        * [Criação de Symbols](/03-Avan_em_tipos/avan_tipos.md#criação-de-symbols)
        * [Descrição Opcional](/03-Avan_em_tipos/avan_tipos.md#descrição-opcional)
        * [Uso com Propriedades de Objetos](/03-Avan_em_tipos/avan_tipos.md#uso-com-propriedades-de-objetos)
        * [Propriedades de Objetos com Symbol](/03-Avan_em_tipos/avan_tipos.md#propriedades-de-objetos-com-symbol)
        * [Symbols Globais](/03-Avan_em_tipos/avan_tipos.md#symbols-globais)
        * [Uso com Iteradores](/03-Avan_em_tipos/avan_tipos.md#uso-com-iteradores)
        * [Imutabilidade e Unicidade](/03-Avan_em_tipos/avan_tipos.md#imutabilidade-e-unicidade)
        * [Exemplo Prático](/03-Avan_em_tipos/avan_tipos.md#exemplo-prático)
* [Narrowing](/04-narrowing/narrowing.md#narrowing)
    1. [Contextualizando Narrowing](/04-narrowing/narrowing.md#contextualizando-narrowing)
    2. [typeof Type Guard](/04-narrowing/narrowing.md#typeof-type-guard)
        * [Como Funciona o typeof Type Guard](/04-narrowing/narrowing.md#como-funciona-o-typeof-type-guard)
        * [Tipos que o typeof Pode Retornar](/04-narrowing/narrowing.md#tipos-que-o-typeof-pode-retornar)
        * [typeof em Condicionais](/04-narrowing/narrowing.md#typeof-em-condicionais)
        * [Limitações do typeof Type Guard](/04-narrowing/narrowing.md#limitações-do-typeof-type-guard)
    3. [Operador instanceof](/04-narrowing/narrowing.md#operador-instanceof)
        * [Como o instanceof Ajuda no Type Guard](/04-narrowing/narrowing.md#como-funciona-o-typeof-type-guard)
        * [Trabalhando com Herança](/04-narrowing/narrowing.md#trabalhando-com-herança)
        * [Limitações do instanceof](/04-narrowing/narrowing.md#limitações-do-instanceof)
    4. [Operador in](/04-narrowing/narrowing.md#operador-in)
        * [in como Type Guard](/04-narrowing/narrowing.md#in-como-type-guard)
        * [Vantagens do Uso do Operador in](/04-narrowing/narrowing.md#vantagens-do-uso-do-operador-in)
        * [Limitações](/04-narrowing/narrowing.md#limitações)
* [Funções com TypeScript](/05-funcoes/funcoes.md#funções-com-typescript)
    1. [Funções sem retorno](/05-funcoes/funcoes.md#funções-sem-retorno)
        * [Funções que Não Precisam Declarar o Retorno](/05-funcoes/funcoes.md#funções-que-não-precisam-declarar-o-retorno)
        * [Funções Assíncronas com Retorno void](/05-funcoes/funcoes.md#funções-assíncronas-com-retorno-void)
        * [Retorno void em Arrow Functions](/05-funcoes/funcoes.md#retorno-void-em-arrow-functions)
    2. [Callback sem argumento](/05-funcoes/funcoes.md#callback-sem-argumento)
    3. [Generic function](/05-funcoes/funcoes.md#generic-function)
        * [Vantagens das Funções Genéricas](/05-funcoes/funcoes.md#vantagens-das-funções-genéricas)
        * [Funções Genéricas com Múltiplos Parâmetros de Tipo](/05-funcoes/funcoes.md#funções-genéricas-com-múltiplos-parâmetros-de-tipo)
        * [Restrições em Tipos Genéricos](/05-funcoes/funcoes.md#restrições-em-tipos-genéricos)
    4. [Constraint em generic function](/05-funcoes/funcoes.md#constraint-em-generic-function)
        * [Restrições em Tipos Genéricos com Interfaces](/05-funcoes/funcoes.md#restrições-em-tipos-genéricos-com-interfaces)
        * [Restrições em Tipos Genéricos com Tipos Primitivos](/05-funcoes/funcoes.md#restrições-em-tipos-genéricos-com-tipos-primitivos)
        * [Vantagens das Constraints](/05-funcoes/funcoes.md#vantagens-das-constraints)
        * [Especificar tipo de argumento](/05-funcoes/funcoes.md#especificar-tipo-de-argumento)
    5. [Argumentos opcionais](/05-funcoes/funcoes.md#argumentos-opcionais)
        * [Observações Importantes](/05-funcoes/funcoes.md#observações-importantes)
    6. [Parâmetro default](/05-funcoes/funcoes.md#parâmetro-default)
        * [Observações Importantes Sobre Parâmetro Default](/05-funcoes/funcoes.md#observações-importantes-sobre-parâmetro-default)
    7. [O tipo unknown](/05-funcoes/funcoes.md#o-tipo-unknown)
        * [Características do Tipo unknown](/05-funcoes/funcoes.md#características-do-tipo-unknown)
        * [Comparação com any](/05-funcoes/funcoes.md#comparação-com-any)
        * [Verificação de Tipo com unknown](/05-funcoes/funcoes.md#verificação-de-tipo-com-unknown)
        * [Usando Type Assertions](/05-funcoes/funcoes.md#usando-type-assertions)
    8. [O tipo never](/05-funcoes/funcoes.md#o-tipo-never)
        * [Características do Tipo never](/05-funcoes/funcoes.md#características-do-tipo-never)
        * [Exemplos de Uso](/05-funcoes/funcoes.md#exemplos-de-uso)
        * [Resumo](/05-funcoes/funcoes.md#resumo)
* [Entendendo os Object Types](/06-object-type/objectType.md#entendendo-os-object-types)
    1. [Características dos Object Types](/06-object-type/objectType.md#características-dos-object-types)
    2. [Interface como parâmetro](/06-object-type/objectType.md#interface-como-parâmetro)
        * [Exemplo com Propriedades Opcionais](/06-object-type/objectType.md#exemplo-com-propriedades-opcionais)
        * [Vantagens](/06-object-type/objectType.md#vantagens)
    3. [Propriedades readonly](/06-object-type/objectType.md#propriedades-readonly)
    4. [Index Signature](/06-object-type/objectType.md#index-signature)
        * [Index Signatures com number](/06-object-type/objectType.md#index-signatures-com-number)
        * [Index Signatures e Propriedades Declaradas](/06-object-type/objectType.md#index-signatures-e-propriedades-declaradas)
    5. [Herança de interfaces](/06-object-type/objectType.md#herança-de-interfaces)
        * [Herança Múltipla](/06-object-type/objectType.md#herança-múltipla)
        * [Interfaces e Tipos Literais](/06-object-type/objectType.md#interfaces-e-tipos-literais)
        * [Regras e Considerações](/06-object-type/objectType.md#regras-e-considerações)
* [Criação de Tipos](/07-create_types/createTypes.md#criação-de-tipos)
    1. [Keyof type operator](/07-create_types/createTypes.md#keyof-type-operator)
        * [Usos Comuns do keyof](/07-create_types/createTypes.md#usos-comuns-do-keyof)
    2. [Typeof type operator](/07-create_types/createTypes.md#typeof-type-operator)
        * [Comparação com keyof](/07-create_types/createTypes.md#comparação-com-keyof)
        * [Uso em Funções](/07-create_types/createTypes.md#uso-em-funções)
* [Classes com Typescript](/08-class/class.md#classes-com-typescript)
    1. [Constructor](/08-class/class.md#constructor)
        * [Características do constructor](/08-class/class.md#características-do-constructor)
    2. [Propriedades readonly](./08-class/class.md#propriedades-readonly)
    3. [Herança e super](/08-class/class.md#herança-e-super)
    4. [Métodos](/08-class/class.md#métodos)
    5. [This](/08-class/class.md#this)
        * [Cuidados com o contexto de this](/08-class/class.md#cuidados-com-o-contexto-de-this)
        * [Solução com .bind()](/08-class/class.md#solução-com-bind)
        * [This em funções de seta (arrow functions)](/08-class/class.md#this-em-funções-de-seta-arrow-functions)
    6. [Getters e Setters](/08-class/class.md#getters-e-setters)
        * [Getters](/08-class/class.md#getters)
        * [Setters](/08-class/class.md#setters)
        * [Benefícios de Getters e Setters](/08-class/class.md#benefícios-de-getters-e-setters)
    7. [Visibilidade](/08-class/class.md#visibilidade)
        * [Public (Padrão)](/08-class/class.md#public-padrão)
        * [Private](/08-class/class.md#private)
        * [Protected](/08-class/class.md#protected)
        * [Comparação entre public, private, e protected](/08-class/class.md#comparação-entre-public-private-e-protected)
        * [Outras Considerações](/08-class/class.md#outras-considerações)
    8. [Static Members](/08-class/class.md#static-members)
        * [Características dos Membros Estáticos:](/08-class/class.md#características-dos-membros-estáticos)
        * [Acessando membros estáticos dentro da classe](/08-class/class.md#acessando-membros-estáticos-dentro-da-classe)
        * [Diferença entre membros estáticos e de instância](/08-class/class.md#diferença-entre-membros-estáticos-e-de-instância)
    9. [Classe abstrata](/08-class/class.md#classe-abstrata)
        * [Características de Classes Abstratas:](/08-class/class.md#características-de-classes-abstratas)
        * [Sintaxe para Classes Abstratas](/08-class/class.md#sintaxe-para-classes-abstratas)
        * [Implementação de Subclasses](/08-class/class.md#implementação-de-subclasses)
        * [Métodos e Propriedades Abstratas](/08-class/class.md#métodos-e-propriedades-abstratas)
* [Decorators](/09-decorators/decorator.md#decorators)
    1. [Decorators de Classe](/09-decorators/decorator.md#decorators-de-classe)
    2. [Decorators de Método](/09-decorators/decorator.md#decorators-de-método)
    3. [Decorators de Propriedade](/09-decorators/decorator.md#decorators-de-propriedade)
    4. [Decorators de Parâmetro](/09-decorators/decorator.md#decorators-de-parâmetro)
    5. [Decorators de Acesso (Getters e Setters)](/09-decorators/decorator.md#decorators-de-acesso-getters-e-setters)
    6. [Sequência de Execução dos Decorators](/09-decorators/decorator.md#sequência-de-execução-dos-decorators)
* [Referências](#referências)

## História

TypeScript é uma linguagem de programação desenvolvida e mantida pela Microsoft. A origem do TypeScript remonta a 2012, quando foi criado por Anders Hejlsberg, um engenheiro de software da Microsoft também conhecido por ter criado o Turbo Pascal e o C#.

A ideia por trás do TypeScript era resolver alguns dos problemas e limitações do JavaScript, especialmente em projetos de grande escala. O JavaScript é uma linguagem dinamicamente tipada, o que significa que a verificação de tipos é feita em tempo de execução, o que pode levar a erros difíceis de rastrear em projetos maiores e mais complexos. TypeScript foi projetado para ser um superconjunto estrito de JavaScript, adicionando recursos como tipagem estática e interfaces, que ajudam os desenvolvedores a detectar erros mais cedo no processo de desenvolvimento, diretamente na fase de escrita do código.

Outro aspecto importante da origem do TypeScript é a sua interoperabilidade com o JavaScript. Como TypeScript é um superconjunto de JavaScript, todo código JavaScript válido também é código TypeScript válido. Isso facilita a adoção gradual de TypeScript em projetos existentes e permite que os desenvolvedores continuem a usar bibliotecas e frameworks JavaScript.


## Referências

- [Udemy](https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/)
- [Chat GPT](https://chat.openai.com/)