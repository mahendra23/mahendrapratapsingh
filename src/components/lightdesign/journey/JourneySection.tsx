import "./JourneySection.scss";
import { headerdata } from "../../../mockdata/lightdesign/headerdata";
import { Heading } from "../heading/heading";
import { experiencedata } from "../../../mockdata/lightdesign/experiencedata";
import clsx from "clsx";

export const JourneySection = (): JSX.Element => {
    return (
        <div id={headerdata.header[4].id} className="journeySection">
            <Heading headingText={experiencedata.title} />
            <div className="journeysectioncontainer">
                <ul className="journetsectiontimeline">
                    {experiencedata.workexp.map((data) => (
                        <li className={clsx("event", (data.desc.length > 0) && "eventborderbottom")} data-date={data.date}>
                            <h3>{data.title}</h3>
                            <p>{data.company}</p>
                            <p>{data.area}</p>
                            <p className="multiline-text">{data.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};