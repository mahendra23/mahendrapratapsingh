import React, { useState } from "react";
import "./EarningCalculator.scss";
import { UtilInputField, UtilsCardControlsButtons, UtilSelectField, UtilSelectFieldOption } from "../utilcardcontrols/UtilCardControls";
import { calculateEarnings, EarningsDetail } from "../../../service/EarningsDetailsUtilFunctions";
import { FinancialYearsEnum } from "../../../service/AppEnums";
import { ErrorMessages } from "../../errors/ErrorMessages";

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

  const finyearSelectOptions: UtilSelectFieldOption[] = Object.values(FinancialYearsEnum).map((val) => ({
    value: val,
    label: String(val),
  }));

  return (
    <div id="earningcalculator" className="earningcalculator">
      <div className="earningcalculatorcontrols">
        <UtilInputField 
          id="hourlyRate"
          label="Hourly Rate:"
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
          required={true}
        />
        <div className="earningcalculatorcontrols-rowtwo">
          <UtilSelectField
            id="finyearselect"
            label="Financial Year:"
            value={year}
            onChange={(e) => {
              setErrors(null);
              setYear(e.target.value);
            }}
            options={finyearSelectOptions}
            required={true}
          />
          <UtilsCardControlsButtons onCalculate={calculate} onClear={resetAll} />
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
