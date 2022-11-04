const inputText=document.querySelector(".text-input");
const message=document.querySelector(".text-show");
let messageDoll=document.querySelector(".messageDoll")
/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */

function encrypt(encryptString) {
    let matriz=[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    encryptString=encryptString.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (encryptString.includes(matriz[i][0])) {
           encryptString=encryptString.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return encryptString;
}

function unencrypt(unencryptString) {
    let matriz=[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    unencryptString=unencryptString.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (unencryptString.includes(matriz[i][1])) {
           unencryptString=unencryptString.replaceAll(matriz[i][1],matriz[i][0]);
           
        }
    }
    return unencryptString;
}
function btnEncriptar() {
    
    let encryptText=encrypt(inputText.value)
    message.value=encryptText;
    message.style.backgroundImage="none";
    inputText.value="";
    messageDoll.style.display="none";
}

function btnDesencriptarr() {
    let unencryptText=unencrypt(inputText.value)
    message.value=unencryptText;
    message.style.backgroundImage="none";
    inputText.value="";
    messageDoll.style.display="none";
}
function btnCopiar() {
    message.select(); /*  selecciona el mensaje al hacer click en el boton copiar */
    navigator.clipboard.writeText(message.value);
    message.value="";
}
