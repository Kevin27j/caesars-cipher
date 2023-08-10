const encryptedInput = document.getElementById("encrypt-input");
const encryptButton = document.getElementById("encrypt-button");
const decryptedOutput = document.getElementById("decrypt-output");

function handleClick(){
    decryptedOutput.innerText = rot13(encryptedInput.value);
}

function rot13(text){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyAlphabet = alphabet.substring(13) + alphabet.substring(0, 13);
    let result = "";

    for (let i = 0; i < text.length; i++){
        let currentCharacter = text[i];
        // find index of current character, and transform to upper case
        let index = alphabet.indexOf(currentCharacter.toUpperCase());
        // check for non-letter char
        if (index !== -1){
            let encryptedText = keyAlphabet[index]
            if (currentCharacter = currentCharacter.toLowerCase()){
                result += encryptedText.toLowerCase();
            } else {
                result += encryptedText.toUpperCase();
            }
        } else {
            result += currentCharacter;
        }
    }
    return result;
}

encryptButton.addEventListener("click", handleClick)