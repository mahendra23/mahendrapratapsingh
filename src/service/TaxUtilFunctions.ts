import { formatCurrency } from "./EarningsDetailsUtilFunctions";
import { FinancialYearsEnum } from "./AppEnums";

interface TaxBracket {
    threshold: number; // lower bound of bracket
    rate: number; // tax rate in decimal
}

// NZ income tax brackets 2025/26
const nzTaxBrackets: TaxBracket[] = [
    { threshold: 0, rate: 0.105 },       // 10.5% for income up to $15,600
    { threshold: 15600, rate: 0.175 },  // 17.5% for $16,601 – $53,500
    { threshold: 53500, rate: 0.30 },   // 30% for $53,501 – $78,100
    { threshold: 78100, rate: 0.33 },   // 33% for $78,101 – $180,000
    { threshold: 180000, rate: 0.39 },  // 39% for $180,001+
];

export interface TaxDetails {
    tax: string,
    accLevy: string,
    taxAccLevy: string,
    netIncome: string
}

const accLevyMaxIncomeByFinancialYear: Record<string, number> = {
    [FinancialYearsEnum.DEFAULT]: 0,
    [FinancialYearsEnum.CURRENT]: 156641,
    [FinancialYearsEnum.NEXT]: 160244,
    [FinancialYearsEnum.AFTERNEXT]: 163847,
};

const accLevyRateByFinancialYear: Record<string, number> = {
    [FinancialYearsEnum.DEFAULT]: 0,
    [FinancialYearsEnum.CURRENT]: 1.75 / 100,
    [FinancialYearsEnum.NEXT]: 1.83 / 100,
    [FinancialYearsEnum.AFTERNEXT]: 1.90 / 100,
};

export const calculateNZAccLevy = (finYear: string, annualIncome: string): number => {
    const income = parseFloat(annualIncome);
    const maxIncome = accLevyMaxIncomeByFinancialYear[finYear] ?? 0;
    const earning = Math.min(income, maxIncome);
    const rate = accLevyRateByFinancialYear[finYear] ?? 0;
    let accLevy = earning * rate;
    return accLevy;
};

export const calculateNZTax = (annualIncome: string): number => {
    let income = parseFloat(annualIncome)
    let tax = 0;
    for (let i = nzTaxBrackets.length - 1; i >= 0; i--) {
        const bracket = nzTaxBrackets[i];
        if (income > bracket.threshold) {
            tax += (income - bracket.threshold) * bracket.rate;
            income = bracket.threshold;
        }
    }
    return tax;
}

export const calculateNZTaxAndNetIncome = (annualIncome: string): TaxDetails => {
    let tax = calculateNZTax(annualIncome);
    let netIncome = parseFloat(annualIncome) - tax;
    let taxDetails: TaxDetails = {
        tax: `${formatCurrency(tax)} / ${formatCurrency(tax/12)}`,
        accLevy: "",
        taxAccLevy: "",
        netIncome: `${formatCurrency(netIncome)} / ${formatCurrency(netIncome/12)}`
    };
    return taxDetails;
}