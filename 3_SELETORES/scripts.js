//Selecionar o elemento
const hello = document.getElementById("hello");

//Modificar o valor do Elemento
hello.innerText = "Olá Mundo"

//Selecionar o elemento
const hello_2 = document.getElementById("hello_2");

//Modificar o valor do Elemento
hello_2.innerHTML = '<details><summary>Sumário</summary> <p>Conteúdo interno</p> </details>';

//Selecionar e modificar o valor do input
const inp = document.getElementById("inp")
inp.value = 'Esse valor foi mudado'


//Selecionar o valor do input e modificar a propriedade placeholder
const inpPlaceholder = document.getElementById("inpPlaceholder")
inpPlaceholder.setAttribute("placeholder", "Digite seu documento")


//Adicionar um h1 no body
const h1 = document.createElement("h1");
h1.innerText = "H1 adicionado no body";

const body = document.querySelector("body");
body.append(h1)

