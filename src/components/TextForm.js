import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =() =>{
        console.log("Uppercase was click" +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    
    const handleOnChange =(event) =>{
        console.log("oNChange");
        setText(event.target.value);
        
    }
    const handleLowClick =() =>{
        console.log("Lowcase was click" +text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleTextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        }
    const [text, setText] = useState('');
  return (
      <>
    <div className="coantiner" style={{color: props.mode==='dark'?'white':'rgb(2 19 71)'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'rgb(2 19 71)'}} id="mybox" rows="8"></textarea>
    </div>
         <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-3" onClick={handleTextExtract}>Text Extract</button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'rgb(2 19 71)'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} charcters</p>
          <p>{0.008* text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter text to preview it"}</p>
    </div>
    </>
  )
}
