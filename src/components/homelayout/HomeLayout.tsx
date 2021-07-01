import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./HomeLayout.scss";
import WelcomeSection from '../welcomesection/WelcomeSection';
import WhoAmI from '../whoamisection/WhoAmISection';
import Divider from '@material-ui/core/Divider';

export default function HomeLayout() {

  return (
    <div className="Home-layout">
      <WelcomeSection />
      <Divider />
      <WhoAmI />
    </div>
  );
}

// export default function HomeLayout() {

//   return (
//     <div className="Home-layout">
//       <Grid container >
//         <Grid item xs={12} id="header-container">
//           <Header />
//         </Grid>
//         <Grid item xs={12} id="welcome-container">
//           <WelcomeSection />
//         </Grid>
//         <Grid item xs={12} id="whoami-container">
//           <WhoAmI />
//         </Grid>
//         {/* <Grid item xs={12} id="skills-container">
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} id="experience-container">
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} id="personal-projects-container">
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid> */}
//       </Grid>
//     </div>
//   );
// }

// export default function HomeLayout() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} id="header-container">
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={12} >
//           <Welcomecontainer />
//         </Grid>
//         <Grid item xs={12} id="about-container">
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} id="skills-container">
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} id="experience-container">
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={12} id="personal-projects-container">
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
