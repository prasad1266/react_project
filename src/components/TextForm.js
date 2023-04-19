import React, { useState } from 'react'


export default function Textform(props) {
    const handleupCLick = () => {
        console.log("Uppercase Was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Text converted to Uppercase Successfully", "success");
    }
    const handleuloCLick = () => {
        console.log("Uppercase Was clicked " + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Text converted to Lowercase Successfully", "Success");
    }
    const handleuClear = () => {
        // console.log("Uppercase Was clicked "+ text);
        let newtext = ""
        setText(newtext)
        props.showAlert("Text cleared Successfully", "Success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied To Clipboard", "Success");

    }

    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value)

    }


    const [text, setText] = useState("");

    // setText("New Text...!");
    return (
        <>
            <div className='container' >
                <h1>{props.heading}</h1>
                <div className="mb-3" style={{ color: props.mode ==='dark' ? 'gray' : 'black' }}>
                    <textarea className='form-control' style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#000000' }} value={text} onChange={handleonchange}  id="mybox" rows="8"></textarea>

                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleupCLick}>Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleuloCLick}>Convert To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleuClear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my=5" style={{ color:  props.mode==='dark'? 'white':'#000000' }}>
                <h1>Heading summary</h1>
                <p>
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words</b> and {text.length} characters
                </p>
                <p>
                    {0.080 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read
                </p>
                <h2>Preview</h2>
                <p>{text.length>0? text:'Nothing to Preview'}</p>
            </div>
        </>
    )
}
