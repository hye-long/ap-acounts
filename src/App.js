import './App.css';
//import SubmitButton from './Routes/highway.js';'./highway.js'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


import Main2 from './components/main/main2.js';
//import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';




function App() {

  const [selectedAge, setSelectedAge] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');


  const handleAgeChange = (value) => {
    setSelectedAge(value);
  };

  const handleProductChange = (value) => {
    setSelectedProduct(value);
  };

  return (

    <>
      <header className='header'>
        <nav>
          <Link to="/main" className='header_logo'>Home</Link>
        </nav>
      </header>

      <h1 className='title'>
        <div>
          억만장자가 될테야!!!
        </div>
      </h1>


      <main className='mainMain'>
        <form className="formPage" type="checkbox">
          <div className='Ageid'>
            <label className='formAge'>나이가 어떻게 되세용?</label>
            <div className='formAge-Ageid'>
              <Main2
                className='formCheckText'
                id='radiofirst'
                name='미취학 아동'
                value='10th'
                onChange={() => handleAgeChange('10th')}
                checked={selectedAge === '10th'}
                type="age"
              />
              <Main2
                className='formCheckText'
                id='radiosec'
                name='청년층'
                value='20th'
                onChange={() => handleAgeChange('20th')}
                checked={selectedAge === '20th'}
                type="age" // age 라디오 버튼임을 명시

              />

              <Main2
                className='formCheckText'
                id='radiosixth'
                name='60대 이후'
                value='60th'
                onChange={() => handleAgeChange('60th')}
                checked={selectedAge === '60th'}
                type="age" // age 라디오 버튼임을 명시
              />
            </div>

          </div>
          <div className='formPage-formProducts'>
            <label className="formProducts">추천받고 싶은 상품이 무엇인가용?</label>
            <div className='formPage-formProducts-id'>

              <Main2
                className="formCheckText"
                id="radio1"
                name="예적금"
                value="accounts"
                onChange={() => handleProductChange('accounts')}
                checked={selectedProduct === 'accounts'}
                type="product"
              />
              <Main2
                className="formCheckText"
                id="radio2"
                name="대출"
                value="loan"
                onChange={() => handleProductChange('loan')}
                checked={selectedProduct === 'loan'}
                type="product"
              />
              <Main2
                className="formCheckText"
                id="radio3"
                name="복지 상품"
                value="helpplz"
                onChange={() => handleProductChange('helpplz')}
                checked={selectedProduct === 'helpplz'}
                type="product"
              />
            </div>
          </div>

        </form>
      </main>


      <footer>
        <button className='MainButton' type='submit' >

          추천받기!!
        </button>
      </footer>
    </>
  );
}

export default App;
