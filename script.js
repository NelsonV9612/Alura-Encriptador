const inputText=document.querySelector(".text-input");
const message=document.querySelector(".text-show");
let messageDoll=document.querySelector(".messageDoll")
/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */

function encrypt(encryptString) {
    let encryptphrase=encryptString.toLowerCase();
    let finalTex=" ";
    for (let i = 0; i < encryptphrase.length; i++) {
        if (encryptphrase[i]=="a") {
            finalTex=finalTex+"ai";
        }else if (encryptphrase[i]=="e") {
            finalTex=finalTex+"enter";
        }else if (encryptphrase[i]=="i") {
            finalTex=finalTex+"imes";
        }else if (encryptphrase[i]=="o") {
            finalTex=finalTex+"ober";
        }else if (encryptphrase[i]=="u") {
            finalTex=finalTex+"ufat";
        }else{
            finalTex=finalTex+encryptphrase[i];
        }
    }
    return finalTex;
}

function unencrypt(encryptString) {
    let encryptphrase=encryptString.toLowerCase();
    let finalTex=" ";
    for (let i = 0; i < encryptphrase.length; i++) {
        if (encryptphrase[i]=="a") {
            finalTex=finalTex+"a";
            i+=1;
        }else if (encryptphrase[i]=="e") {
            finalTex=finalTex+"e";
            i+=4;
        }else if (encryptphrase[i]=="i") {
            finalTex=finalTex+"i";
            i+=3;
        }else if (encryptphrase[i]=="o") {
            finalTex=finalTex+"o";
            i+=3
        }else if (encryptphrase[i]=="u") {
            finalTex=finalTex+"u";
            i=i+3;
        }else{
            finalTex=finalTex+encryptphrase[i];
        }
    }
    return finalTex;
}
function btnEncriptar() {
    let encryptText=encrypt(inputText.value)
    message.value=encryptText;
    message.style.backgroundImage="none";
    inputText.value="";
    messageDoll.style.display="none";
}

function btnDesencriptar() {
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
