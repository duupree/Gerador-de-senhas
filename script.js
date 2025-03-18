const passwordField = document.getElementById ("password");
const copyButton = document.getElementById ("copy");
const generateButton = document.getElementById ("generate");
const lengthSlider = document.getElementById ("length");
const lengthValue = document.getElementById ("lengthValue");

const uppercaseCheckbox = document.getElementById ("uppercase");
const lowercaseCheckbox = document.getElementById ("lowercase");
const numbersCheckbox = document.getElementById ("numbers");
const symbolsCheckbox = document.getElementById ("symbols");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+[]{}<>?/";

lengthSlider.addEventListener("input", () =>{
    lengthValue.textContent = lengthSlider.value;
});

generateButton.addEventListener("click", ()=>{
    let characters = "";
      if (uppercaseCheckbox.checked) characters += uppercaseChars;
      if (lowercaseCheckbox.checked) characters += lowercaseChars;
      if (numbersCheckbox.checked) characters += numberChars;
      if (symbolsCheckbox.checked) characters += symbolsChars;

      passwordField.value = generatePassword(lengthSlider.value, characters);
});

copyButton.addEventListener("click", () => {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value);
        alert ("Senha copiada!");
    }
});

function generatePassword(length, characters){
    if (!characters){
        alert ("Selecione pelo menos um tipo de caractere!");
        return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
