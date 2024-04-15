/*import React, { useState } from "react";*/
import './main.css';


function Main() {
  /*const [age, setAge] = useState("");

  const handleChange = ({ target: { value } }) => setAge(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("선택된 나이:", age);
  };
  */

  return (
    <div className="forming">
        <form className="formPage" value='age' >
            <label className="formAge"> 나이가 어떻게 되세용? </label>
            <select className='formAge' >
            <option value=""></option>
            <option value="영유아">영유아</option>
            <option value="10대">10대</option>
            <option value="20대">20대</option>
            <option value="30대">30대</option>
            <option value="40대">40대</option>
            <option value="50대">50대</option>
            <option value="60대 이후">60대</option>
            </select>
            <button className="submitButton" type="submit">나이 저장</button>
        </form>
    </div>

  );
}

export default Main;


