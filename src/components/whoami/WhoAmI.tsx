import React, { ReactElement } from 'react'
import mypic from "../../images/whoami/Mahen.jpg";
import "./WhoAmI.scss";
import Grid from '@material-ui/core/Grid';

export default function WhoAmI(): ReactElement {
    return (
        // <div className="Whoami-section" id="whoami-section">
        //     <img src={mypic} alt="" className="Whoami-section-image" />
        //     <div id="whoami-section-heading" className="Whoami-section-heading">
        //         <p>Who Am I?</p>
        //     </div>
        // </div>
        <div className="Whoami-section" id="whoami-section">
            <Grid container spacing={0}>
                <Grid item xs={12} id="header-contain">
                    <p id="whoami-section-heading" className="Whoami-section-heading">Who Am I?</p>
                </Grid>
                <Grid item xs={12} id="welcome-contai">
                
                </Grid>
                <Grid item xs={12} id="whoami-cont">
                
                </Grid>
                {/* <Grid item xs={12} id="skills-container">
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} id="experience-container">
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} id="personal-projects-container">
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid> */}
            </Grid>
        </div>
    )
}
