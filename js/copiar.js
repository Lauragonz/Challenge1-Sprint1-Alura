let mensajeC = document.getElementById("codigo");
let botonCop = document.querySelector("#btn-cop");


botonCop.addEventListener("click", function(){
    mensajeC.select();
    mensajeC.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensajeC.value);
    alert("Texto copiado con éxito: " + mensajeC.value)
});
