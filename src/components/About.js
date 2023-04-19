import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // })

    let myStyle = {
        color : props.mode==='dark'? 'white' :'black',
        backgroundColor: props.mode==='white'? 'black' :'white',
    }
    // const [btntext, setBtnText] = useState("Enable Dark mode")
    // const togglestyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'

    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'

    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
   
    return (
        <div className='container '>
    <h1 className='my-3' style= {{color : props.mode==='dark'? 'white' :'black'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle} >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Textutil gives you a way to analyze your text effeciently and quickly. Be it word count character count
                            </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Textutil is free character free character counter tool that provides instant character count & word count statics for given text. Textutils reports the number of word count and character count.
                              </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong> Browser Count</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This Word counter software works in any web browser such as chrome, firefox,Internet explorer. It suits to count characters in Facebook, blogs, Books,Essay etc.
                              </div>
                    </div>
                </div>
                {/* <button type="button" onClick={togglestyle} className="btn btn-primary my-3">{btntext}</button> */}
            </div>
        </div>
    )
}
