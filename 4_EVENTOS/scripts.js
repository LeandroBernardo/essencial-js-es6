//Exemplo de Event Listener
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    alert('Fui clicado')
})

btn.removeEventListener("click", () => {
    alert('Fui clicado')
})

//Exemplo de Event Listener
function handleAlert() {
    alert('Fui clicado novamente')
}
