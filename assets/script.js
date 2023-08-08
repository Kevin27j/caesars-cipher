const encryptedInput = document.getElementById("encrypt-input").value;
const encryptButton = document.getElementById("encrypt-button");
const decryptedOutput = document.getElementById("decrypt-output");

function handleClick(){
    // console.log(encryptedInput.value)

    decryptedOutput.innerHTML = rot13(encryptedInput)
}

function rot13(text){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyAlphabet = alphabet.substring(13) + alphabet.substring(0, 13);
    let result = "";

    for (let i = 0; i < text.length; i++){
        let currentCharacter = text[i];
        let index = alphabet.indexOf(currentCharacter);
        // check for non-letter char
        if (index !== -1){
            let encryptedText = keyAlphabet[index]
            result += encryptedText;
        }
        
        // console.log(currentCharacter)
    }
    return result;
}

// rot13(encryptedInput);

encryptButton.addEventListener("click", handleClick)