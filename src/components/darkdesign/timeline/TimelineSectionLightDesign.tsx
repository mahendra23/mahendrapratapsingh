import clsx from "clsx";
import "./TimelineSectionLightDesign.scss";
import { timelineData } from "../../../mockdata/darkdesign/experiencedata";
import { Heading } from "../heading/heading";

export default function TimelineSectionLightDesign() {
  return (
    <section id="timelinesection-light-design" className="timeline-light-design">
      <Heading headingText="Professional Journey" />
      <div className="journeysectioncontainer">
        <ul className="journetsectiontimeline">
          {timelineData.map((data, index) => (
            <li
              key={"light-design-journey-item-" + index}
              className={clsx("event", data.highlight.length > 0 && "eventborderbottom")}
              data-date={data.period}
            >
              <h3>{data.role}</h3>
              <h6>{data.company}</h6>
              {/* <p>{data.period}</p> */}
              <p className="multiline-text">{data.highlight}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
