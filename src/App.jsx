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
  console.log(details)

  return (
    <>
      <InputArea setDetails={setDetails} details={details}/>
      <Result details={details}/>
    </>
  )
}

export default App
