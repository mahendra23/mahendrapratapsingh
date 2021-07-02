import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./HomeLayout.scss";
import WelcomeSection from '../welcomesection/WelcomeSection';
import WhoAmISection from '../whoamisection/WhoAmISection';

export default function HomeLayout() {

  return (
    <div className="Home-layout">
      <WelcomeSection />
      <WhoAmISection />
    </div>
  );
}

// export default function HomeLayout() {

//   return (
//     <div className="Home-layout">
//       <Grid container spacing={2}>
//         <Grid item xs={12} id="welcome-container">
//           <WelcomeSection />
//         </Grid>
//         <Grid item xs={12} id="whoami-container">
//           <WhoAmISection />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }