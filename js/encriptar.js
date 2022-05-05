let inputText = document.querySelector(".input");
let mensaje =document.querySelector("#codigo");
let botonEnc = document.querySelector("#btn-enc");

function Cod(x) {
  switch(x) {
    case 'a': return 'ai';
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default : return x;
  }
}

botonEnc.addEventListener("click", function(){
  let text = inputText.value;
  let r = "";
  for (const c of text) {
      r += Cod(c);
  }
  
  mensaje.value = r;
});