// Variables => casas que se guardan en la cache y guardan un dato en una cajita como minecraft
let nombre = 'Jeffrey'
let apellido = 'Dominguez P'
let edad = 11

const myHora = document.querySelector('.hora')

function refreshDate() {
  let hora = new Date()

  myHora.innerHTML = `<h1>${hora.toLocaleTimeString()}</h1>`
}

window.addEventListener('DOMContentLoaded', () => {
  refreshDate()

  setInterval(() => {
    refreshDate()
  }, 1000)
})
