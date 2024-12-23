import { useState } from "react"
import InputArea from "./components/InputArea"
import Result from "./components/Result"

const DETAILS = {
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 10,
  duration: 5,
}

function App() {
  
  const [details, setDetails] = useState(DETAILS)
  const isValid = details.duration >= 1 ;
  console.log(details)

  return (
    <>
      <InputArea setDetails={setDetails} details={details}/>

      {isValid ? <Result details={details}/> : <p className="center">Please Enter duration greater then 0.</p>}
    </>
  )
}

export default App
