const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-resolucion");

function botonEncriptar (){
    const textoEncriptado = encriptar (textArea.value); //llama a la funcion encriptar
    mensaje.value = textoEncriptado;//valor que devuelve 
    textArea.value = "";//limpia la caja de texto
    mensaje.style.backgroundImage = "none";
}

function encriptar (stringEncriptado){ //Creacion de la matriz
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()//Convierte toda entrada de string en minuscula

for (let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptado
}


function botonDesencriptar (){
    const textoEncriptado = desencriptar (textArea.value); //llama a la funcion encriptar
    mensaje.value = textoEncriptado;//valor que devuelve 
    textArea.value = "";
    mensaje.style.backgroundImage = "none";//limpia la caja de texto
}

function desencriptar (stringDesencriptado){ //Creacion de la matriz
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado= stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

