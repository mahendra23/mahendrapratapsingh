// import { useState, useEffect } from "react";
// import "../../darkdesign/utils/UtilsSection.scss";
// import { UtilityItemsData } from "../../../mockdata/utilsdata";
// import { Heading } from "../heading/heading";

// export default function UtilsSection() {
//   const [visibleCount, setVisibleCount] = useState(4); // for <900px
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 900);
//       if (window.innerWidth >= 900) {
//         setVisibleCount(UtilityItemsData.length); // show all on desktop
//       } else {
//         setVisibleCount(4); // initial collapsed
//       }
//     };

//     handleResize(); // initial check
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const showMore = () => {
//     setVisibleCount((prev) =>
//       prev + 4 > UtilityItemsData.length ? UtilityItemsData.length : prev + 4
//     );
//   };

//   return (
//     <section id="utilssection" className="utils">
//       <Heading headingText="Utilities" />
//       <div className="utils-container">
//         {UtilityItemsData.slice(0, visibleCount).map((utilItem) => (
//           <div className="utils-item slide-down" key={utilItem.id}>
//             <span className="title"><utilItem.icon />&nbsp;{utilItem.title}</span>
//             <h6>{utilItem.description}</h6>
//             {utilItem.children && <utilItem.children />}
//           </div>
//         ))}
//       </div>

//       {isMobile && visibleCount < UtilityItemsData.length && (
//         <div className="utils-actions">
//           <button className="btn load-more" onClick={showMore}>
//             Load More
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

import React from "react";
import "../../darkdesign/utils/UtilsSection.scss";
import Heading from "../heading/Heading";
import UtilsContainer from "../../utilcomponents/utilscontainer/UtilsContainer";

export default function UtilsSection() {
  return (
    <section id="utilssection" className="utils">
      <Heading headingText="Utilities" />
      <UtilsContainer />
    </section>
  );
}
