## Type inference e Type annotation

Type Inference e Type Annotation são dois conceitos fundamentais no TypeScript relacionados à tipagem de variáveis, funções, e expressões. Eles ajudam a tornar o código mais seguro e legível, permitindo tanto a inferência automática de tipos quanto a especificação explícita de tipos, conforme necessário.

### Type Inference (Inferência de Tipo)

Type Inference é a capacidade do TypeScript de deduzir automaticamente o tipo de uma variável, função, ou expressão com base no valor atribuído ou no contexto em que é usado. Isso significa que, em muitos casos, você não precisa especificar explicitamente o tipo de uma variável ou função; o TypeScript o faz automaticamente.

```typescript
    let message = "Hello, World!";
    // O TypeScript infere que 'message' é do tipo 'string'
```

**Vantagens da Inferência de Tipo**

* Menos Código Boilerplate: Não é necessário especificar explicitamente o tipo de cada variável ou função, o que reduz o código repetitivo.
* Flexibilidade: Permite que o código seja escrito de maneira mais rápida e concisa, confiando na capacidade do TypeScript de deduzir tipos automaticamente.
* Facilidade de Leitura: O código pode ser mais fácil de ler quando não é sobrecarregado com anotações de tipo desnecessárias.

### Type Annotation (Anotação de Tipo)

Type Annotation é o ato de especificar explicitamente o tipo de uma variável, parâmetro de função, ou valor de retorno de função em TypeScript. Isso é feito usando a sintaxe : seguida pelo nome do tipo após o identificador da variável ou a assinatura da função.

```typescript
    let name: string = "John";
    let age: number = 25;
    let isActive: boolean = true;
```

**Vantagens da Anotação de Tipo**

* Claridade e Intenção: Ao especificar tipos explicitamente, o código se torna mais claro sobre o que é esperado, facilitando a manutenção e o entendimento por outros desenvolvedores.
* Verificação Rigorosa de Tipos: A anotação explícita de tipos força uma verificação rigorosa de tipos, ajudando a detectar erros antecipadamente.
* Suporte a IDE e Ferramentas: Anotações explícitas de tipo ajudam ferramentas como IDEs a fornecer sugestões de autocompletar, navegação de código e refatoração, aumentando a produtividade do desenvolvedor.