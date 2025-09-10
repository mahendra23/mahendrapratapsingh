import { getWorkingDaysBetweenDates } from "./HolidaysAndDateUtilFunctions";
import { calculateNZTaxAndNetIncome } from "./TaxUtilFunctions";

export interface EarningsDetail {
    finYear: string,
    hourlyRate: string,
    netWorkingDays: string,
    grossAnnualIncome: string,
    tax: string,
    netAnnualIncome: string,
    gst: string,
}

export const BlankEarning: EarningsDetail = {
        finYear: "",
        hourlyRate: "0",
        netWorkingDays: "0",
        grossAnnualIncome: "0",
        tax: "0",
        netAnnualIncome: "0",
        gst: "0",
    };

export const calculateEarnings = (hourlyRate: string, finYear: string) => {
    const rateNum = parseFloat(hourlyRate);
    //srart year
    let startYear = finYear.split("-")[0];
    //end year
    let endYear = finYear.split("-")[1];
    //networkingdays
    let startDate = new Date(`${startYear}-04-01`);
    let endDate = new Date(`${endYear}-03-31`);
    //assuming 12 public holidays in a financial year
    let publicHolidays = 12;
    let totalWorkingDays = getWorkingDaysBetweenDates(startDate, endDate);
    let netWorkingDays = totalWorkingDays - publicHolidays;
    //gross annual income
    let grossAnnualIncome = netWorkingDays * rateNum * 8;
    //tax
    let taxDetails = calculateNZTaxAndNetIncome(grossAnnualIncome.toString());
    //gst
    let gst = grossAnnualIncome * 0.15;
    let earningDetail: EarningsDetail = {
        finYear: finYear,
        hourlyRate: formatCurrency(rateNum),
        netWorkingDays: formatNumber(netWorkingDays),
        grossAnnualIncome: `${formatCurrency(grossAnnualIncome)} / ${formatCurrency(grossAnnualIncome/12)}`,
        tax: taxDetails.tax,
        netAnnualIncome: taxDetails.netIncome,
        gst: `${formatCurrency(gst)} / ${formatCurrency(gst/12)}`,
    };
    return earningDetail;
}

export const formatCurrency = (currencyVal: number): string => {
    // Format and add space between $ and value
    return new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', currencyDisplay: 'symbol' })
        .format(currencyVal)
        .replace('$', '$ ');
}

export const formatNumber = (numberVal: number): string => {
    return new Intl.NumberFormat('en-NZ')
        .format(numberVal);
}