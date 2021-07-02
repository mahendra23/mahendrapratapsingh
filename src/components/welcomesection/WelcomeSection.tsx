import React, { ReactElement } from 'react'
import Grid from '@material-ui/core/Grid';
import Type from "./Type";
import "./WelcomeSection.scss";

export default function WelcomeSection(): ReactElement {
    return (
        <div className="welcomesection">
            <Grid container spacing={1}>
                <Grid item xs={12} className="welcometext">
                    <p className="welcome">Hi There! <span className="Welcome-wave">👋</span></p>
                    <p className="welcomename">I'M MAHENDRA PRATAP SINGH</p>
                    <p className="welcomedesc">A passionate Full Stack Automation Engineer 🚀 +</p>
                </Grid>
                <Grid item xs={12}>
                    <div className="welcometype">
                        <Type />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
