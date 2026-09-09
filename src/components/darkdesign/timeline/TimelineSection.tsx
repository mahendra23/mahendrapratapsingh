import { useState, useEffect } from "react";
import "../../darkdesign/timeline/TimelineSection.scss";
import { timelineData } from "../../../mockdata/darkdesign/experiencedata";
import { Heading } from "../heading/heading";
import { ICONS_FOLDER, IMAGES_FOLDER } from "../../../common/constants";

export default function TimelineSection() {
  const [visibleCount, setVisibleCount] = useState(4); // for <900px
  const [isMobile, setIsMobile] = useState(false);
  const fallbackLogo = `${IMAGES_FOLDER}/logo.png`;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) {
        setVisibleCount(timelineData.length); // show all on desktop
      } else {
        setVisibleCount(4); // initial collapsed
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMore = () => {
    setVisibleCount((prev) =>
      prev + 4 > timelineData.length ? timelineData.length : prev + 4
    );
  };

  const showLess = () => {
    setVisibleCount(4);
  };

  return (
    <section id="timelinesection" className="timeline">
      <Heading headingText="Professional Journey" />
      <div className="timeline-container">
        {timelineData.slice(0, visibleCount).map((exp, index) => (
          <div className="timeline-item slide-down" key={index}>
            <span className="year">{exp.period}</span>
            <h6 className="role">{exp.role}</h6>
            <div className="company-row">
              {exp.logo && (
                <img
                  className="timeline-logo"
                  alt={`${exp.company} logo`}
                  src={`${ICONS_FOLDER}/${exp.logo}`}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = fallbackLogo;
                  }}
                />
              )}
              <h6 className="company">{exp.company}</h6>
            </div>
            <p>{exp.highlight}</p>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="timeline-actions">
          <button
            className="btn load-more"
            onClick={visibleCount < timelineData.length ? showMore : showLess}
          >
            {visibleCount < timelineData.length ? "Load More" : "Show Less"}
          </button>
        </div>
      )}
    </section>
  );
}
