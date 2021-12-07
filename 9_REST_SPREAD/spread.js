const obj1 = {
    name: 'Leandro',
    idade: 37
}

const obj2 = {
    cpf: 123456
}

//O spread faz com que ocorra o "espalhamento" das propriedade de um objeto em outro objeto, 
//fazendo com que estes estejam no mesmo nível

//Criando um objeto 3 sem utilizado o spread
const obj3 = {
    obj1,
    obj2,
}

console.log(obj3) //{ obj1: { name: 'Leandro', idade: 37 }, obj2: { cpf: 123456 } }

//Criar um objeto utilizado o spread
const obj1E2 = {
    ...obj1,
    ...obj2
}
console.log(obj1E2) //{ name: 'Leandro', idade: 37, cpf: 123456 }