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
        console.log("Iam copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
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
                <div className="mb-3" style={{ color: props.mode === 'dark' ? 'gray' : 'black' }}>
                    <textarea className='form-control' style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#000000' }} value={text} onChange={handleonchange}  id="mybox" rows="8"></textarea>

                </div>
                <button className="btn btn-primary" onClick={handleupCLick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleuloCLick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleuClear}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my=5" style={{ color:  props.mode === 'dark' ? 'white' : '#000000' }}>
                <h1>Heading summary</h1>
                <p>
                    {text.split(" ").length-1} <b>words</b> and {text.length} characters
                </p>
                <p>
                    {0.080 * text.split(" ").length} Minutes read
                </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
