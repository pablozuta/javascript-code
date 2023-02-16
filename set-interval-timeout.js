// SET TIMEOUT
setTimeout(() => {
  console.log("I'm writen First in The Code")
  console.log('Hello 5 Seconds')
}, 5000)

setTimeout(() => {
  console.log("I'm writen Second in The Code")
  console.log('Hello 2 Seconds')
  console.log('-------------------------------------------------')
}, 2000)

// Timeout llamando a una funcion
setTimeout(() => {
  Hola()
}, 4000)

function Hola() {
  console.log('Hola')
}

// SET INTERVAL
miIntervalo = setInterval(() => {
  console.log('Ejecutare este codigo cada 2 segundos')
}, 2000)

setTimeout(() => {
  console.log('Parar set interval')
  clearInterval(miIntervalo)
}, 20000)
