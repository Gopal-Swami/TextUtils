import { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = (event) => {
    let newTxt = "";
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
        <h1>Enter Your Text Here</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button
            type="button"
            class="btn btn-dark my-3 mx-2"
            onClick={handleUpCase}
          >
            Convert To UpperCase
          </button>
          <button
            type="button"
            class="btn btn-dark  my-3 mx-2"
            onClick={handleLoCase}
          >
            Convert To LowerCase
          </button>
          <button
            type="button"
            class="btn btn-dark  my-3 mx-2"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h3>Preview</h3>
        <div className="mb-3">
          <p>
            {text.split(" ").length - 1} Words And {text.length} Characters
          </p>
          <p>Time Taken {0.0033 * (text.split(" ").length - 1)} Minutes</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
