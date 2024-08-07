const textArea = document.querySelector(".Texto");
const mensaje = document.querySelector(".muñeco");
const elemento = document.querySelector(".boton-copia");
const botonCopiar = document.querySelector('.copia');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Expresión regular para solo letras minúsculas y espacios
    return regex.test(texto);
}


function btnEncriptar(){
    const texto = textArea.value.trim(); // logica de validador de texto, si esta vacio o si hay texto invalido
    if (texto === "") {
        swal("Ooops...", "¡Debes ingresar algún texto!", "error");
    } else if (!validarTexto(texto)) {
        swal("Error", "El texto no debe contener mayúsculas ni acentos.", "error");
    } else {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.textContent = textoEncriptado
    textArea.value = "";
    mensaje.style.backgraundImage = "none";
    mostrarElemento();
    swal ("ok", "El texto se ha encriptado correctamente", "success");
   }
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
             stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptado;
}



function btnDesencriptar(){
    const texto = textArea.value.trim();
    if (texto === "") {
        swal("Hola", "Debes ingresar o pegar un texto para desencriptar.", "warning");
    } else if (!validarTexto(texto)) {
        swal("Error", "El texto no debe contener mayúsculas ni acentos.", "error");
    } else {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.textContent = textoEncriptado
    textArea.value = "";
    cambiarBoton(); //Cambia el botón a "reiniciar" después de desencriptar // 
    mostrarElemento();    
    
    }
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado;
}

function mostrarElemento() {
    elemento.classList.remove('hidden');
    elemento.classList.add('visible');
    botonCopiar.classList.add('copia');// cambia de color al volverse visible
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        swal("Copiado", "El texto se ha copiado al portapapeles", "success");
    }).catch(err => {
        swal("Error", "No se pudo copiar el texto al portapapeles", "error");
    });
}

function copiarTexto() {
    const textoACopiar = mensaje.textContent; // Obtiene el texto del elemento 'mensaje'
    textArea.value = textoACopiar; // Pega el texto en el área de texto
    copiarAlPortapapeles(textoACopiar); // Copia el texto al portapapeles
}

botonCopiar.addEventListener('click', copiarTexto);


// Función para cambiar el texto y funcionalidad del botón
function cambiarBoton() {
    botonCopiar.value = "Reiniciar";
    botonCopiar.removeEventListener('click', copiarTexto);
    botonCopiar.classList.add('reiniciar'); // cambia de color al cambiar de funcion
    botonCopiar.addEventListener('click',recargarPagina );
}


function recargarPagina() { // reinicio del programa
    window.location.reload();
}
