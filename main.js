function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeUppercase = (document.getElementById('includeUppercase').checked);
    const includeLowercase = (document.getElementById('includeLowercase').checked);
    const includeSpecial = (document.getElementById('includeSpecial').checked);

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()-_+=<>?';

    let availableChars = '';

    if(includeUppercase) {
        availableChars += uppercaseChars;
    }

    if(includeLowercase) {
        availableChars += lowercaseChars;
    }

    if(includeSpecial) {
        availableChars += specialChars;
    }

    if(availableChars.length === 0 ) {
        alert('Selecione pelo menos uma opção para criar a senha.');
        return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars.charAt(randomIndex)
    }

    document.getElementById('generatedPassword').value = generatedPassword;
}