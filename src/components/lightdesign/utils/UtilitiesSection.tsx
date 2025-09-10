import React from "react";
import { FaKey, FaCalendarAlt, FaFont, FaExchangeAlt, FaQrcode, FaDollarSign } from "react-icons/fa";
import "./UtilitiesSection.scss";
import { Heading } from "../heading/heading";
import { PasswordGenerator } from "./passwordgenerator/PasswordGenerator";
import { headerdata } from "../../../mockdata/lightdesign/headerdata";
import { DateCalculator } from "./datecalculator/DateCalculator";
import { TaxCalculator } from "./taxcalculator/TaxCalculator";
import { PublicHolidays } from "./publicholidays/PublicHolidays";
import { EarningCalculator } from "./earningcalculator/EarningCalculator";

type UtilityCardProps = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

function UtilityCard({ title, description, icon, children }: UtilityCardProps) {
  return (
    <div className="card">
      <div className="cardheader">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {children}
    </div>
  );
}

export const UtilitiesSection = (): JSX.Element => {
  return (
    <section id={headerdata.header[5].id} className="utilitiessection section">
      <Heading headingText={headerdata.header[5].title} />
      <div className="utilitiescontainer">
        <UtilityCard
          id="passwordgenerator"
          title="Secure Password Generator"
          description="Generate strong and random passwords safely."
          icon={<FaKey />}
        >
          <PasswordGenerator />
        </UtilityCard>
        <UtilityCard
          id="earningcalculator"
          title="NZ Contractor Earnings Calculator"
          description="Annual Earnings for an hourly rate contractor."
          icon={<FaDollarSign />}
        >
          <EarningCalculator />
        </UtilityCard>
        <UtilityCard
          id="taxcalculator"
          title="NZ Income Tax Calculator"
          description="Annual Income tax calculator for New Zealand."
          icon={<FaDollarSign />}
        >
          <TaxCalculator />
        </UtilityCard>
        <UtilityCard
          id="datecalculator"
          title="Date Calculator"
          description="Find age or countdown to an event."
          icon={<FaCalendarAlt />}
        >
          <DateCalculator />
        </UtilityCard>
        <UtilityCard
          id="publicholidays"
          title="Public Holidays (NZ)"
          description="Lists public holidays in a year."
          icon={<FaCalendarAlt />}
        >
          <PublicHolidays />
        </UtilityCard>
        <UtilityCard
          id="converter"
          title="Converter"
          description="Convert units and currency."
          icon={<FaExchangeAlt />}
        >
          {/* 📦 Converter */}
        </UtilityCard>
        <UtilityCard
          id="qrcodegenerator"
          title="QR Code Generator"
          description="Generate QR codes for links and text."
          icon={<FaQrcode />}
        >
          {/* 🔲 QR Code generator */}
        </UtilityCard>
        <UtilityCard
          id="texttools"
          title="Text Tools"
          description="Convert case, count words, and clean text."
          icon={<FaFont />}
        >
          {/* 📝 Text tools */}
        </UtilityCard>
      </div>
    </section>
  );
}
