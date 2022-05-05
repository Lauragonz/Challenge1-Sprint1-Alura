let inputTextD = document.querySelector(".input");
let mensajeD =document.querySelector("#codigo");
let botonDes = document.querySelector("#btn-des");

function decodificar(s) {
    var r = '';
    for (var i = 0; i < s.length;i++) {
      switch(s[i]) {
        case 'a': 
            if (s[i + 1] === 'i') { 
                r += 'a'; 
                i += 1;}
            else { return false }
            break;
        case 'e': 
            if (s[i + 4] === 'r') { 
                r += 'e';
                i += 4; }
            else { return false; }
            break;
      case 'i': 
            if (s[i + 3] === 's') {
                r += 'i';
                i += 3; }
            else { return false; }
            break;
      
      case 'o': 
            if (s[i + 3] === 'r') { 
                r += 'o';
                i += 3; }
            else { return false; }
            break;
      case 'u': 
            if (s[i + 3] === 't') {
                r += 'u';
                i += 3; }
            else { return false; }
            break;
      default:
            r += s[i];
      }
    }
    return r;
  }


  botonDes.addEventListener("click", function(){
    mensajeD.value = decodificar(inputTextD.value);
    });