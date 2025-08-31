import { useState } from "react";
import "./TaxCalculator.scss";
import { UtilButton } from "../utilbutton/UtilButton";

export const TaxCalculator = (): JSX.Element => {
    const [annualIncome, setAnnualIncome] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const [netIncome, setNetIncome] = useState<number>(0);

    interface TaxBracket {
        threshold: number; // lower bound of bracket
        rate: number; // tax rate in decimal
    }

    // NZ income tax brackets 2025/26
    const nzTaxBrackets: TaxBracket[] = [
        { threshold: 0, rate: 0.105 },       // 10.5% for income up to $14,000
        { threshold: 15600, rate: 0.175 },  // 17.5% for $14,001 – $48,000
        { threshold: 53500, rate: 0.30 },   // 30% for $48,001 – $70,000
        { threshold: 78100, rate: 0.33 },   // 33% for $70,001 – $180,000
        { threshold: 180000, rate: 0.39 },  // 39% for $180,001+
    ];

    function calculateNZTax(): void {
        let income = annualIncome;
        if (income <= 0) setTax(0);
        let tax = 0;
        for (let i = nzTaxBrackets.length - 1; i >= 0; i--) {
            const bracket = nzTaxBrackets[i];
            if (income > bracket.threshold) {
                tax += (income - bracket.threshold) * bracket.rate;
                income = bracket.threshold;
            }
        }
        setTax(parseFloat(tax.toFixed(2)));
        setNetIncome(annualIncome - tax);
    }

    return (
        <div className="taxcalculator">
            <div className="taxcalculatorcontrols">
                <label>
                    Annual income: &nbsp;
                    <input
                        id="annualincomeinput"
                        type="text"
                        value={annualIncome}
                        onChange={(e) => {setTax(0);setAnnualIncome(e.target.value === "" ? 0 : Number(e.target.value))}}
                        placeholder="Enter annual income"
                    />
                </label>
                <UtilButton onClick={calculateNZTax} title="Calculate Tax" />
            </div>
            <div className="taxcalculatoroutput">
                <div className="taxcalculatoroutputresultdisplay">
                    <input type="text" value={`Annual Tax: ${tax}`} readOnly />
                    <input type="text" value={`Net Income: ${netIncome}`} readOnly />
                </div>
            </div>
        </div>
    );
}
