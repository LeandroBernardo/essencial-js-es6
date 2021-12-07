function func() {
    const nome = 'Leandro'
    return nome
}

//Não é possível chamar diretamente a variável pois esta está no escopo somente da função
//console.log(nome) Uncaught ReferenceError: nome is not defined

// Para acessar a variável é necessário executar a função 
console.log(func())