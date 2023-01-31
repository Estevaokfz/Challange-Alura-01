var textoInput = document.getElementById("textoInput");
var resultadoOutput = document.getElementById("resultadoOutput");

function criptografa() {
    var textoCriptografado = textoInput.value;

    var resultadocripto = textoCriptografado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById("resultadoOutput").innerHTML = resultadocripto
}

function descriptografar() {
    var texto = textoInput.value;

    var resultadodescrito = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("resultadoOutput").innerHTML = resultadodescrito

}
function copiar() {
if(resultadoOutput!=""){
        var textoCopiado = document.getElementById("resultadoOutput");
        textoCopiado.select();
        document.execCommand("copy");
        alert("Texto copiado: " + textoCopiado.value);
    
    }else{
        alert("Não há texto para ser copiado");
    }
}
