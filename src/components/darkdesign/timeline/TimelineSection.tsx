import { useState, useEffect } from "react";
import "../../darkdesign/timeline/TimelineSection.scss";
import { timelineData } from "../../../mockdata/darkdesign/experiencedata";
import { Heading } from "../heading/heading";

export default function TimelineSection() {
  const [visibleCount, setVisibleCount] = useState(4); // for <900px
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section id="timelinesection" className="timeline">
      <Heading headingText="Professional Journey" />
      <div className="timeline-container">
        {timelineData.slice(0, visibleCount).map((exp, index) => (
          <div className="timeline-item slide-down" key={index}>
            <span className="year">{exp.period}</span>
            <h6>{exp.role}</h6>
            <h6>{exp.company}</h6>
            <p>{exp.highlight}</p>
          </div>
        ))}
      </div>

      {isMobile && visibleCount < timelineData.length && (
        <div className="timeline-actions">
          <button className="btn load-more" onClick={showMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
