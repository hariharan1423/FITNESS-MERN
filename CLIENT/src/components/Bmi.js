import React, { useState } from "react";

// class Bmi extends React.Component{
//     constructor(){
//       super();
//       this.state ={
//         height : '',
//         weight :'',
//         result:'',
//         total :''
//       }
//     }
//     handleheight =(event) =>{
//       this.setState({
//         height:event.target.value
//       })
//     }
//     handleweight = (event) =>{
//       this.setState({
//         weight:event.target.value
//       })
//     }

//     execute =(event) =>{
//       this.setState({
//       total : Math.round((parseInt(this.state.weight)/Math.pow((parseInt(this.state.height))/100,2))*100)/100 + "Kg/m2",
//       });
//       event.preventDefault();
//     }
const Bmi = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [level, setLevel] = useState("");
  const onSetHeight = (e) => {
    const value = e.target.value;
    setHeight(value);
  };
  const onSetWeight = (e) => {
    const value = e.target.value;
    setWeight(value);
  };

  const calcBmi = (e) => {
    // WEIGHT IN KG/HEIGHT IN METRE**2;
    const result = Math.round((weight / Math.pow(height / 100, 2)) * 100) / 100;
    setBmi(result);
    let bmiLevel = "";
    if (isNaN(result)) {
      alert("Please fill the form");
    } else if (result < 18.5) {
      bmiLevel = "Underweight";
    } else if (result > 18.5 && result < 24.9) {
      bmiLevel = "NORMAL";
    } else if (result > 25.0 && result < 29.9) {
      bmiLevel = "OVERWEIGHT";
    } else if (result >= 30.0) {
      bmiLevel = "OBESE";
    }
    setLevel(bmiLevel);
    e.preventDefault();
  };

  return (
    <div className="bmi">
      <p>BMI CALCULATOR</p>
      <form>
        <span className="metric">&ensp;ENTER YOUR HEIGHT:</span>
        <input
          id="height"
          value={height}
          onChange={onSetHeight}
          placeholder="Height in cm"
          required
        />
        <br />
        <br />
        <span className="metric">&nbsp;ENTER YOUR WEIGHT:</span>
        <input
          id="weight"
          value={weight}
          onChange={onSetWeight}
          placeholder="Weight in kg"
          required
        />
        <br />
        <br />
        <button id="btn" onClick={calcBmi} type="submit">
          SUBMIT
        </button>
      </form>
      <div className="answer">
        <div id="result">Your Current Bmi - {bmi}Kg/m2</div>
        <div className="weightLevel">Weight Level - {level}</div>
      </div>
    </div>
  );
};
export default Bmi;
