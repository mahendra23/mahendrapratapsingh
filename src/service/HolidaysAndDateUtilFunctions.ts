import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { CountryCodeEnum } from "./AppEnums";
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);


export interface Holiday {
  date: string;
  name: string;
  types: string;
  localName: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
}

const getPublicHolidays = async (countryCode: string): Promise<Holiday[]> => {
    const API_KEY = process.env.API_NINJAS_KEY || "U02nExdoOHWdXFj/4zVbEQ==Y8f0FMm2vSV23dLr";
    const apiBaseUrl = `https://api.api-ninjas.com/v1/holidays?country=${countryCode}`;
    const response = await fetch(apiBaseUrl,{headers: {"X-Api-Key": API_KEY,},});

    if (!response.ok) throw new Error("Failed to fetch holidays");
    const data = await response.json();

    const mapped = (data || []).map((h: any) => ({
        date: h.date, 
        localName: h.name,
        name: h.name,
        countryCode: h.country,
        fixed: h.fixed,
        global: h.global,
        counties: h.counties,
        types: h.type,
    }));
    return mapped;
}

export const getSortedPublicHolidays = async (countryCode: string): Promise<Holiday[]> => {
    const holidaysData = await getPublicHolidays(countryCode);
    if (!holidaysData) return [];
    const nationalHolidays = (countryCode === CountryCodeEnum.NZ) ? holidaysData.filter((holidayData) => holidayData.types === 'NATIONAL_HOLIDAY') : holidaysData;
    return nationalHolidays.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export enum DateFormat {
  DD_MMM_YYYY = "DD MMM YYYY",
  DD_MMMM_YYYY = "DD MMMM YYYY",
  YYYY_MM_DD = "YYYY-MM-DD",
  MM_DD_YYYY = "MM/DD/YYYY"
}

export const formatDate = (
  date: string,
  format: DateFormat = DateFormat.DD_MMMM_YYYY
): string => {
  return dayjs(date).format(format);
};

export const getHolidaysBetweenAprilAndDecember = (holidays: Holiday[]): Holiday[] => {
  return holidays.filter(h => {
    const date = dayjs(h.date);
    const year = date.year();
    const start = dayjs(`${year}-04-01`);
    const end = dayjs(`${year}-12-31`);
    return date.isSameOrAfter(start) && date.isSameOrBefore(end);
  });
};

export const getHolidaysBetweenJanAndMarch = (holidays: Holiday[]): Holiday[] => {
  return holidays.filter(h => {
    const date = dayjs(h.date);
    const year = date.year();
    const start = dayjs(`${year}-01-01`);
    const end = dayjs(`${year}-03-31`);
    return date.isSameOrAfter(start) && date.isSameOrBefore(end);
  });
};

export const getWorkingDaysBetweenDates = (
  startDate: Date,
  endDate: Date
): number => {

  // Ensure startDate <= endDate
  let start = new Date(startDate);
  let end = new Date(endDate);
  if (start > end) {
    [start, end] = [end, start];
  }

  let workingDays = 0;

  while (start <= end) {
    // 0 = Sun, 6 = Sat
    const day = start.getDay();
    if (day !== 0 && day !== 6) {
      workingDays++;
    }
    start.setDate(start.getDate() + 1);
  }
  return workingDays;
}