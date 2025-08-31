import React from "react";
import { FaKey, FaCalendarAlt, FaFont, FaExchangeAlt, FaQrcode } from "react-icons/fa";
import "./DashboardSection.scss";
import { Heading } from "../heading/heading";
import { PasswordGenerator } from "./passwordgenerator/PasswordGenerator";

type UtilityCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode; // actual tool UI
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

export const DashboardSection = (): JSX.Element => {
  return (
    <section id={"dashboard"} className="dashboardsection section">
      <Heading headingText={"DASHBOARD"} />
      <div className="dashboardcontainer">
        <UtilityCard
          title="Secure Password Generator"
          description="Generate strong and random passwords safely."
          icon={<FaKey />}
        >
          <PasswordGenerator />
        </UtilityCard>
        <UtilityCard
          title="Date Calculator"
          description="Find age or countdown to an event."
          icon={<FaCalendarAlt />}
        >
          {/* 📆 Date calculator component */}
        </UtilityCard>
        <UtilityCard
          title="Text Tools"
          description="Convert case, count words, and clean text."
          icon={<FaFont />}
        >
          {/* 📝 Text tools */}
        </UtilityCard>
        <UtilityCard
          title="Converter"
          description="Convert units and currency."
          icon={<FaExchangeAlt />}
        >
          {/* 📦 Converter */}
        </UtilityCard>
        <UtilityCard
          title="QR Code Generator"
          description="Generate QR codes for links and text."
          icon={<FaQrcode />}
        >
          {/* 🔲 QR Code generator */}
        </UtilityCard>
      </div>
    </section>
  );
}
