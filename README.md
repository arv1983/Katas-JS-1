# Entrega: Katas de JavaScript 1#

## Visão Geral

Um [kata](https://en.wikipedia.org/wiki/Kata_(programming)) é um exercício individual onde você pratica uma habilidade de programação repetidamente. Hoje você irá praticar o uso de loops, condicionais, e expressões JavaScript através de uma série de katas.

Para começar, acesse [este link](https://gitlab.com/kenzie-academy-brasil/se/fe/getting-started-with-javascript/s_js-katas-1), faça o fork e clone o repo. 
Preencha o código que está faltando em cada função dentro do arquivo `katas1.js`. Use um loop `for` ou `while` dentro de cada função. Use `console.log()` para exibir seu resultado no console. Cada kata completado corretamente vale 1 ponto.

## Exemplo

```js
function oneThroughFive() {
    

    // Your code goes below


}
```

Para testar as funções, você precisa chamá-las. Seguindo o exemplo acima, escreveríamos `oneThroughFive()` para chamar a função `oneThroughFive`. Para ver o que esta função retorna no console, podemos escrever `console.log(oneThroughFive())`. Então, no exemplo acima, a função final e a chamada da função subsequente seria algo assim:

```js
function oneThroughFive() {
    
    for (let counter = 1; counter <= 5; counter++) {
        console.log(counter)
    }
    
}

oneThroughFive()
```


## Katas

1.  Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
2.  Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
3.  Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
4.  Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
5.  Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
6.  Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
7.  Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
8.  Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
9.  Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
10. Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)

Faça o push do código para o seu repositório GitLab e implemente-o via GitLab pages. No Canvas, **por favor, envie sua url do Gitlab Pages (ex: https://nomedeusuario.gitlab.io/s\_js-katas-1/)** e no GitLab, adicione o grupo `ka-br-<sua-turma>-correcoes` como membro do seu projeto com a permissão "Reporter".
