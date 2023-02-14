import "./Diet.css";
import Bmi from "../components/Bmi";

const Diet = () => {
  return (
    <div className="container1">
      <div className="Content1">
        <div className="Weight-descrp">
          <p>Lorem</p>
        </div>
        <div className="step1">
          <p>Step 1: Calculate Your Weight Levels.</p>
          <Bmi></Bmi>
        </div>
      </div>
      <div className="rightBottom2"></div>
      <div className="topLeft2"></div>
      <form className="Details-form">
        <span className="details">&ensp;ENTER YOUR NAME:</span>
        <input id="Name" placeholder="Name in caps" required />
        <br />
        <br />
        <span className="details">&nbsp;ENTER YOUR AGE:</span>
        <input id="Age" placeholder="Age in numbers" required />
        <br />
        <br />
        <span className="details">&nbsp;ENTER YOUR EMAIL:</span>
        <input id="Age" type="email" required />
        <br />
        <br />
        <button id="btn2" type="submit">
          SUBMIT
        </button>
      </form>
      {/* <div className="step2">
                  <p>Step 2: Find Your Maintanance Calories.
                  </p>
                  <div className="maintanance-calorie-calc">
                  </div>
                  <div className="content1"></div> */}
    </div>
  );
};

export default Diet;
