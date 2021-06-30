import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WelcomeSection from '../welcomesection/WelcomeSection';
import Header from '../header/Header';
import "./HomeLayout.scss";
import WhoAmI from '../whoami/WhoAmI';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));


export default function HomeLayout() {
  const classes = useStyles();

  return (
    <div className="Home-layout">
      <Grid container spacing={0}>
        <Grid item xs={12} id="header-container">
          <Header />
        </Grid>
        <Grid item xs={12} id="welcome-container">
          <WelcomeSection />
        </Grid>
        <Grid item xs={12} id="whoami-container">
          <WhoAmI />
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
  );
}

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
