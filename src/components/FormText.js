import React, { useState } from 'react'

export default function FormText(props) {
    const handleUpClick = () => {
        console.log(text);
        const upperString = text.toUpperCase();
        setText(upperString);
        props.showAlert("Text convert to uppercase ", 'success');
    }
    const handleOnChange = (e) => {
        // console.log(text);
        setText(e.target.value);
    }
    const handleUpClickLower = () => {
        const upperString = text.toLowerCase();
        setText(upperString);
        props.showAlert("Text convert to lowercase ", 'success');
    }
    const handleCopy = () => {
        let textContainer = document.querySelector('#textId');
        textContainer.select();
        navigator.clipboard.writeText(textContainer.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Clickboard copy", 'success');
    }
    const handleExtraSpace = () => {
        console.log(text);
        let newText = text.split(/[ ]+/);

        setText(newText.join(" "));
        props.showAlert("Remove Extra space", 'success');
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" demo={props.mode} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e1d43', color: props.mode === 'light' ? 'black' : 'white' }}>

                <h1>{props.headingText}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white' }} value={text} placeholder="Leave a comment here" id="textId" onChange={handleOnChange} rows="8" ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                    Convert click to uppercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClickLower}>
                    Convert click to lowercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                    Copy text
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
                    Remove extra spaces
                </button>
            </div >
            <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e1d43', color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(element => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(element => { return element.length !== 0 }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{(text.length > 0) ? text : "Your text previous here"}</p>
            </div>
        </>
    )
}
