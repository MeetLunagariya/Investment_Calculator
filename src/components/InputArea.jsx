import React from "react";

function InputArea({ setDetails, details }) {
  function handleInput(inputIdentifier,newVal) {
   setDetails((prevUserInput)=>{
    return{
      ...prevUserInput,
      [inputIdentifier]: +newVal,
    }
   })
  }

  return (
    <>
      <div id="user-input" className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={details.initialInvestment}
            onChange={(e) => {handleInput('initialInvestment',e.target.value)}}
            required
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={details.annualInvestment}
            onChange={(e) => {handleInput('annualInvestment',e.target.value)}}
            required
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            value={details.expectedReturn}
            onChange={(e) => {handleInput('expectedReturn',e.target.value)}}
            required
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={details.duration}
            onChange={(e) => {handleInput('duration',e.target.value)}}
            required
          />
        </div>
      </div>
    </>
  );
}

export default InputArea;
