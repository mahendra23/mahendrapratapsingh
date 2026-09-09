import { getWorkingDaysBetweenDates } from "./HolidaysAndDateUtilFunctions";
import { calculateNZAccLevy, calculateNZTax } from "./TaxUtilFunctions";

export interface EarningsDetailItem {
    earningsDetailName: string,
    earningsDetailValue: string,
}

export type EarningsDetail = EarningsDetailItem[];

export const BlankEarning: EarningsDetail = [];

export const calculateEarnings = (
    hourlyRate: string,
    finYear: string,
    publicHolidayCount: string,
    leaveCount: string,
    hourlyIndemnityRate: string
) => {
    const rateNum = parseFloat(hourlyRate);
    const publicHolidays = parseFloat(publicHolidayCount);
    const leaves = parseFloat(leaveCount);
    const indemnityRate = parseFloat(hourlyIndemnityRate);
    //srart year
    let startYear = finYear.split("-")[0];
    //end year
    let endYear = finYear.split("-")[1];
    //networkingdays
    let startDate = new Date(Number(startYear), 2, 1);
    let endDate = new Date(Number(endYear), 2, 0);
    let totalWorkingDays = getWorkingDaysBetweenDates(startDate, endDate);
    let netWorkingDays = totalWorkingDays - publicHolidays - leaves;
    //gross annual income
    let grossAnnualIncome = netWorkingDays * rateNum * 8;
    //indemnity insurance
    let indemnityInsurance = netWorkingDays * indemnityRate * 8;
    //tax
    let tax = calculateNZTax(grossAnnualIncome.toString());
    //acc levy
    let accLevy = calculateNZAccLevy(finYear, grossAnnualIncome.toString());
    //net income
    let netIncome = grossAnnualIncome - tax - accLevy;
    //gst
    let gst = grossAnnualIncome * 0.15;
    const earningDetail: EarningsDetail = [
        {
            earningsDetailName: "Financial Year",
            earningsDetailValue: finYear,
        },
        {
            earningsDetailName: "Hourly Rate",
            earningsDetailValue: formatCurrency(rateNum),
        },
        {
            earningsDetailName: "Total Working Days",
            earningsDetailValue: formatNumber(totalWorkingDays),
        },
        {
            earningsDetailName: "Public Holidays",
            earningsDetailValue: formatNumber(publicHolidays),
        },
        {
            earningsDetailName: "Leaves",
            earningsDetailValue: formatNumber(leaves),
        },
        {
            earningsDetailName: "Net Working Days",
            earningsDetailValue: formatNumber(netWorkingDays),
        },
        {
            earningsDetailName: "Gross Income",
            earningsDetailValue: `${formatCurrency(grossAnnualIncome)} / ${formatCurrency(grossAnnualIncome/12)}`,
        },
        {
            earningsDetailName: "Income Tax",
            earningsDetailValue: `${formatCurrency(tax)} / ${formatCurrency(tax/12)}`,
        },
        {
            earningsDetailName: "ACC Levy",
            earningsDetailValue: `${formatCurrency(accLevy)} / ${formatCurrency(accLevy/12)}`,
        },
        {
            earningsDetailName: "Tax + ACC Levy",
            earningsDetailValue: `${formatCurrency(tax + accLevy)} / ${formatCurrency((tax + accLevy) / 12)}`,
        },
        {
            earningsDetailName: "Indemnity Insurance",
            earningsDetailValue: formatCurrency(indemnityInsurance),
        },
        {
            earningsDetailName: "Net Income",
            earningsDetailValue: `${formatCurrency(netIncome)} / ${formatCurrency(netIncome/12)}`,
        },
        {
            earningsDetailName: "GST",
            earningsDetailValue: `${formatCurrency(gst)} / ${formatCurrency(gst/12)}`,
        },
    ];
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