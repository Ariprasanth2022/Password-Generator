import { useState } from 'react'

export const PasswordGenerator = () => {
    
    const [length, setLength]= useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword=()=>{
        let charset = "";
        if(includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers) charset += "1234567890";
        if(includeSymbols) charset+= "!@#$%^&*()_+=-";
        let generatePassword="";
        for(let i=0; i<length; i++){
            const randomIndex= Math.floor(Math.random()*charset.length);
            generatePassword += charset[randomIndex];
        } 
        setPassword(generatePassword)
    };

    const copy=()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied")
    }

  return (
    <div className="passwordgenerator">
        <h2>STRONG PASSWORD GENERATOR</h2>
        <div className="inputgroup">
            <label htmlFor="num">Password Length: </label>
            <input type="number" id="num" value={length} onChange={(e)=>
             setLength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox">
            <input type="checkbox" id="upper" checked={includeUppercase}
            onChange={(e)=>setIncludeUppercase(e.target.checked)}/>
            <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox">
            <input type="checkbox" id="lower" checked={includeLowercase}
            onChange={(e)=>setIncludeLowercase(e.target.checked)}/>
            <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox">
            <input type="checkbox" id="numbers" checked={includeNumbers}
            onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
            <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox">
            <input type="checkbox" id="symbols" checked={includeSymbols}
            onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
            <label htmlFor="symbols">Include Symbols</label>
        </div>
        <button className="generatebtn" onClick={generatePassword}>Generate Password</button>
        <div className="generatepassword">
            <input type="text" readOnly value={password}/>
            <button className="copybtn" onClick={copy}>Copy</button>

        </div>
    </div>
  )
}
