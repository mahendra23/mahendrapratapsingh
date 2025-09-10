import React, { useState } from "react";
import "./EarningCalculator.scss";
import { UtilClearButton, UtilInput, UtilRunButton } from "../UtilCardControls/UtilCardControls";
import { calculateEarnings, EarningsDetail } from "../../../../service/EarningsDetailsUtilFunctions";
import { FinancialYearsEnum } from "../../../../service/AppEnums";
import { ErrorMessages } from "../../../errors/ErrorMessages";

export const EarningCalculator = (): JSX.Element => {
  const [year, setYear] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [earningsData, setEarningsData] = useState<EarningsDetail | null>(null);
  const [errors, setErrors] = useState<string[] | null>(null);

  const resetAll = async () => {
    setYear("");
    setHourlyRate("");
    setErrors(null);
    setEarningsData(null);
  };

  const calculate = () => {
    const validationErrors: string[] = [];

    if (!hourlyRate) {
      validationErrors.push("Missing Hourly Rate info.");
    }

    if (year === "" || year === "Select Year") {
      validationErrors.push("Missing Financial Year info.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setEarningsData(null);
      return;
    }

    setErrors(null);
    setEarningsData(calculateEarnings(hourlyRate, year));
  };

  return (
    <div id="earningcalculator" className="earningcalculator">
      <div className="earningcalculatorcontrols">
        <label>
          Hourly Rate: &nbsp;
          <UtilInput
            id="hourlyRate"
            type="text"
            value={hourlyRate}
            onChange={(e) => {
              setErrors(null);
              const val = e.target.value;
              // ✅ Allow only digits and at most one decimal point
              if (/^\d*\.?\d*$/.test(val)) {
                setHourlyRate(val);
              }
            }}
            placeholder="Enter hourly rate"
            isReadOnly={false}
          />
        </label>
        <div className="earningcalculatorcontrolsrow">
          <label>
            Financial Year: &nbsp;
            <select
              id="finyearselect"
              value={year}
              onChange={(e) => {
                setErrors(null);
                setYear(e.target.value);
              }}
              className="earningcalculatorcontrols-finyearselect"
            >
              {Object.values(FinancialYearsEnum).map((finYear) => (
                <option key={finYear} value={finYear}>
                  {finYear}
                </option>
              ))}
            </select>
          </label>
          <UtilRunButton onClick={calculate} title="Calculate Earnings" />
          <UtilClearButton onClick={resetAll} title="Clear Earnings" />
        </div>
      </div>
      {errors && <ErrorMessages errorMessages={errors} />}
      {earningsData && (
        <div className="earningcalculatoroutput">
          <table>
            <tbody>
              <tr>
                <td><strong>Financial Year</strong></td>
                <td>{earningsData.finYear}</td>
              </tr>
              <tr>
                <td><strong>Hourly Rate</strong></td>
                <td>{earningsData.hourlyRate}</td>
              </tr>
              <tr>
                <td><strong>Net Working Days</strong></td>
                <td>{earningsData.netWorkingDays}</td>
              </tr>
              <tr>
                <td><strong>Gross Annual Income</strong></td>
                <td>{earningsData.grossAnnualIncome}</td>
              </tr>
              <tr>
                <td><strong>Tax</strong></td>
                <td>{earningsData.tax}</td>
              </tr>
              <tr>
                <td><strong>Net Annual Income</strong></td>
                <td>{earningsData.netAnnualIncome}</td>
              </tr>
              <tr>
                <td><strong>GST</strong></td>
                <td>{earningsData.gst}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
