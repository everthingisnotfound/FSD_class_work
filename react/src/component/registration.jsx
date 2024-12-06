import React, { useState } from 'react';

const generateRegistrationCode = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
};

const RegistrationCodeGenerator = () => {
    const [code, setCode] = useState('');

    const handleGenerateCode = () => {
        const newCode = generateRegistrationCode();
        setCode(newCode);
    };

    return (
        <div>
            <h1>Registration Code Generator</h1>
            <button onClick={handleGenerateCode}>Generate Code</button>
            {code && <p>Generated Registration Code: {code}</p>}
        </div>
    );
};

export default RegistrationCodeGenerator;