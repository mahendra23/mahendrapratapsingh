import React, { ReactElement } from 'react'
import "./WelcomeSection.scss";
import Type from "./Type";

// export default function WelcomeSection(): ReactElement {
//     return (
//         <div className="Welcome-section" id="welcome-section">
//             <Grid container spacing={7}>
//                 <Grid item xs={7} id="Welcome-section-text" className="Welcome-section-text">
//                     <p className="Welcome-heading">Hi There! <span className="Welcome-wave">👋</span></p>
//                     <p className="Welcome-heading">I'M MAHENDRA PRATAP SINGH</p>
//                     <p className="Welcome-desc">A passionate Full Stack Automation Engineer 🚀 +</p>
//                     <div style={{ padding: 50, textAlign: "left" }}>
//                         <Type />
//                     </div>
//                 </Grid>
//                 {/* <Grid item xs={5} id="Welcome-section-image" className="Welcome-section-image">
//                      <img id="welcome-image" src={welcomeimage} className="Welcome-image" alt="home" />
//                 </Grid> */}
//             </Grid>
//         </div>
//     )
// }

export default function WelcomeSection(): ReactElement {
    return (
        <div className="Welcome-section" id="welcome-section">
            <div id="Welcome-section-text" className="Welcome-section-text">
                <p className="Welcome-heading">Hi There! <span className="Welcome-wave">👋</span></p>
                <p className="Welcome-name">I'M MAHENDRA PRATAP SINGH</p>
                <p className="Welcome-desc">A passionate Full Stack Automation Engineer 🚀 +</p>
                <div className="Welcome-type">
                    <Type />
                </div>
            </div>
        </div>
    )
}
