import "./WelcomeSection.scss";
import { headerdata } from "../../../mockdata/lightdesign/headerdata";
import { FaArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";

export const WelcomeSection = (): JSX.Element => {
    return (
        <section id={headerdata.header[0].id} className="welcomesection">
            <div className="welcomesection-text-container">
                <p className="welcomename">MAHENDRA PRATAP SINGH</p>
                <p className="welcomedesc">My Interactive Resume</p>
            </div>
            <div className="welcomedownarrow">
                <a href={headerdata.header[1].id}>
                    <DownarrowIcon />
                </a>
            </div>
        </section>
    );
};

const DownarrowIcon = (): JSX.Element => {
    return (
    <IconContext.Provider value={{ size: "25px"}}>
        <FaArrowDown />
    </IconContext.Provider>
    );
};
//https://learn.microsoft.com/api/achievements/share/en-us/MahendraPratapSingh-9478/W78DFQRN?sharingId=131A018CCF7AA08E