function caesarCipher(text, shift) {
    shift = shift % 26;

    text = text.toUpperCase();

    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char.match(/[A-Z]/)) {
            let code = text.charCodeAt(i);

            code = code + shift;

            if (code > 90) {
                code = code - 26;
            }
            
            result += String.fromCharCode(code);
        } else {
            result += char;
        };
    };
    return result;
};

module.exports = caesarCipher;