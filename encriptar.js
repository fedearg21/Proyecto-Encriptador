function encriptar() {
    let codigo = ["ai", "enter", "imes", "ober", "ufat"];
    let letra = ["a", "e", "i", "o", "u"];

    let frase = document.getElementById('texto-input').value;
    let copiafrase = frase.slice();
    let str = "";
    
    var x = document.getElementById("output-inicial");
    var y = document.getElementById("caja-output");

    for (let i = 0; i < copiafrase.length; i++) {
      if (copiafrase[i] !== "a" && copiafrase[i] !== "e" && copiafrase[i] !== "i" && copiafrase[i] !== "o" && copiafrase[i] !== "u"){
        str += copiafrase[i];
      }
      for (let j = 0; j <letra.length;j++){
        if (copiafrase[i] == letra[j]){      
          str += codigo[j];
        };
      } 
        
    } document.getElementById("output").innerHTML = str;
      x.style.display = "none";
      y.style.display = "block";

}  
  
function desencriptar() {
  let codigo = ["ai", "enter", "imes", "ober", "ufat"];
  let letra = ["a", "e", "i", "o", "u"];

  let frase = document.getElementById('texto-input').value;  

  var x = document.getElementById("output-inicial");
  var y = document.getElementById("caja-output");

  let frase2 = frase.slice();
  frase3 =frase2.replace(/ai/g,'a').replace(/enter/g,'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');
  console.log(frase3)
  document.getElementById("output").innerHTML = frase3;
  x.style.display = "none";
  y.style.display = "block";

}

function copiar() {

  var textoCopiado = document.getElementById("output");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(textoCopiado.value);

}
