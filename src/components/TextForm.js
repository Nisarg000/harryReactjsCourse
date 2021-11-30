import React, {useState} from 'react'// Hooks allow us to use state and other react features without writing a class

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("The uppercase button was used here" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("The uppercase button was used here" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value); //this will enable us to type
    }
    const [text, setText] = useState("")//text is our variable and whenever text is updated then setText shall be called, learn this line by heart

    //in case if you want to change the text later in future then do this:
    //text = "replaced text" //this is the wrong method
    // setText("replaced text") //this is the correct method
    return (
        <>
        <div className="container">
            <h1>{props.heading} </h1>
            <div class="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-4" onClick={handleLoClick} >Convert to Lowercase</button>

        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).length} words and {text.length} characters</p>{/* //count words and characters */}
            <p> {0.008 * text.split(/\s+/).length} Minutes required to read you texts</p> {/* Count minutes to read */}
            <h2>Preview</h2> {/*  */}
            <p>{text}</p>
        </div>
        </>
    )
}