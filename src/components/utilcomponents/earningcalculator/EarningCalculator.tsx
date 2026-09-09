import React, { useState } from "react";
import "./EarningCalculator.scss";
import { UtilInputField, UtilsCardControlsButtons, UtilSelectField, UtilSelectFieldOption } from "../UtilCardControls/UtilCardControls";
import { calculateEarnings, EarningsDetail } from "../../../service/EarningsDetailsUtilFunctions";
import { FinancialYearsEnum } from "../../../service/AppEnums";
import { ErrorMessages } from "../../errors/ErrorMessages";

export const EarningCalculator = () => {
  const [year, setYear] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<string>("120");
  const [hourlyIndemnityRate, setHourlyIndemnityRate] = useState<string>("0.65");
  const [publicHolidayCount, setPublicHolidayCount] = useState<string>("12");
  const [leaveCount, setLeaveCount] = useState<string>("0");
  const [earningsData, setEarningsData] = useState<EarningsDetail | null>(null);
  const [errors, setErrors] = useState<string[] | null>(null);

  const resetAll = async () => {
    setYear("");
    setHourlyRate("120");
    setHourlyIndemnityRate("0.65");
    setPublicHolidayCount("12");
    setLeaveCount("0");
    setErrors(null);
    setEarningsData(null);
  };

  const calculate = () => {
    const validationErrors: string[] = [];

    if (!hourlyRate) {
      validationErrors.push("Missing Hourly Rate info.");
    }

    if (!hourlyIndemnityRate) {
      validationErrors.push("Missing Hourly Indemnity Rate info.");
    }

    if (!publicHolidayCount) {
      validationErrors.push("Missing Public Holiday info.");
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
    setEarningsData(calculateEarnings(hourlyRate, year, publicHolidayCount, leaveCount, hourlyIndemnityRate));
  };

  const finyearSelectOptions: UtilSelectFieldOption[] = Object.values(FinancialYearsEnum).map((val) => ({
    value: val,
    label: String(val),
  }));

  return (
    <div id="earningcalculator" className="earningcalculator">
      <div className="earningcalculatorcontrols">
        <div className="earningcalculator-row earningcalculator-row-first">
          <div className="earningcalculator-label">Financial Year:</div>
          <div className="earningcalculator-control">
            <UtilSelectField
              id="finyearselect"
              label=""
              value={year}
              onChange={(e) => {
                setErrors(null);
                setYear(e.target.value);
              }}
              options={finyearSelectOptions}
              required={true}
            />
          </div>
          <div className="earningcalculator-actions">
            <UtilsCardControlsButtons onCalculate={calculate} onClear={resetAll} />
          </div>
        </div>
        <div className="earningcalculator-row">
          <div className="earningcalculator-label">Hourly Rate:</div>
          <div className="earningcalculator-control">
            <UtilInputField
              id="hourlyRate"
              label=""
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
          </div>
        </div>
        <div className="earningcalculator-row">
          <div className="earningcalculator-label">Hourly Indemnity Rate:</div>
          <div className="earningcalculator-control">
            <UtilInputField
              id="hourlyIndemnityRate"
              label=""
              value={hourlyIndemnityRate}
              onChange={(e) => {
                setErrors(null);
                const val = e.target.value;
                // ✅ Allow only digits and at most one decimal point
                if (/^\d*\.?\d*$/.test(val)) {
                  setHourlyIndemnityRate(val);
                }
              }}
              placeholder="Enter hourly indemnity rate"
              required={true}
            />
          </div>
        </div>
        <div className="earningcalculator-row">
          <div className="earningcalculator-label">Public Holidays:</div>
          <div className="earningcalculator-control">
            <UtilInputField
              id="publicHolidayCount"
              label=""
              value={publicHolidayCount}
              onChange={(e) => {
                setErrors(null);
                const val = e.target.value;
                // ✅ Allow only digits and at most one decimal point
                if (/^\d*\.?\d*$/.test(val)) {
                  setPublicHolidayCount(val);
                }
              }}
              placeholder="Enter public holidays"
              required={true}
            />
          </div>
        </div>
        <div className="earningcalculator-row">
          <div className="earningcalculator-label">Leaves:</div>
          <div className="earningcalculator-control">
            <UtilInputField
              id="leaveCount"
              label=""
              value={leaveCount}
              onChange={(e) => {
                setErrors(null);
                const val = e.target.value;
                // ✅ Allow only digits and at most one decimal point
                if (/^\d*\.?\d*$/.test(val)) {
                  setLeaveCount(val);
                }
              }}
              placeholder="Enter leaves"
              required={true}
            />
          </div>
        </div>
      </div>
      {errors && <ErrorMessages errorMessages={errors} />}
      {earningsData && (
        <div className="earningcalculatoroutput">
          <table>
            <tbody>
              <tr>
                <td colSpan={2}><strong>Earnings Summary</strong></td>
              </tr>
              {earningsData.map((earningDetail) => (
                <tr key={earningDetail.earningsDetailName}>
                  <td><strong>{earningDetail.earningsDetailName}</strong></td>
                  <td>{earningDetail.earningsDetailValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
