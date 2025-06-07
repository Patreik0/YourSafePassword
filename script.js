function updateLengthValue(value) {
    document.getElementById('length-value').textContent = value;
    generatePassword();
}

function toggleActive(button) {
    button.classList.toggle('active');
    generatePassword();
}

function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characters = "";
    if (document.querySelector(".lowercase.active")) characters += lowercase;
    if (document.querySelector(".uppercase.active")) characters += uppercase;
    if (document.querySelector(".numbers.active")) characters += numbers;
    if (document.querySelector(".symbols.active")) characters += symbols;
    
    const length = document.querySelector(".password-length").value;
    let password = "";
    
    if (characters.length === 0) {
        document.querySelector(".generated-password").textContent = "Select at least one option!";
        return;
    }
    
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    document.querySelector(".generated-password").textContent = password;
}

function copyToClipboard() {
    const passwordElement = document.querySelector(".generated-password");
    const password = passwordElement.textContent;
    if (!password || password === "Select at least one option!") return;
    
    navigator.clipboard.writeText(password).then(() => {
        const copyButton = document.querySelector(".copy");
        copyButton.textContent = "Copied!";
        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 2000);
    });
}

window.onload = generatePassword;