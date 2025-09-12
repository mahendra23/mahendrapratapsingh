import { useState } from "react";
import "./TaxCalculator.scss";
import { UtilInputField, UtilsCardControlsButtons } from "../UtilCardControls/UtilCardControls";
import { calculateNZTaxAndNetIncome, TaxDetails } from "../../../service/TaxUtilFunctions";
import { ErrorMessages } from "../../errors/ErrorMessages";

export const TaxCalculator = (): JSX.Element => {
    const [annualIncome, setAnnualIncome] = useState<string>("");
    const [taxData, setTaxData] = useState<TaxDetails | null>(null);
    const [errors, setErrors] = useState<string[] | null>(null);

    function resetAll(): void {
        setErrors(null);
        setAnnualIncome("")
        setTaxData(null);
    }
    function calculateTax(): void {
        const validationErrors: string[] = [];
    
        if (!annualIncome) {
            validationErrors.push("Missing Annual Income.");
        }
    
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setTaxData(null);
            return;
        }
    
        setErrors(null);
        setTaxData(calculateNZTaxAndNetIncome(annualIncome));
    }

    return (
        <div className="taxcalculator">
            <div className="taxcalculatorcontrols">
                <UtilInputField
                    id="annualincomeinput"
                    label="Income:"
                    value={annualIncome}
                    onChange={(e) => {
                        resetAll()
                        const val = e.target.value;
                        // ✅ Allow only digits and at most one decimal point
                        if (/^\d*\.?\d*$/.test(val)) {
                            setAnnualIncome(val);
                        }
                    }}
                    placeholder="Enter annual income"
                    required={true}
                />
                <UtilsCardControlsButtons onCalculate={calculateTax} onClear={resetAll} />
            </div>
            {errors && <ErrorMessages errorMessages={errors} />}
            {taxData && (
                <div className="taxcalculatoroutput">
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Tax</strong></td>
                                <td>{taxData.tax}</td>
                            </tr>
                            <tr>
                                <td><strong>Net Income</strong></td>
                                <td>{taxData.netIncome}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
