/* eslint-disable no-unused-expressions */
import React from "react"; 

class Bmi extends React.Component{
    constructor(){
      super();
      this.state ={
        height : '',
        weight :'',
        result:'',
        total :''
      }
    }
    handleheight =(event) =>{
      this.setState({
        height:event.target.value
      })
    }
    handleweight = (event) =>{
      this.setState({
        weight:event.target.value
      })
    }
    
    execute =(event) =>{
      this.setState({
      total : Math.round((parseInt(this.state.weight)/Math.pow((parseInt(this.state.height))/100,2))*100)/100 + "Kg/m2",
      });
      event.preventDefault();
    }

    execute2 =(e) =>{
      if(isNaN(this.total)){
      this.setState({
        result :" Please fill out the form"
      });
      e.preventDefault();
    }
      else if(this.state.total< 18.5){
        this.setState({
            result:" UNDERWEIGHT"
        });
        e.preventDefault();
      }
      else if(this.state.total >=18.5 && this.total <24.9){
        this.setState({
          result:"Normal"
        });
        e.preventDefault();

      }
      else if(this.state.total >= 25.0 && this.total < 29.9){
        this.setState({
          result:"OVERWEIGHT"
        });
        e.preventDefault();
      }
      else if(this.state.total >=30.0){
        this.setState({
          result:"OBESE"
        });
        e.preventDefault();
      }
    }
    render(){
      return ( 
      <div className="bmi">
          <p>BMI CALCULATOR</p>
          <form onSubmit={this.execute}>
               <span className="metric">&ensp;ENTER YOUR HEIGHT:</span>
               <input id="height" value={this.state.height} onChange ={this.handleheight} type="text" placeholder="Height in cm" required /><br/><br/>
                <span className="metric">&nbsp;ENTER YOUR WEIGHT:</span>
               <input id="weight" value={this.state.weight} onChange ={this.handleweight} type="text" placeholder="Weight in kg" required /><br/><br/>
                <button id="btn" type="submit">SUBMIT</button>
          </form>
          <div className="answer">
            <div id="result">{this.state.total}</div>
            <form  onSubmit={this.execute2}>
                <button className="weightLevel" type="submit">Current Weight Levels</button>
            </form>
            <div>{this.state.result}</div>
           </div>
      </div>    
     );
}
}
 
export default Bmi;