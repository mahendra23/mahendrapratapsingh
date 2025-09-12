import { 
  FaKey, 
  FaCalendarAlt, 
  FaFont, 
  FaExchangeAlt, 
  FaQrcode, 
  FaDollarSign 
} from "react-icons/fa";
import { ComponentType } from "react";
import { PasswordGenerator } from "../components/utilcomponents/passwordgenerator/PasswordGenerator";
import DateCalculator from "../components/utilcomponents/datecalculator/DateCalculator";
import { EarningCalculator } from "../components/utilcomponents/earningcalculator/EarningCalculator";
import { PublicHolidays } from "../components/utilcomponents/publicholidays/PublicHolidays";
import { TaxCalculator } from "../components/utilcomponents/taxcalculator/TaxCalculator";

export interface UtilityItemType {
  id: string;
  title: string;
  description: string;
  icon: ComponentType; 
  children?: ComponentType; 
}

export const UtilityItemsData: UtilityItemType[] = [
    {
        id: "passwordgenerator",
        title: "Secure Password Generator",
        description: "Generate strong and random passwords safely.",
        icon: FaKey,
        children: PasswordGenerator
    },
    {
        id: "earningcalculator",
        title: "NZ Contractor Earnings Calculator",
        description: "Annual Earnings for an hourly rate contractor.",
        icon: FaDollarSign,
        children: EarningCalculator
    },
    {
        id: "taxcalculator",
        title: "NZ Income Tax Calculator",
        description: "Annual Income tax calculator for New Zealand.",
        icon: FaDollarSign,
        children: TaxCalculator,
    },
    {
        id: "publicholidays",
        title: "Public Holidays (NZ)",
        description: "Lists public holidays in a year.",
        icon: FaCalendarAlt,
        children: PublicHolidays,
    },
    {
        id: "datecalculator",
        title: "Date Calculator",
        description: "Find age or countdown to an event.",
        icon: FaCalendarAlt,
        children: DateCalculator,
    },
    {
        id: "converter",
        title: "Converter",
        description: "Convert units and currency.",
        icon: FaExchangeAlt,
    },
    {
        id: "qrcodegenerator",
        title: "QR Code Generator",
        description: "Generate QR codes for links and text.",
        icon: FaQrcode,
    },
    {
        id: "texttools",
        title: "Text Tools",
        description: "Convert case, count words, and clean text.",
        icon: FaFont,
    },
];
