// function ingresarTexto() {
//     var botonCopiar = document.querySelector('copiar')
//     var texto = document.getElementById('conTexto')
//     var areaTexto = document.getElementById('areaTexto').value
//     if(areaTexto == '') {
//         texto.style.display = 'none'
//         sinTexto.style.display = 'block'
//         botonCopiar.disabled = true;
//     } else {
//         outputTexto.style.display = 'block'
//         sinTexto.style.display = 'none'
//         botonCopiar.disabled = false;
//     }
// }

// function encriptar() {
//     var areaTexto = document.getElementById('areaTexto').value
//     var encriptado = areaTexto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
//     console.log(encriptado);
//     var outputTexto = document.getElementById('conTexto')
//     outputTexto.value = encriptado
// }

// function desencriptar() {
//     var areaTexto = document.getElementById('areaTexto').value
//     var desencriptado = areaTexto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
//     var outputTexto = document.getElementById('conTexto')
//     outputTexto.value = desencriptado
// }



let texto = document.getElementById("texto");
let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let resultado = document.getElementById("resultado");
let fraseEncriptada = "";

encriptar.addEventListener("click", function(e) {
  e.preventDefault()
  let frase = texto.value.toLowerCase();
  for (let i = 0; i < frase.length; i++) {
    let copia = frase[i];

    if (copia == "a") {
      fraseEncriptada += "ai";
    } else if (copia == "e") {
      fraseEncriptada += "enter";
    } else if (copia == "i") {
      fraseEncriptada += "imes";
    } else if (copia == "o") {
      fraseEncriptada += "ober";
    } else if (copia == "u") {
      fraseEncriptada += "ufa";
    } else {
      fraseEncriptada += copia;
    }
  }
  resultado.innerHTML = fraseEncriptada;
  fraseEncriptada = "";
});

desencriptar.addEventListener('click', function(){
  let frase = texto.value.toLowerCase()
  resultado.innerHTML = frase;
})

function copiar() {
    var aCopiar = document.getElementById('texto').value
    navigator.clipboard.writeText(aCopiar)
    .then(() => {
        alert("Texto copiado con éxito")
    })
    .catch(() => {
        alert("Algo salió mal")
    })}