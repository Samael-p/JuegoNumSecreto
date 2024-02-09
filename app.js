let numeroSrecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMax =10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
    
function verificarIntento(){
    let numeroDeUsuario =parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSrecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSrecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}
//function limpiarCaja(){
//  let valorCaja= document.querySelector('#valorUsuario');
//valorCaja.value='';
//}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    // si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else {
      //si el numero generado esta incluido en la lista
       if (listaNumerosSorteados.includes(numeroGenerado)){
          return generarNumeroSecreto();
       }else{
        listaNumerosSorteados.push(numeroGenerado);
        console.log(listaNumerosSorteados);
        return numeroGenerado;
         }
    }
}

function condicionesiniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p','Escribe un numero del 1 al 10');
    numeroSrecreto = generarNumeroSecreto();
    intentos = 1;

    console.log(numeroSrecreto);
}

function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesiniciales()
    //desabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

condicionesiniciales();

