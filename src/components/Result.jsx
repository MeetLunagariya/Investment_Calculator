import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

function Result({ details }) {
  const resultData = calculateInvestmentResults(details);
  console.log(resultData);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(year)</th>
            <th>Total Interest</th>
            <th>Invested capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              (result.year * result.annualInvestment +
                details.initialInvestment);
            const investedCapital =
              result.year * result.annualInvestment + details.initialInvestment;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Result;
