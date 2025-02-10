// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigos = [];
/*
  -La siguiente funcion va Agregar amigos y guardarlos en la array.
  -Va a verificar que no se ingrese vacio.
  -Borrar lo que se ingrese en el cuadro de texto.
*/
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if(amigo != ""){
        nombreDeAmigos.push(amigo);
        limpiarCajas();
    }else{
        alert('Por favor, inserte un nombre.');
    }
    actualizarAmigos();
    
}

// La siguiente funcione se trata de agregar amigos a la lista e ir actualizand
function actualizarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < nombreDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombreDeAmigos[i];
        listaAmigos.appendChild(li);
    }
}

/*
    En esta funcion se trata de elegir un numero al "azar" y ese numero que salga se le asigna a la array
    para que devuela el amigo en esa posicion
*/
function sortearAmigo() {
    let cuadroResultado = document.getElementById('resultado');
    let numeroGenerado = Math.floor(Math.random()*nombreDeAmigos.length);
    if (nombreDeAmigos.length > 1) {
        
        cuadroResultado.innerHTML = nombreDeAmigos[numeroGenerado];
        console.log(numeroGenerado);
    } else (
        alert('Debes tener mas de un amigo para poder sortear')
    )
}

//Esta funcion sirve para vaciar la caja de Texto
function limpiarCajas(){
    document.getElementById("amigo").value = ''; 
}


//Esta funcion es para darle un tipo de "Plus" al programa, por si se quieres hacer otro sorteo
function reiniciar() {
    nombreDeAmigos = [];
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    
}