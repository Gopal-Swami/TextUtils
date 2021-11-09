import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = (event) => {
    let newTxt = "";
    setText(newTxt);
  };

  const handleCopy = (event) => {
    let txt = document.getElementById('exampleFormControlTextarea1');
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };

  const handleExtraSpaces = (event) => {
    let txts=text.split(/[ ]+/);
    let newTxt = txts.join(' ');
    setText(newTxt);
  };

  const handleUpCase = (event) => {
    text && setText(text.toUpperCase());
  };
  const handleLoCase = (event) => {
    text && setText(text.toLowerCase());
  };

  return (
    <>
      <div className="container my-3">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Enter Your Text Here</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button
            type="button"
            class={`btn btn-outline-${props.mode==='light'?'dark':'light'} my-3 mx-2`}
            onClick={handleUpCase}
          >
            Convert To UpperCase
          </button>
          <button
            type="button"
            class={`btn btn-outline-${props.mode==='light'?'dark':'light'} my-3 mx-2`}
            onClick={handleLoCase}
          >
            Convert To LowerCase
          </button>
          <button
            type="button"
            class={`btn btn-outline-${props.mode==='light'?'dark':'light'} my-3 mx-2`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            class={`btn btn-outline-${props.mode==='light'?'dark':'light'} my-3 mx-2`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="button"
            class={`btn btn-outline-${props.mode==='light'?'dark':'light'} my-3 mx-2`}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h3>
        <div className="mb-3">
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>
            {text.split(" ").length - 1} Words And {text.length} Characters
          </p>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>Time Taken {0.0033 * (text.split(" ").length - 1)} Minutes</p>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
