// main entry point for App

import React, { useState } from 'react';
import './App.css'; // Your CSS file

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChar = '.?!,-_@#$%^&*/:;';

  const generatePassword = () => {
    let passwordOptions = '';
    let password = '';

    if (includeLowercase) passwordOptions += lowerCase;
    if (includeUppercase) passwordOptions += upperCase;
    if (includeNumbers) passwordOptions += numbers;
    if (includeSpecialChars) passwordOptions += specialChar;

    for (let i = 0; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * passwordOptions.length);
      password += passwordOptions[index];
    }

    setGeneratedPassword(password);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div>
        <label>
          Password Length:
          <input type="number" value={passwordLength} onChange={e => setPasswordLength(e.target.value)} />
        </label>
        <label>
          Include Lowercase:
          <input type="checkbox" checked={includeLowercase} onChange={e => setIncludeLowercase(e.target.checked)} />
        </label>
        <label>
          Include Uppercase:
          <input type="checkbox" checked={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} />
        </label>
        <label>
          Include Numbers:
          <input type="checkbox" checked={includeNumbers} onChange={e => setIncludeNumbers(e.target.checked)} />
        </label>
        <label>
          Include Special Characters:
          <input type="checkbox" checked={includeSpecialChars} onChange={e => setIncludeSpecialChars(e.target.checked)} />
        </label>
        <button onClick={generatePassword}>Generate Password</button>
      </div>
      <div>
        <textarea readOnly value={generatedPassword} />
      </div>
    </div>
  );
}

export default App;
