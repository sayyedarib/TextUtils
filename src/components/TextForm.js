import React, { useState } from "react";

export default function TextForm(props) {


  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPER CASE", "success");
  };

  const handleLowClick = () => {
    let newTextL = text.toLowerCase();
    setText(newTextL);
    props.showAlert("Converted to lower case", "success");
  };

  const reset = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            // style={{
            //   backgroundColor:
            //     props.mode === "dark" ? "white" : "rgba(0, 0, 0, 0.05)",
            // }}
            placeholder="write here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary " onClick={handleUpClick}>
          Convert to UPPER CASE
        </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>
          Convert to lower case
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={reset}>
          Reset
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleExtraSpace}>
          Remove extra Space
        </button>
      </div>
      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>Reading time:{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} minute</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
