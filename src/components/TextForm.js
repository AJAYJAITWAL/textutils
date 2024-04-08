import React, {useState} from 'react'


export const TextForm = (props) => {
  const handlUpClick = () => {
    console.log("Clicked");
  }

  const [text, setText] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="textBox" value={text} rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handlUpClick}>Convert to Uppercase</button>
    </div>
  )
}
