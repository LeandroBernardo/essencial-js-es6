//Função nomeada
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(10, 30))


//Função anônima
const somar = function (valor1, valor2) {
    return valor1 + valor2;
}


const mostrarInfo = function (info) {
    console.log(info)
}

mostrarInfo(somar(50, 60))

//Arrow Functions
const somaArrow = (a, b) => a + b
console.log(somar(100, 150))

const mensagem = (data) => {
    if (data === 'OK') {
        return `Você digitou ok`
    }
    return `Você NÃO digitou ok`
}

console.log(mensagem('Pão de batata'))
console.log(mensagem('OK'))