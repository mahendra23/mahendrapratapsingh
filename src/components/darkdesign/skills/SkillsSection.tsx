import React, { useState, useEffect } from "react";
import "../../darkdesign/skills/SkillsSection.scss";
import { skills } from "../../../mockdata/darkdesign/skillsData";
import { Heading } from "../../darkdesign/heading/heading";

export default function SkillsSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCard = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="skills" id="skillssection">
      <Heading headingText="Skills" />
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const isOpen = !isMobile || openIndexes.includes(index);
          return (
            <div className="skill-card" key={index}>
              {isMobile ? (
                <div
                  className="skill-card-header"
                  onClick={() => toggleCard(index)}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  <h3>{skill.category}</h3>
                  <span className="collapse-icon">{isOpen ? "-" : "+"}</span>
                </div>
              ) : (
                <h3>{skill.category}</h3>
              )}

              {isOpen && (
                <ul className={skill.items.length > 5 ? "two-columns" : ""}>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
