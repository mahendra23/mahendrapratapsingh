import "./WelcomeSection.scss";
import { ImArrowDown } from "react-icons/im";
import { headerdata } from "../../mockdata/headerdata";

export const WelcomeSection = (): JSX.Element => {
    return (
        <section id={headerdata.header[0].id} className="welcomesection">
            <div className="welcomesection-text-container">
                <p className="welcomename">MAHENDRA PRATAP SINGH</p>
                <p className="welcomedesc">My Interactive Resume</p>
            </div>
            <div className="welcomedownarrow">
                <a href="#aboutsection">
                    <ImArrowDown />
                </a>
            </div>
        </section>
    );
};