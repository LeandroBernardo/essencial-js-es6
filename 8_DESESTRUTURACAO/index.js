const funcionario = {
    nome: 'Leandro',
    idade: 37,
    email: 'email@gmail.com',
    endereco: {
        rua: 'São Manuel',
        complemento: 'Apto 82'
    }
}

//Acessando as propriedades sem utilizar destructuring
const nomeDoFuncionario = funcionario.nome
const idadeDoFuncionario = funcionario.idade
const emailDoFuncionario = funcionario.email

console.log(nomeDoFuncionario, idadeDoFuncionario, emailDoFuncionario)


//Acessando as propriedades utilizando destructuring
const { nome, idade, email, endereco: { rua, complemento } } = funcionario
console.log(nome, idade, email, rua, complemento)

