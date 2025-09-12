import { formatCurrency } from "./EarningsDetailsUtilFunctions";

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
    netIncome: string
}

export const calculateNZTaxAndNetIncome = (annualIncome: string): TaxDetails => {
    let income = parseFloat(annualIncome)
    // if (income <= 0) return 0;
    let tax = 0;
    for (let i = nzTaxBrackets.length - 1; i >= 0; i--) {
        const bracket = nzTaxBrackets[i];
        if (income > bracket.threshold) {
            tax += (income - bracket.threshold) * bracket.rate;
            income = bracket.threshold;
        }
    }
    let taxDetails: TaxDetails = {
        tax: `${formatCurrency(tax)} / ${formatCurrency(tax/12)}`,
        netIncome: `${formatCurrency(parseFloat(annualIncome) - tax)} / ${formatCurrency((parseFloat(annualIncome) - tax)/12)}`
    };
    return taxDetails;
}