class Pessoa {
    constructor(name, sobrenome) {
        this.name = name;
        this.sobrenome = sobrenome;
    }
}

const pessoa1 = new Pessoa('Leandro', 'Bernardo');
const pessoa2 = new Pessoa('Joaquim', 'da Silva');

console.log(pessoa1)
console.log(pessoa1.name)

console.log(pessoa2)
console.log(pessoa2.sobrenome)