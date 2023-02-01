import React, { useState } from 'react'

export default function Textform(props) {
    const handleupCLick=()=>{
        console.log("Uppercase Was clicked "+ text);
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleuloCLick=()=>{
        console.log("Uppercase Was clicked "+ text);
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleuClear=()=>{
        // console.log("Uppercase Was clicked "+ text);
        let newtext=""
        setText(newtext)
    }
    const handleCopy=()=>{
            console.log("Iam copy");
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleonchange= (event) => {
        console.log("on change");
        setText(event.target.value)

    }


    const [text, setText] = useState("");

    // setText("New Text...!");
  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className='form-control' value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
    
  </div>
  <button className="btn btn-primary" onClick={handleupCLick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleuloCLick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleuClear}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my=5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Heading summary</h1>
        <p>
             {text.split(" ").length} <b>words</b> and {text.length} characters
        </p>
        <p>
            {0.080*text.split(" ").length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
