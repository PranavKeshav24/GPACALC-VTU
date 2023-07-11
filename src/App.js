import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [inputValues, setInputValues] = useState({
    fourC1: '',
    fourC2: '',
    threeC1: '',
    threeC2: '',
    threeC3: '',
    oneC1: '',
    oneC2: '',
    oneC3: '',
  });
  
  function handleChange(event) {
    const { id, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }
  function op(val){
    if(val>=0&&val<10)
    return 1;
    if(val>=10&&val<20)
    return 2;
    if(val>=20&&val<30)
    return 3;
    if(val>=30&&val<40)
    return 4;
    if(val>=40&&val<50)
    return 5;
    if(val>=50&&val<60)
    return 6;
    if(val>=60&&val<70)
    return 7;
    if(val>=70&&val<80)
    return 8;
    if(val>=80&&val<90)
    return 9;
    if(val>=90&&val<=100)
    return 10;
  }
  function handleSubmit(event) {
    event.preventDefault();
    let counter=0;
    let sumGradePoints = 0;
    Object.values(inputValues).forEach((value) => {
      counter++;
      if(counter>0&&counter<3)
      sumGradePoints += op(value)*4;
      else if(counter>=3&&counter<6)
      sumGradePoints += op(value)*3;
      else if(counter>=6&&counter<9)
      sumGradePoints += op(value)*1;
    });
    const gpa = sumGradePoints / 20;
    setInputValues({
      fourC1: '',
      fourC2: '',
      threeC1: '',
      threeC2: '',
      threeC3: '',
      oneC1: '',
      oneC2: '',
      oneC3: '',
    });
    
    console.log('Input Values:', inputValues);
    console.log('GPA:', gpa);
  };
  const calculateCGPA = () => {
    let counter=0;
    let sumGradePoints = 0;
    Object.values(inputValues).forEach((value) => {
      counter++;
      if(counter>0&&counter<3)
      sumGradePoints += op(value)*4;
      else if(counter>=3&&counter<6)
      sumGradePoints += op(value)*3;
      else if(counter>=6&&counter<9)
      sumGradePoints += op(value)*1;
    });
    const cgpa = sumGradePoints / 20;
      return cgpa.toFixed(2);
  };
  const handleReset = () => {
    setInputValues({
      fourC1: '',
      fourC2: '',
      threeC1: '',
      threeC2: '',
      threeC3: '',
      oneC1: '',
      oneC2: '',
      oneC3: '',
    });
  };
  
  return (
    <div className="main">
    <h1 className="head">GPA Calculator</h1>
    <h3 className="head">Enter the marks obtained:</h3>
    <form onSubmit={handleSubmit} className="form">
    <div className="inpform">
    <label htmlFor="4C1" className="inplab">
    Four Credit Point Subject 1:
    </label>
    <input
    type="number"
    id="fourC1"
    min="1"
    max="100"
    step="1"
    value={inputValues.fourC1}
    onChange={handleChange}
    />
    </div>
    <div className="inpform">
    <label htmlFor="4C2" className="inplab">
    Four Credit Point Subject 2:
    </label>
    <input
    type="number"
    id="fourC2"
    min="1"
    max="100"
    step="1"
    value={inputValues.fourC2}
    onChange={handleChange}
    />
    </div>
    <div className="inpform">
    <label htmlFor="3C1" className="inplab">
    Three Credit Point Subject 1:
    </label>
    <input
    type="number"
    id="threeC1"
    min="1"
    max="100"
    step="1"
    value={inputValues.threeC1}
    onChange={handleChange}
    />
    </div>
    <div className="inpform">
    <label htmlFor="3C2" className="inplab">
    Three Credit Point Subject 2:
    </label>
    <input
    type="number"
    id="threeC2"
    min="1"
    max="100"
    step="1"
    value={inputValues.threeC2}
    onChange={handleChange}
    />
    </div>
    <div className="inpform">
    <label htmlFor="3C3" className="inplab">
    Three Credit Point Subject 3:
    </label>
    <input
    type="number"
    id="threeC3"
    min="1"
    max="100"
    step="1"
    value={inputValues.threeC3}
    onChange={handleChange}
    />
    </div>
    <div className="inpform">
    <label htmlFor="1C1" className="inplab">
    One Credit Point Subject 1:
    </label>
    <input
    type="number"
    id="oneC1"
    min="1"
    max="100"
    step="1"
    value={inputValues.oneC1}
    onChange={handleChange}
    />
    </div>
    <div className="inpform">
    <label htmlFor="1C2" className="inplab">
    One Credit Point Subject 2:
    </label>
    <input
    type="number"
    id="oneC2"
    min="1"
    max="100"
    step="1"
    value={inputValues.oneC2}
    onChange={handleChange}
    />
    </div>
    <div className="inpform">
    <label htmlFor="1C3" className="inplab">
    One Credit Point Subject 3:
    </label>
    <input
    type="number"
    id="oneC3"
    min="1"
    max="100"
    step="1"
    value={inputValues.oneC3}
    onChange={handleChange}
    />
    </div>
    <span className='gpatxt'>SGPA: {calculateCGPA()}</span>
    <button type="button" className="rst" onClick={handleReset}>
    Reset
    </button>
    </form>
    
    </div>
    );
  }