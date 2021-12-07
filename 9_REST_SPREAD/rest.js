//O rest nos permite passar uma quantidade indefinida de argumentos 

//Exemplo 1
//Mensagem de boas vindas para mais de uma pessoa

function message(msg, ...nomes) {
    return msg + nomes.join(', ')
}

const greeting = message('sejam bem vindos ', 'João', 'Alberto', 'Maria')
console.log(greeting)

//Exemplo 2
function sum(...numbers) {
    return numbers.reduce((accumulator, current) => {
        return accumulator += current;
    });
};

console.log(sum(1, 2, 6, 48, 89))